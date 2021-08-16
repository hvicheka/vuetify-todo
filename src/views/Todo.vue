<template>
  <div class="home pa-6">
    <new-task></new-task>
    <list-task  v-if="$store.state.tasks.length"></list-task>
    <div v-else class="no-task">
      <v-icon size="100" color="primary">
        mdi-check
      </v-icon>
      <div class="text-h5 primary--text">No Tasks</div>
    </div>
  </div>
</template>

<script>
import NewTask from "../components/Todo/NewTask";
import ListTask from "../components/Todo/ListTask";

export default {
  name: 'Home',
  components: {
    NewTask,
    ListTask
  }
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
