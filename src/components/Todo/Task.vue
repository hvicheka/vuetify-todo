<template>
  <div>
    <v-list-item @click="$store.commit('doneTask',task.id)" :class="{'blue lighten-5' : task.done}">
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title :class="{'text-decoration-line-through': task.done}">
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="task.due_date">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ task.due_date | formatDueDate}}
          </v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <task-menu :task="task"></task-menu>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TaskMenu from "./TaskMenu";
import {format} from 'date-fns'
export default {
  name: "Task",
  props: ['task'],
  components: {TaskMenu},
  filters: {
    formatDueDate(value){
      return format(new Date(value),'MMM dd')
    }
  }
}
</script>
