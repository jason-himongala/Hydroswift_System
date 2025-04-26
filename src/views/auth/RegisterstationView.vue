<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { requiredValidator, emailValidator, passwordValidator } from '@/utils/validators'

const form = ref({
  firstName: '',
  lastName: '',
  stationName: '',
  contactNumber: '',
  email: '',
  streetAddress: '',
})

const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)

const refVForm = ref()

const router = useRouter()

function goBack() {
  router.back()
}

function onRegister() {
  alert(`Registering: ${form.value.firstName}`)
  router.push('/Confirmation')
}

const onFormSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) {
      onRegister()
    }
  })
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="py-8 d-flex align-center justify-center bg-gradient border rounded">
        <v-card elevation="12" class="pa-6 rounded-xl" max-width="700" style="background-color: #e3f2fd">
          <!-- Logo -->
          <div class="d-flex justify-center">
            <img
              src="/image/logo-removebg-preview.png"
              alt="Water Truck"
              width="100"
              class="my-5 pt-2"
            />
          </div>

          <!-- Title with back button -->
          <div class="d-flex align-center mb-4">
            <v-btn icon @click="goBack">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-card-title
              class="text-h5 font-weight-bold text-center flex-grow-1"
              style="font-family: 'Comic Sans MS'; color: #0d47a1"
            >
              Customer Registration Form
            </v-card-title>
          </div>

          <!-- Subtitle -->
          <v-card-subtitle class="text-center mb-4" style="color: #1976d2">
            Tell us about yourself!
          </v-card-subtitle>

          <!-- Form Fields -->
          <v-form ref="refVForm" fast-fail @submit.prevent="onFormSubmit">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.firstName"
                  label="Username"
                  :rules="[requiredValidator]"
                  variant="outlined"
                  prepend-inner-icon="mdi-account"
                  required
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.lastName"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  label="Password"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  :rules="[requiredValidator,passwordValidator]"
                  variant="outlined"
                  prepend-inner-icon="mdi-lock"
                  required
                />
              </v-col>
            </v-row>

            <v-text-field
              v-model="form.stationName"
              :type="isConfirmPasswordVisible ? 'text' : 'password'"
              label="Confirm Password"
              :append-inner-icon="isConfirmPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
              :rules="[requiredValidator, passwordValidator]"
              variant="outlined"
              prepend-inner-icon="mdi-lock-check"
              required
            />

            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.contactNumber"
                  label="Contact Number"
                  type="tel"
                  :rules="[requiredValidator]"
                  variant="outlined"
                  prepend-inner-icon="mdi-phone"
                  required
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.email"
                  label="Email Address"
                  type="email"
                  :rules="[requiredValidator, emailValidator]"
                  variant="outlined"
                  prepend-inner-icon="mdi-email"
                  required
                />
              </v-col>
            </v-row>

            <v-text-field
              v-model="form.streetAddress"
              label="Street Address"
              :rules="[requiredValidator]"
              variant="outlined"
              prepend-inner-icon="mdi-home"
              required
            />

            <!-- Submit Button -->
            <v-btn
              type="submit"
              block
              color="blue-darken-2"
              size="large"
              class="mt-4"
              style="font-weight: bold; font-style: italic"
            >
             <router-link to="/Confirmation"> Register</router-link>
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
