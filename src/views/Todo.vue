<template>
  <div class="home pa-6">
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
                  @click.stop="deleteTask(task.id)"
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

export default {
  name: 'Home',
  data() {
    return {
      	newTaskTitle: '',
    }
  },
  methods: {
    addTask(){
      this.$store.commit('addTask',this.newTaskTitle)
	  this.newTaskTitle = ''
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }
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
