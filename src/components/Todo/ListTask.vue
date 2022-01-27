<template>
  <v-list
      class="p-0"
      flat
  >
    <draggable
        v-model="tasks"
        handle=".handle"
    >
      <task
          v-for="task in tasks"
          :key="task.id"
          :task="task"
      />
    </draggable>
  </v-list>
</template>

<script>
import Task from "./Task";
import draggable from 'vuedraggable'

export default {
  name: "ListTask",
  components: {
    Task,
    draggable
  },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.tasksFiltered
      },
      set(value) {
        this.$store.commit('setTasks', value)
      }
    }
  }
}
</script>