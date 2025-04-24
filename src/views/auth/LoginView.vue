<script setup>
import { ref } from 'vue'

const theme = ref('light')

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div class="theme-wrapper" :class="theme">
    <v-responsive class="d-flex align-center justify-center" style="min-height: 100vh">
      <v-app :theme="theme">
        <v-app-bar color="transparent" flat>
          <v-spacer></v-spacer>
          <v-btn
            :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            class="mx-2"
            variant="text"
            @click="toggleTheme"
          ></v-btn>
        </v-app-bar>

        <v-main>
          <v-container class="fill-height d-flex align-center justify-center">
            <v-card
              class="pa-6"
              elevation="10"
              rounded="xl"
              :style="
                theme === 'dark'
                  ? 'background-color: #1e293b; color: white;'
                  : 'background-color: #e3f2fd; color: #0d47a1;'
              "
              style="width: 360px"
            >
              <h2
                class="text-center mb-6 py-5"
                style="font-family: 'Comic Sans MS', cursive; font-weight: bold; color: inherit"
              >
                Hydroswift
              </h2>

              <v-text-field
                label="Username"
                variant="outlined"
                class="mb-4"
                density="comfortable"
                rounded
                hide-details
                :color="theme === 'dark' ? 'blue-lighten-2' : 'primary'"
              ></v-text-field>

              <v-text-field
                label="Password"
                type="password"
                variant="outlined"
                class="mb-2"
                density="comfortable"
                rounded
                hide-details
                :color="theme === 'dark' ? 'blue-lighten-2' : 'primary'"
              ></v-text-field>

              <div
                class="d-flex align-center justify-space-between text-caption mb-4"
                :class="theme === 'dark' ? 'text-blue-200' : 'text-blue-darken-2'"
              >
                <v-checkbox
                  label="Remember"
                  hide-details
                  density="compact"
                  class="ma-0"
                  color="primary"
                />
                <a
                  href="#"
                  class="text-decoration-none"
                  :style="theme === 'dark' ? 'color: #90caf9' : 'color: #1565c0'"
                  ><u>Forgot password</u></a
                >
              </div>
              <v-btn
                block
                :color="theme === 'dark' ? 'blue-darken-1' : 'blue-darken-3'"
                size="large"
                variant="flat"
                class="mb-4"
                style="font-weight: bold; font-style: italic"
                prepend-icon="mdi-login"
                to="/Homepage"
              >
                Log in
              </v-btn>

              <div class="d-flex align-center justify-center mb-3 text-grey">
                <span>──────── or ────────</span>
              </div>

              <div
                class="text-center text-body-2"
                :style="theme === 'dark' ? 'color: #bbdefb' : 'color: #0d47a1'"
              >
                No account yet?
                <u> <router-link to="/Usertype">Register</router-link></u>
              </div>
            </v-card>
          </v-container>
        </v-main>

        <v-footer
          bordergit
          app
          class="justify-center"
          :style="
            theme === 'dark'
              ? 'background-color: #0d1117; color: white;'
              : 'background-color: #bbdefb; color: #0d47a1;'
          "
        >
          <span
            >Caraga State University
            <h4 class="py-1 text-center"><u>HYDROSWIFT</u></h4></span
          >
        </v-footer>
      </v-app>
    </v-responsive>
  </div>
</template>

<style scoped>
.theme-wrapper {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.theme-wrapper::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/image/hs-bg.jpg') center/cover no-repeat;
  z-index: 0;
}

.theme-wrapper.dark::before {
  filter: brightness(0.6);
}

.v-main,
.v-application {
  background-color: transparent !important;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
}
a:hover {
  text-decoration: underline;
}
</style>
