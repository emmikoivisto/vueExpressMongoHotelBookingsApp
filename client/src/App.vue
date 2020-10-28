<template>
  <main>
    <h1>Hotel bookings</h1>
    <bookings-form></bookings-form>
  </main>
</template>

<script>
import {eventBus} from './main';
import BookingsForm from './components/BookingsForm'


export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  mounted () {
    eventBus.$on('added-booking', (booking) => {
      this.bookings.push(booking);
    })
  },
  methods: {

  },
  components: {
    'bookings-form': BookingsForm
  }
}
</script>

<style>

</style>
