<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const stations = ref([
  { name: 'AquaPure Station', price: 25, quantity: 0, image: 'https://img.freepik.com/free-vector/clean-water-delivery-service-truck_23-2148623172.jpg' },
  { name: 'BlueWave Refills', price: 27, quantity: 0, image: 'https://img.freepik.com/free-vector/water-transportation-concept-illustration_114360-10184.jpg' },
  { name: 'FreshSpring Depot', price: 30, quantity: 0, image: 'https://img.freepik.com/free-vector/bottle-water-delivery-service_23-2148623113.jpg' },
  { name: 'HydroPlus H2O', price: 28, quantity: 0, image: 'https://img.freepik.com/free-vector/water-delivery-concept-illustration_114360-10183.jpg' },
  { name: 'EcoDrop Water Station', price: 26, quantity: 0, image: 'https://img.freepik.com/free-vector/eco-friendly-delivery-concept-illustration_114360-8237.jpg' },
  { name: 'Crystal Clear Source', price: 29, quantity: 0, image: 'https://img.freepik.com/free-vector/bottle-delivery-service-concept_23-2148623131.jpg' }
])

const increment = (index) => {
  stations.value[index].quantity++
}

const decrement = (index) => {
  if (stations.value[index].quantity > 0) stations.value[index].quantity--
}

const placeOrder = () => {
  const selected = stations.value.filter(s => s.quantity > 0)
  if (selected.length) {
    router.push({
      path: '/placeorder',
      query: { stations: JSON.stringify(selected) }
    })
  } else {
    alert('Please select at least one station with quantity.')
  }
}
</script>

<template>
  <v-responsive class="order-page" style="min-height: 100vh">
    <v-app>
      <v-main>
        <v-container class="py-10 text-center">
          <h1 class="text-h4 font-weight-bold mb-8" style="font-family: 'Comic Sans MS'">
            Choose a Water Station
          </h1>
          <v-row class="justify-center" v-motion-fade>
            <v-col
              v-for="(station, index) in stations"
              :key="station.name"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card class="pa-4" elevation="8" rounded="xl" v-motion-slide-bottom>
                <v-img
                  :src="station.image"
                  height="140"
                  cover
                ></v-img>
                <v-card-title class="text-h6 mt-2">{{ station.name }}</v-card-title>
                <v-card-subtitle class="text-subtitle-1">₱{{ station.price }} / gallon</v-card-subtitle>
                <v-card-text class="d-flex align-center justify-center">
                  <v-btn icon @click="decrement(index)"><v-icon>mdi-minus</v-icon></v-btn>
                  <span class="mx-4">{{ station.quantity }}</span>
                  <v-btn icon @click="increment(index)"><v-icon>mdi-plus</v-icon></v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-btn
            color="blue-darken-2"
            class="mt-8 px-8 py-4 text-white"
            size="large"
            style="font-weight: bold; font-style: italic"
            @click="placeOrder"
            v-motion-pop
          >
            Place Order
          </v-btn>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped>
.order-page {
  background: linear-gradient(to bottom, #d0f0fd, #bbdefb);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
