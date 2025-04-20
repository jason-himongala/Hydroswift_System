<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const theme = ref('light')
const drawer = ref(false)
const router = useRouter()

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive
    :class="['home-background', theme === 'dark' ? 'dark-overlay' : 'light-overlay']"
    style="min-height: 100vh; transition: background 0.6s ease"
  >
    <v-app :theme="theme">
      <!-- App Bar -->
      <v-app-bar flat color="transparent" class="fade-in-top">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title
          class="d-flex align-center"
          style="font-family: 'Comic Sans MS'; font-weight: bold"
        >
          <v-img
            src="/image/logo-removebg-preview.png"
            alt="Logo"
            height="32"
            width="32"
            class="mr-4 ml-10 mt-1"
            cover
          ></v-img>
          <span style="line-height: 1">Hydroswift</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="text"
          @click="toggleTheme"
        />
      </v-app-bar>

      <!-- Navigation Drawer -->
      <v-navigation-drawer v-model="drawer" app temporary>
        <v-list nav dense>
          <v-list-item link @click="router.push('/Profile')">
            <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
            <v-list-item-title>My Profile</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="router.push('/history')">
            <v-list-item-icon><v-icon>mdi-history</v-icon></v-list-item-icon>
            <v-list-item-title>Order History</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="router.push('/subscription')">
            <v-list-item-icon><v-icon>mdi-email-newsletter</v-icon></v-list-item-icon>
            <v-list-item-title>Subscription</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="router.push('/settings')">
            <v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="router.push('/support')">
            <v-list-item-icon><v-icon>mdi-lifebuoy</v-icon></v-list-item-icon>
            <v-list-item-title>Support</v-list-item-title>
          </v-list-item>
          <v-divider class="my-2"></v-divider>
          <v-list-item link @click="router.push('/Login')">
            <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Main Content with Transition -->
      <v-main>
        <v-container class="text-center py-10 fade-in-up">
          <v-row class="d-flex justify-center">
            <v-col cols="12" sm="8" md="6" class="pa-4 rounded-lg elevation-4 animated-card">
              <v-img
                src="/public/image/truck-logo.jpg"
                alt="Water Truck"
                contain
                height="180"
                class="hover-bounce mb-6"
              />
              <h1
                class="mb-4 text-h5 font-weight-bold"
                style="font-family: 'Comic Sans MS'; color: inherit"
              >
                Efficient water ordering and tracking made easy!
              </h1>
              <v-btn
                color="primary"
                size="x-large"
                class="mt-6 px-12 py-4 bounce-on-hover"
                style="font-weight: bold; font-style: italic"
                @click="router.push('/order')"
              >
                Order now!
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <!-- Footer -->
      <v-footer
        app
        class="justify-center py-4 fade-in-bottom"
        :style="theme === 'dark'
            ? 'background-color: #0d1117; color: white'
            : 'background-color: #bbdefb; color: #0d47a1'"
      >
        <div class="text-center">
          <span>Caraga State University</span>
          <h4 class="mt-1"><u>HYDROSWIFT</u></h4>
        </div>
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<style scoped>
.home-background {
  background-image: url('/image/bg-photo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
}

.dark-overlay::before,
.light-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: background-color 0.6s ease;
}

.dark-overlay::before {
  background-color: rgba(0, 0, 0, 0.65);
}

.light-overlay::before {
  background-color: rgba(255, 255, 255, 0.4);
}

/* Animations */
.fade-in-up {
  animation: fadeInUp 1s ease forwards;
}
.fade-in-bottom {
  animation: fadeInBottom 1s ease forwards;
}
.fade-in-top {
  animation: fadeInTop 1s ease forwards;
}

.hover-bounce {
  transition: transform 0.3s ease;
}
.hover-bounce:hover {
  transform: scale(1.05);
}

.bounce-on-hover {
  transition: all 0.3s ease;
}
.bounce-on-hover:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.animated-card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.animated-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInTop {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
