<template>
  <section class="bookings-wrapper">
      <booking v-for="(booking, index) in bookings" :key="index" :booking="booking"></booking>
  </section>
</template>

<script>
import Booking from './Booking.vue'

export default {
name: 'bookings-grid',
props: ['bookings'],

components: {
    'booking': Booking
}
}
</script>

<style scoped>

.bookings-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    justify-content: center;
}

</style>