<template>
  <div class="home pa-6">
    <new-task></new-task>
    <list-task v-if="$store.state.tasks.length"></list-task>
    <no-task v-else></no-task>
  </div>
</template>

<script>
import NewTask from "../components/Todo/NewTask";
import ListTask from "../components/Todo/ListTask";
import NoTask from "../components/Todo/NoTask";

export default {
  name: 'Home',
  components: {
    NewTask,
    ListTask,
    NoTask
  }
}
</script>


