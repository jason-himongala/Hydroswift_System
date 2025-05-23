<script setup>
import { useRouter } from 'vue-router'
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
  confirmedValidator,
} from '@/utils/validators'
import { ref } from 'vue'
import { supabase, formActionDefault } from '@/utils/supabase'

const formDataDefault = ref({
  fullName: '',
  password: '',
  passwordConfirm: '',
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

const onFormSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) {
      onSubmit()
    }
  })
}

const onSubmit = async () => {
  formAction.value.formProcess = true

  const { data, error } = await supabase.auth.signUp({
    email: form.value.email,
    password: form.value.password,
    options: {
      data: {
        fullName: form.value.fullName,
        contactNumber: form.value.contactNumber,
        streetAddress: form.value.streetAddress,
      },
    },
  })

  if (error) {
    console.log(error)
    formAction.value.formErrorMessage = error.message
    formAction.value.formStatus = error.message
  } else if (data) {
    console.log(data)
    formAction.value.formSuccessMessage = 'Successfully Registered Account.'
    refVForm.value?.reset()

    // ✅ Automatically go to confirmation page after success
    router.push('/Confirmation')
  }

  formAction.value.formProcess = false
}

const form = ref({
  ...formDataDefault.value,
})

const formAction = ref({ ...formActionDefault })
</script>

<template>
  <v-alert
    v-if="formAction.formSuccessMessage"
    :text="formAction.formSuccessMessage"
    title="Success!"
    type="success"
    variant="tonal"
    density="compact"
    border="start"
    closable
  ></v-alert>
  <v-alert
    v-if="formAction.formErrorMessage"
    :text="formAction.formErrorMessage"
    title="Ooops!"
    type="error"
    variant="tonal"
    density="compact"
    border="start"
    closable
  ></v-alert>

  <v-app>
    <v-main>
      <v-container class="py-8 d-flex align-center justify-center bg-gradient border rounded">
        <v-card
          elevation="12"
          class="pa-6 rounded-xl"
          max-width="700"
          style="background-color: #e3f2fd"
        >
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
            Create your customer account below
          </v-card-subtitle>

          <!-- Form Fields -->
          <v-form ref="refVForm" @submit.prevent="onFormSubmit">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.fullName"
                  label="Full Name"
                  :rules="[requiredValidator]"
                  variant="outlined"
                  prepend-inner-icon="mdi-account"
                  required
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  label="Password"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  :rules="[requiredValidator, passwordValidator]"
                  variant="outlined"
                  prepend-inner-icon="mdi-lock"
                  required
                />
              </v-col>
            </v-row>

            <v-text-field
              v-model="form.passwordConfirm"
              :type="isConfirmPasswordVisible ? 'text' : 'password'"
              label="Confirm Password"
              :append-inner-icon="isConfirmPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
              :rules="[requiredValidator, confirmedValidator(form.password, form.passwordConfirm)]"
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
              :disabled="formAction.formProcess"
              :loading="formAction.formProcess"
            >
              Register
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
