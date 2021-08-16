<template>
  <v-list
      class="p-0"
      flat
  >
    <task
        v-for="task in $store.state.tasks"
        :key="task.id"
        :task="task"
    />
  </v-list>
</template>

<script>
import Task from "./Task";

export default {
  name: "ListTask",
  components: {Task}
}
</script>