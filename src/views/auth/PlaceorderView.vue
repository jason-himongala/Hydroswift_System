<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/utils/supabase'

const route = useRoute()

// Get passed query params from OrderView
const station = ref({})
const total = ref(0)

// For customer profile
const userData = ref({
  fullName: '',
  email: '',
  contactNumber: '',
  streetAddress: '',
})

onMounted(async () => {
  // Parse data passed from OrderView
  if (route.query.station) {
    station.value = JSON.parse(route.query.station)
  }
  if (route.query.total) {
    total.value = parseFloat(route.query.total)
  }

  // Fetch logged-in user data
  const {
    data: { session },
  } = await supabase.auth.getSession()
  const user = session?.user

  if (user) {
    userData.value = {
      fullName: user.user_metadata.fullName || '',
      email: user.email,
      contactNumber: user.user_metadata.contactNumber || '',
      streetAddress: user.user_metadata.streetAddress || '',
    }
  }
})
</script>

<template>
  <v-container class="py-10 px-4">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6" elevation="12" rounded="xl">
          <v-card-title class="text-center text-h5 font-weight-bold mb-4">
            Order Confirmed!
          </v-card-title>

          <v-card-subtitle class="text-center mb-6 text-subtitle-1">
            Thank you, {{ userData.fullName }}. Your order is now being delivered. 💧
          </v-card-subtitle>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6 mb-2">📦 Order Summary</h3>
          <p><strong>Station:</strong> {{ station.name }}</p>
          <p><strong>Quantity:</strong> {{ station.quantity }} gallon(s)</p>
          <p><strong>Total Payment:</strong> ₱{{ total }}</p>

          <div class="text-center mt-6">
            <v-icon color="green" size="40">mdi-check-circle</v-icon>
            <p class="mt-2 font-weight-bold text-h6">Thank you for choosing HydroSwift!</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
p {
  margin: 4px 0;
}
</style>
