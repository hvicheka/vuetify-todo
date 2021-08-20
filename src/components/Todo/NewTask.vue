<template>
  <v-text-field
      v-model="newTaskTitle"
      @keyup.enter="addTask"
      class="mb-3"
      outlined
      label="New Task"
      clearable
      hide-details
  >
    <template v-slot:append>
      <v-icon
          @click="addTask"
          color="primary"
          :disabled="newTaskTitleInvalid"
      >
        mdi-plus
      </v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "NewTask",
  data() {
    return {
      newTaskTitle: '',
    }
  },
  computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle
    }
  },
  methods: {
    addTask() {
      if (!this.newTaskTitleInvalid) {
        this.$store.dispatch('addTask', this.newTaskTitle)
        this.newTaskTitle = ''
      }
    }
  }
}
</script>