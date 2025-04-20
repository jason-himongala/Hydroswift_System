<template>
  <v-container class="py-10 order-history-section" fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-btn
          color="primary"
          class="mb-4"
          outlined
          @click="$router.push('/Homepage')"
        >
          <v-icon left>mdi-arrow-left</v-icon>
        </v-btn>

        <v-card elevation="10" rounded="xl">
          <v-card-title class="text-h5 font-weight-bold">Order History</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-data-table
              :headers="orderHeaders"
              :items="orderHistory"
              class="elevation-1"
              disable-sort
            >
              <template #item.status="{ item }">
                <v-chip :color="getStatusColor(item.status)" small dark>
                  {{ item.status }}
                </v-chip>
              </template>

              <template #no-data>
                <div class="text-center py-6">
                  <v-icon size="48" color="grey lighten-1">mdi-cart-off</v-icon>
                  <p class="text-subtitle-1 mt-2">No order history found.</p>
                </div>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OrderHistoryView",
  data() {
    return {
      orderHeaders: [
        { text: 'Order ID', value: 'orderId' },
        { text: 'Date', value: 'date' },
        { text: 'Product', value: 'product' },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Status', value: 'status' },
      ],
      orderHistory: [
        {
          orderId: 'ORD-1001',
          date: '2025-04-15',
          product: 'Refill Gallon',
          quantity: 5,
          status: 'Delivered',
        },
        {
          orderId: 'ORD-1002',
          date: '2025-04-17',
          product: 'Container 5L',
          quantity: 2,
          status: 'Pending',
        },
        {
          orderId: 'ORD-1003',
          date: '2025-04-19',
          product: 'Refill Gallon',
          quantity: 3,
          status: 'Cancelled',
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      switch (status) {
        case 'Delivered':
          return 'green';
        case 'Pending':
          return 'orange';
        case 'Cancelled':
          return 'red';
        default:
          return 'grey';
      }
    },
  },
};
</script>

<style scoped>
.order-history-section {
  background: linear-gradient(to bottom, #f0f4f8, #ffffff);
  min-height: 100vh;
}
</style>
