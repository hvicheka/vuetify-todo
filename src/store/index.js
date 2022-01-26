import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appTitle: process.env.vue_app_title,
        tasks: [
            {
                id: 1,
                title: "Wake up",
                due_date: '2021-08-02',
                done: true
            },
            {
                id: 2,
                title: "Get Bananas",
                due_date: '2021-08-02',
                done: false
            },
            {
                id: 3,
                title: "Eat Bananas",
                due_date: null,
                done: false
            }
        ],
        snackbar: {
            text: '',
            show: false,
            timeout: 2000
        },
        search: null,
        sorting: false
    },
    mutations: {
        addTask(state, newTaskTitle) {
            let newTask = {
                id: Date.now(),
                title: newTaskTitle,
                done: false
            }
            state.tasks.push(newTask)
        },
        updateTaskTitle(state, payload) {
            let task = state.tasks.find(task => task.id === payload.id)
            task.title = payload.title
        },
        updateTaskDueDate(state, payload) {
            let task = state.tasks.find(task => task.id === payload.id)
            task.due_date = payload.due_date
        },
        doneTask(state, id) {
            let task = state.tasks.find(task => task.id === id)
            task.done = !task.done
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id)
        },
        showSnackbar(state, text) {
            let timeout = 0
            // if snackbar is showing
            if (state.snackbar.show) {
                timeout = 300
            }
            // show new snackbar with timeout
            setTimeout(() => {
                state.snackbar.show = true
                state.snackbar.text = text
            }, timeout)
        },
        hideSnackbar(state) {
            state.snackbar.show = false
        },
        setSearch(state, value) {
            state.search = value
            console.log('search', value)
        },
    },
    actions: {
        addTask({commit}, newTaskTitle) {
            commit('addTask', newTaskTitle)
            commit('showSnackbar', 'Task added')
        },
        deleteTask({commit}, id) {
            commit('deleteTask', id)
            commit('showSnackbar', 'Task deleted')
        },
        updateTaskTitle({commit}, payload) {
            commit('updateTaskTitle', payload)
            commit('showSnackbar', 'Task updated')
        },
        updateTaskDueDate({commit}, payload) {
            commit('updateTaskDueDate', payload)
            commit('showSnackbar', 'Task Due Date updated!...')
        }
    },
    getters: {
        tasksFiltered(state) {
            if (!state.search) {
                return state.tasks
            }
            return state.tasks.filter(task =>
                task.title.toLowerCase().includes(state.search.toLowerCase())
            )
        }
    },
    modules: {}
})
