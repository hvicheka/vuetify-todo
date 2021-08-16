<template>
  <div class="no-task">
    <v-icon size="100" color="primary">
      mdi-check
    </v-icon>
    <div class="text-h5 primary--text">No Tasks</div>
  </div>
</template>

<script>
export default {
  name: "NoTask"
}
</script>

<style lang="css">
.no-task {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
</style>