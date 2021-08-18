<template>
  <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="mb-3"
      outlined
      label="New Task"
      clearable
      hide-details
      append-icon="mdi-plus"
  ></v-text-field>
</template>

<script>
export default {
  name: "NewTask",
  data() {
    return {
      newTaskTitle: '',
    }
  },
  methods: {
    addTask() {
      if (this.newTaskTitle) {
        this.$store.dispatch('addTask', this.newTaskTitle)
        this.newTaskTitle = ''
      }
    }
  }
}
</script>