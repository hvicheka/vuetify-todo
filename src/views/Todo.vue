<template>
  <div class="home pa-6">
    <list-task v-if="$store.state.tasks.length"></list-task>
    <no-task v-else></no-task>
    <button-done-sorting v-if="$store.state.sorting"></button-done-sorting>
  </div>
</template>

<script>
import ListTask from "../components/Todo/ListTask";
import NoTask from "../components/Todo/NoTask";
import ButtonDoneSorting from "../components/Todo/ButtonDoneSorting";

export default {
  name: 'Home',
  components: {
    ListTask,
    NoTask,
    ButtonDoneSorting
  }
}
</script>


