<template>
  <v-dialog
      ref="dialog"
      :value="true"
      :return-value.sync="date"
      persistent
      width="290px"
  >
    <v-date-picker
        v-model="date"
        scrollable
    >
      <v-spacer></v-spacer>
      <v-btn
          text
          color="primary"
          @click="$emit('close')"
      >
        Cancel
      </v-btn>
      <v-btn
          text
          color="primary"
          @click="updateTaskDueDate"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogDueDate",
  props: ['task'],
  data() {
    return {
      date: null
    }
  },
  methods: {
    updateTaskDueDate() {
      let payload = {
        id: this.task.id,
        name: this.task.name,
        due_date: this.date
      }
      this.$store.dispatch('updateTaskDueDate', payload)
      this.$emit('close')
    }
  },
  mounted() {
    this.date = this.task.due_date
  }
}
</script>

<style scoped>

</style>