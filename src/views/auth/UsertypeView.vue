<script setup>
import { ref } from 'vue'

const theme = ref('light')

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive
    class="d-flex align-center justify-center border rounded"
    :class="theme === 'dark' ? 'bg-dark' : 'bg-light'"
    style="min-height: 100vh"
  >
    <v-app :theme="theme">
      <v-app-bar color="transparent" flat>
        <v-spacer></v-spacer>
        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          class="mx-2"
          @click="toggleTheme"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container class="fill-height d-flex align-center justify-center">
          <v-card
            class="pa-6"
            elevation="12"
            rounded="xl"
            :style="
              theme === 'dark'
                ? 'background-color: #1e293b; color: white;'
                : 'background-color: #e1f5fe; color: #01579b;'
            "
            style="width: 380px"
          >
            <div class="text-center mb-6 py-12">
              <img src="/image/logo-removebg-preview.png" alt="Water Truck" width="220" class="my-5 pt-2" />
              <h1
                style="
                  font-family: 'Comic Sans MS', cursive;
                  font-weight: bold;
                  color: inherit;
                  font-size: 28px;
                "
              >
                Welcome to Hydroswift
              </h1>
            </div>

            <v-btn
              block
              size="large"
              rounded="lg"
              class="mb-4 text-white text-capitalize font-weight-bold text-decoration-underline"
              :style="
                theme === 'dark' ? 'background-color: #1e88e5;' : 'background-color: #1976d2;'
              "
            >
              <RouterLink to="/Station">Register your station</RouterLink>
            </v-btn>

            <v-btn
              block
              size="large"
              rounded="lg"
              class="text-white text-capitalize font-weight-bold text-decoration-underline"
              :style="
                theme === 'dark' ? 'background-color: #1e88e5;' : 'background-color: #1976d2;'
              "
            >
              <RouterLink to="/Customer">Register as a customer</RouterLink>
            </v-btn>
          </v-card>
        </v-container>
      </v-main>

      <v-footer
        border
        app
        class="justify-center"
        :style="
          theme === 'dark'
            ? 'background-color: #0d1117; color: white;'
            : 'background-color: #b3e5fc; color: #01579b;'
        "
      >
        <div class="text-center">
          <span>Caraga State University</span>
          <div>
            <strong><u>HYDROSWIFT</u></strong>
          </div>
        </div>
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<style scoped>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
a:hover {
  text-decoration: underline;
}
.bg-light {
  background: linear-gradient(135deg, #81d4fa, #0288d1);
}
.bg-dark {
  background: linear-gradient(135deg, #0f172a, #1e3a8a);
}

.v-main {
  background-color: #b3e5fc;
}

.RouterLink {
  color: white;
}
</style>
