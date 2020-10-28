<template>
  <div>
    <h2>{{ booking.name }}</h2> 
    <p>Guest Email Address: {{ booking.email }}</p>
    <p>Is {{ booking.name }} checked in? {{ booking.checked_in }}</p>
    <button v-on:click="deleteBooking">Delete Booking</button>
  </div>
</template>

<script>
import bookingServices from '../../services/bookingServices';
import { eventBus } from '../main';

export default {
  name: 'booking',
  props: ['booking'],
  methods: {
    deleteBooking() {
      bookingServices.deleteBooking(this.booking._id)
      .then(eventBus.$emit('deleted-booking', this.booking._id))
    }
  }
}
</script>

<style>

</style>