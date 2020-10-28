<template>
  <section class="form">
    <h1>Hotel bookings</h1>
    <form v-on:submit.prevent="addBooking" >
      <label for="name">Name: </label>
      <input type="text" v-model="name">
      <label for="email">Email Address: </label>
      <input type="text" v-model="email">
      <label for="checked-in">Are You Checked In?</label>
      <input type="checkbox" v-model="checked_in"><br>
      <input type="submit" value="submit" class="button">
    </form>
  </section>
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
.form {
  text-align: center;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.form label {
  margin: 5px;
}

.button{
margin-top: 20px;
width: 50px;
height: 50px;
font-size: 10px;
font-style: italic;
font-weight: 900;
background: blanchedalmond;
border: 3px solid brown;
border-radius: 50px;
cursor: pointer;
}

</style>