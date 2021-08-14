import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: [
            {
                id: 1,
                title: "Wake up",
                done: true
            },
            {
                id: 2,
                title: "Get Bananas",
                done: false
            },
            {
                id: 3,
                title: "Eat Bananas",
                done: false
            }
        ]
    },
    mutations: {
        addTask(state,newTaskTitle) {
            let newTask = {
                id: Date.now(),
                title: newTaskTitle,
                done: false
            }
            state.tasks.push(newTask)
        },
        doneTask(state,id) {
            let task = state.tasks.find(task => task.id === id)
            task.done = !task.done
        },
    },
    actions: {},
    getters: {},
    modules: {}
})
