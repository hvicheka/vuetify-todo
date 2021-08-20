<template>
  <v-dialog
      :value="true"
      persistent
      max-width="290"
  >
    <v-card>
      <v-card-title class="text-h5">
        Edit Task
      </v-card-title>
      <v-card-text>
        Edit the title of this task:
        <v-text-field
            v-model="taskTitle"
            color="primary"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            text
            @click="$emit('close')"
        >
          Cancel
        </v-btn>
        <v-btn
            @click="updateTaskTitle"
            color="red darken-1"
            text
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogEdit",
  props: ['task'],
  data() {
    return {
      taskTitle: null
    }
  },
  mounted() {
    this.taskTitle = this.task.title
  },
  methods: {
    updateTaskTitle() {
      let payload = {
        id: this.task.id,
        title: this.taskTitle
      }
      this.$store.commit('updateTaskTitle', payload)
    }
  }
}
</script>