<template>
  <form v-on:submit.prevent="addBooking">
    <label for="name">Name: </label>
    <input type="text" v-model="name">
    <label for="email">Email Address: </label>
    <input type="text" v-model="email">
    <label for="checked-in">Are You Checked In?</label>
    <input type="checkbox" v-model="checked_in">
    <input type="submit" value="Submit">
  </form>
</template>

<script>
import { eventBus } from '../main.js';
import bookingServices from '../../services/bookingServices.js';

export default {
  name: 'bookings-form',
  data () {
    return {
      name: "",
      email: "",
      checked_in: false
    }
  },
  methods: {
    addBooking: function() {
      const booking = {
        name : this.name,
        email : this.email,
        checked_in : this.checked_in
      };
      bookingServices.postBooking(booking)
      .then(res => eventBus.$emit('added-booking', res));
      this.name = ""
      this.email = ""
      this.checked_in = false
    }

  }
}
</script>

<style>

</style>