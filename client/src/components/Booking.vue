<template>
  <div class="booking">
    <h2>{{ booking.name }}</h2> 
    <p>Guest Email: {{ booking.email }}</p>
    <p>Is {{ booking.name }} checked in? {{ check_in }}</p>
    <button v-on:click="deleteBooking" class="button">delete</button>
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
  },
  computed: {
    check_in: function() {
      return (this.booking.checked_in ? "Yes" : "No");
    }
  }
}
</script>

<style scoped>

.booking {
    margin: 20px;
    border: solid 1px;
    padding: 10px;
    width: 200px;
}
.button{
margin-top: 0;
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