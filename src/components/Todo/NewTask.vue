<template>
  <v-text-field
      v-model="newTaskTitle"
      full-width
      @keyup.enter="addTask"
      class="mb-4 ml-4 mr-5 mt-3 new-task"
      outlined
      placeholder="New Task"
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

<style lang="sass">
.v-text-field
  width: 100%
.new-task.v-input--is-focused
  .v-input__slot
    background: rgba(31,94,129, 0.5)
</style>