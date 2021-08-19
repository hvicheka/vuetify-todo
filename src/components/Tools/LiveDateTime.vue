<template>
  <div class="text-subtitle-1 ml-4">{{ currentDate }}</div>
</template>

<script>
import {format} from 'date-fns'

export default {
  name: "LiveDateTime",
  data() {
    return {
      currentDate: ''
    }
  },
  methods: {
    displayLiveDate() {
      this.currentDate = format(new Date(), "MMMM d, hh:mm:ss aa")
      setTimeout(this.displayLiveDate, 1000)
    }
  },
  mounted() {
    this.displayLiveDate()
  },

}
</script>