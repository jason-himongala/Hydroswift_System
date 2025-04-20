<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const form = ref({
  stationName: '',
  passwordName: '',
  confirmPassword: '',
  contactNumber: '',
  email: '',
  streetAddress: '',
  city: '',
  state: '',
  postalCode: '',
})

const router = useRouter()
function goBack() {
  router.back()
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="py-8 d-flex align-center justify-center bg-gradient">
        <v-card
          elevation="12"
          class="pa-6 rounded-xl"
          max-width="700"
          style="background-color: #e3f2fd"
        >
          <!-- Logo -->
          <div class="d-flex justify-center">
            <img src="/image/logo-removebg-preview.png" alt="Water Truck Logo" width="100" class="my-5 pt-2" />
          </div>

          <!-- Header with Go Back button -->
          <div class="d-flex align-center mb-4">
            <v-btn icon @click="goBack">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-card-title
              class="text-h5 font-weight-bold text-center flex-grow-1"
              style="font-family: 'Comic Sans MS'; color: #0d47a1"
            >
              Station Registration Form
            </v-card-title>
          </div>

          <v-card-subtitle class="text-center mb-4" style="color: #1976d2">
            Tell us about your water station!
          </v-card-subtitle>

          <v-form>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.stationName"
                  label="Station name"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.passwordName"
                  label="Password"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
              v-model="form.confirmPassword"
              label="Confirm Password"
              variant="outlined"
              required
            ></v-text-field>

            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.contactNumber"
                  label="Contact Number"
                  type="tel"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.email"
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
              v-model="form.streetAddress"
              label="Street Address"
              variant="outlined"
              required
            ></v-text-field>

            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.city"
                  label="City"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.state"
                  label="State/Province"
                  variant="outlined"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
              v-model="form.postalCode"
              label="Postal/Zip Code"
              variant="outlined"
              required
            ></v-text-field>

            <v-btn
              block
              color="blue-darken-2"
              size="large"
              class="mt-4"
              style="font-weight: bold; font-style: italic"
            >
              <router-link to="/Confirmation" class="text-white text-decoration-none"
                >Register</router-link
              >
            </v-btn>
          </v-form>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #81d4fa, #0288d1);
  min-height: 100vh;
}
</style>
