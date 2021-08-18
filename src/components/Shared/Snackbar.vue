<template>
  <v-snackbar
      v-model="$store.state.snackbar.show"
      :timeout="$store.state.snackbar.timeout"
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  data: () => ({
    snackbar: true,
    text: `Task added`,
  }),
}
</script>

<style scoped>

</style>