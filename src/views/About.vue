<template>
  <div class="about pa-6">
    <h1>About {{ appTitle }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid, assumenda cumque deserunt eaque expedita
      itaque molestiae nemo nesciunt quaerat rem similique. Beatae fugiat harum quos ratione repellendus soluta?
    </p>
  </div>
</template>
<script>


export default {
  computed: {
    appTitle() {
      return process.env.VUE_APP_TITLE
    }
  }
}
</script>