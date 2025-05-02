<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const station = ref({
  name: 'HydroSwift Water Station',
  pricePerGallon: 15,
  feePerGallon: 5,
  quantity: 0,
  image: '/image/station.jpg', // Changed to local image
  location: 'Purok2 Barangay Libertad, Butuan City',
  rating: 4.8,
  reviews: 124,
})

const increment = () => {
  station.value.quantity++
}

const decrement = () => {
  if (station.value.quantity > 0) station.value.quantity--
}

const calculateTotal = () => {
  const price = station.value.pricePerGallon * station.value.quantity
  const fee = station.value.feePerGallon * station.value.quantity
  return {
    subtotal: price,
    deliveryFee: fee,
    total: price + fee,
  }
}

const placeOrder = () => {
  if (station.value.quantity > 0) {
    router.push({
      path: '/placeorder',
      query: {
        station: JSON.stringify(station.value),
        total: calculateTotal().total,
      },
    })
  } else {
    alert('Please select at least one gallon.')
  }
}
</script>

<template>
  <v-responsive class="order-page" style="min-height: 100vh">
    <v-app>
      <v-main>
        <v-container class="py-6 px-4">
          <!-- Back Button -->
          <div class="d-flex justify-start mb-4">
            <v-btn @click="router.back()" color="blue-lighten-4" class="text-black px-4" rounded>
              <v-icon left>mdi-arrow-left</v-icon>
              Back
            </v-btn>
          </div>

          <div class="text-center">
            <h1 class="text-h4 font-weight-bold mb-2" style="font-family: 'Comic Sans MS'">
              HydroSwift Water Station
            </h1>
            <div class="d-flex align-center justify-center mb-6">
              <v-icon color="amber">mdi-star</v-icon>
              <span class="ml-1">{{ station.rating }} ({{ station.reviews }} reviews)</span>
              <v-icon color="blue" class="ml-4">mdi-map-marker</v-icon>
              <span class="ml-1">{{ station.location }}</span>
            </div>
          </div>

          <!-- Single Station Card -->
          <v-row class="justify-center" v-motion-fade>
            <v-col cols="12" sm="8" md="6">
              <v-card class="pa-4" elevation="8" rounded="xl" v-motion-slide-bottom>
                <v-img :src="station.image" height="200" cover class="mb-4"></v-img>

                <v-card-title class="text-h5">{{ station.name }}</v-card-title>

                <v-card-text>
                  <div class="d-flex justify-space-between mb-2">
                    <span>Price per gallon:</span>
                    <span>₱{{ station.pricePerGallon }}</span>
                  </div>
                  <div class="d-flex justify-space-between mb-4">
                    <span>Delivery fee per gallon:</span>
                    <span>₱{{ station.feePerGallon }}</span>
                  </div>

                  <div class="d-flex align-center justify-center mb-4">
                    <v-btn icon @click="decrement" :disabled="station.quantity <= 0">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <span class="mx-4 text-h5">{{ station.quantity }}</span>
                    <v-btn icon @click="increment">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </div>

                  <!-- Calculator Display -->
                  <v-divider class="my-4"></v-divider>
                  <div class="d-flex justify-space-between mb-2">
                    <span>Subtotal:</span>
                    <span>₱{{ calculateTotal().subtotal }}</span>
                  </div>
                  <div class="d-flex justify-space-between mb-2">
                    <span>Delivery Fee:</span>
                    <span>₱{{ calculateTotal().deliveryFee }}</span>
                  </div>
                  <v-divider class="my-2"></v-divider>
                  <div class="d-flex justify-space-between text-h6 font-weight-bold">
                    <span>Total:</span>
                    <span>₱{{ calculateTotal().total }}</span>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- Order Button -->
          <div class="text-center mt-6">
            <v-btn
              color="blue-darken-2"
              class="px-8 py-4 text-white"
              size="large"
              style="font-weight: bold; font-style: italic"
              @click="placeOrder"
              v-motion-pop
              :disabled="station.quantity <= 0"
            >
              Place Order (₱{{ calculateTotal().total }})
            </v-btn>
          </div>
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
