<template>
  <v-container class="profile-section py-10" fluid>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <!-- Back to Home Button -->
        <v-btn color="primary" class="mb-4" outlined @click="$router.push('/Homepage')">
          <v-icon left>mdi-arrow-left</v-icon> 
        </v-btn>

        <v-card class="profile-card" elevation="12" rounded="xl">
          <!-- Banner -->
          <v-img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            cover
            height="160"
            class="rounded-t-xl"
          />

          <!-- Profile Header -->
          <v-card-text class="text-center">
            <v-avatar size="100" class="elevation-5 profile-avatar">
              <v-img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
            </v-avatar>
            <h2 class="mt-4 font-weight-bold">Juan Dela Cruz</h2>
            <v-chip color="blue lighten-4" class="mt-1 mb-3" label>
              <v-icon left small>mdi-account-check</v-icon> Verified Customer
            </v-chip>
          </v-card-text>

          <!-- Tabs -->
          <v-tabs v-model="tab" background-color="transparent" grow>
            <v-tab>Profile Info</v-tab>
          </v-tabs>

          <v-divider></v-divider>

          <v-tabs-items v-model="tab">
            <!-- Profile Info Tab -->
            <v-tab-item>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6">
                    <strong>Address:</strong><br />
                    Blk 10 Lot 5, Butuan City
                  </v-col>
                  <v-col cols="12" md="6">
                    <strong>Contact:</strong><br />
                    +63 912 345 6789
                  </v-col>
                  <v-col cols="12" md="6" class="mt-3">
                    <strong>Email:</strong><br />
                    juan.delacruz@email.com
                  </v-col>
                </v-row>
              </v-card-text>
            </v-tab-item>

            <!-- Settings Tab -->
            <v-tab-item>
              <v-card-text>
                <v-btn color="primary" class="mr-2" outlined rounded>
                  <v-icon left>mdi-pencil</v-icon>Edit Profile
                </v-btn>
                <v-btn color="red lighten-1" class="mt-2" rounded outlined>
                  <v-icon left>mdi-logout</v-icon> <router-link to="/Login">Logout</router-link>
                </v-btn>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HydroswiftProfile',
  data() {
    return {
      tab: 0,
    }
  },
}
</script>

<style scoped>
.profile-section {
  background: linear-gradient(to bottom, #e0f7fa, #ffffff);
  min-height: 100vh;
}

.profile-card {
  overflow: hidden;
}

.profile-avatar {
  margin-top: -60px;
  border: 4px solid white;
  background-color: white;
}

.dark-theme .profile-section {
  background: linear-gradient(to bottom, #263238, #37474f);
}
</style>
