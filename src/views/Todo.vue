<template>
  <div class="home pa-6">
    <new-task></new-task>
    <list-task v-if="$store.state.tasks.length"></list-task>
    <no-task v-else></no-task>
    <button-done-sorting v-if="$store.state.sorting"></button-done-sorting>
  </div>
</template>

<script>
import NewTask from "../components/Todo/NewTask";
import ListTask from "../components/Todo/ListTask";
import NoTask from "../components/Todo/NoTask";
import ButtonDoneSorting from "../components/Todo/ButtonDoneSorting";

export default {
  name: 'Home',
  components: {
    NewTask,
    ListTask,
    NoTask,
    ButtonDoneSorting
  }
}
</script>


