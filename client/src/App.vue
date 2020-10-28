<template>
  <main>
    <h1>Hotel bookings</h1>
    <bookings-form></bookings-form>
    <bookings-grid :bookings="bookings"></bookings-grid>
  </main>
</template>

<script>
import {eventBus} from './main';
import bookingServices from '../services/bookingServices'
import BookingsForm from './components/BookingsForm'
import BookingsGrid from './components/BookingsGrid'

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  mounted () {
    bookingServices.getBookings()
    .then(bookings => this.bookings = bookings);

    eventBus.$on('added-booking', (booking) => {
      this.bookings.push(booking);
    });

    eventBus.$on('deleted-booking', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    })
  },
  methods: {

  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  }
}
</script>

<style>

</style>
