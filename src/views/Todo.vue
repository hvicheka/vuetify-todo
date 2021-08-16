<template>
  <div class="home pa-6">
    <new-task></new-task>
    <v-list
        v-if="$store.state.tasks.length"
        class="p-0"
        flat
    >
      <div v-for="task in $store.state.tasks" :key="task.id">
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
            <v-list-item-action>
              <v-btn
                  @click.stop="$store.commit('deleteTask',task.id)"
                  icon
              >
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div v-else class="no-task">
      <v-icon size="100" color="primary">
        mdi-check
      </v-icon>
      <div class="text-h5 primary--text">No Tasks</div>
    </div>
  </div>
</template>

<script>
import NewTask from "../components/Todo/NewTask";

export default {
  name: 'Home',
  components: {NewTask}
}
</script>

<style lang="css">
.no-task {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
</style>
