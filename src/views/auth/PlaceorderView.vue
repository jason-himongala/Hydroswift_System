<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const stations = ref([])

if (route.query.stations) {
  try {
    stations.value = JSON.parse(route.query.stations)
  } catch (e) {
    console.error("Error parsing stations", e)
  }
}

const totalAmount = computed(() =>
  stations.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
)

const confirmOrder = () => {
  alert('Order placed successfully!')
  router.push('/Homepage')
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="py-10">
        <h1 class="text-h5 font-weight-bold mb-6 text-center">Confirm Your Order</h1>

        <v-row justify="center" class="mb-6">
          <v-col
            v-for="(station, index) in stations"
            :key="index"
            cols="12"
            md="6"
          >
            <v-card class="pa-4" elevation="6" rounded="xl">
              <v-row no-gutters align="center">
                <v-col cols="4">
                  <v-img :src="station.image" height="100" contain></v-img>
                </v-col>
                <v-col cols="8">
                  <v-card-title class="text-subtitle-1">{{ station.name }}</v-card-title>
                  <v-card-subtitle class="text-body-2">₱{{ station.price }} × {{ station.quantity }}</v-card-subtitle>
                  <div class="text-body-1 font-weight-bold">₱{{ station.price * station.quantity }}</div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <div class="text-h6 text-center mb-4">Total: ₱{{ totalAmount }}</div>

        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-text-field label="Full Name" outlined dense required></v-text-field>
            <v-text-field label="Delivery Address" outlined dense required></v-text-field>
            <v-text-field label="Contact Number" outlined dense required></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn color="blue-darken-2" class="text-white px-8 py-4" @click="confirmOrder" v-motion-pop>
            Confirm & Pay
          </v-btn>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
body {
  background-color: #f5faff;
}
</style>
