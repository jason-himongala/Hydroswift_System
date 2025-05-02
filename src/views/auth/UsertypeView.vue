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
        <v-spacer />
        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          class="mx-2"
          @click="toggleTheme"
          variant="tonal"
          rounded
        />
      </v-app-bar>

      <v-main>
        <v-container class="fill-height d-flex align-center justify-center">
          <v-card
            class="pa-8 rounded-2xl text-center"
            elevation="12"
            max-width="420"
            :style="theme === 'dark'
              ? 'background-color: #1e293b; color: #e0e0e0;'
              : 'background-color: #e1f5fe; color: #01579b;'"
          >
            <div class="mb-8">
              <img
                src="/image/logo-removebg-preview.png"
                alt="Water Truck"
                width="180"
                class="my-5"
              />
              <h1 class="welcome-text">
                Welcome to Hydroswift
              </h1>
            </div>

           

            <v-btn
              block
              size="large"
              class="custom-btn"
              :style="theme === 'dark'
                ? 'background-color: #1e88e5;'
                : 'background-color: #1976d2;'"
              rounded="lg"
            >
              <RouterLink to="/Customer" class="btn-link">Register as a customer</RouterLink>
            </v-btn>
          </v-card>
        </v-container>
      </v-main>

      <v-footer
        app
        class="justify-center py-4"
        :style="theme === 'dark'
          ? 'background-color: #0d1117; color: #e0e0e0;'
          : 'background-color: #b3e5fc; color: #01579b;'"
      >
        <div class="text-center">
          <span class="footer-text">Caraga State University</span>
          <div class="footer-logo"><strong><u>HYDROSWIFT</u></strong></div>
        </div>
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<style scoped>
body {
  margin: 0;
  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.bg-light {
  background: linear-gradient(135deg, #81d4fa, #0288d1);
}

.bg-dark {
  background: linear-gradient(135deg, #0f172a, #1e3a8a);
}

.welcome-text {
  font-family: 'Comic Sans MS', cursive;
  font-weight: bold;
  font-size: 26px;
  line-height: 1.3;
  color: inherit;
}

.custom-btn {
  font-weight: bold;
  font-size: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.custom-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.btn-link {
  text-decoration: none;
  color: white;
  width: 100%;
  display: inline-block;
  padding: 8px 0;
}

.btn-link:hover {
  text-decoration: underline;
}

.footer-text {
  font-size: 14px;
}

.footer-logo {
  font-size: 16px;
  margin-top: 4px;
}

.v-main {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/image/hs-bg.jpg') center/cover no-repeat;
  z-index: 0;

}
</style>
