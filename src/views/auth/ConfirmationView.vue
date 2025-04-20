<template>
  <v-app>
    <v-main>
      <v-container class="fill-height d-flex align-center justify-center bg-gradient">
        <v-card class="pa-6 rounded-xl text-center" elevation="10" style="background-color: #e3f2fd; max-width: 500px;">
          <v-icon size="64" color="green">mdi-check-circle</v-icon>
          <h2 class="mt-4" style="color: #0d47a1;">Registration Successful!</h2>
          <p class="mt-2" style="color: #1976d2;">Thank you for registering your water station with us.</p>
          <v-btn class="mt-4" color="blue-darken-2" @click="$router.push('/Homepage')">  Go to Home</v-btn>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #81d4fa, #0288d1);
}
</style>
