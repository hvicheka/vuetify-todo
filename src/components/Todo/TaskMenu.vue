<template>
  <div>
    <v-menu
        bottom
        left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            icon
            v-bind="attrs"
            v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-edit
        v-if="dialogs.edit"
        @close="dialogs.edit = false"
        :task="task">
    </dialog-edit>

    <dialog-due-date
        v-if="dialogs.dueDate"
        @close="dialogs.dueDate = false"
        :task="task">
    </dialog-due-date>

    <dialog-delete
        v-if="dialogs.delete"
        @close="dialogs.delete = false"
        :task="task">
    </dialog-delete>

  </div>
</template>

<script>
import DialogDelete from "./Dialogs/DialogDelete";
import DialogEdit from "./Dialogs/DialogEdit";
import DialogDueDate from "./Dialogs/DialogDueDate";

export default {
  name: "TaskMenu",
  props: ['task'],
  components: {
    DialogDelete,
    DialogEdit,
    DialogDueDate,
  },
  data: () => ({
    dialogs: {
      delete: false,
      dueDate: false,
      edit: false,
    },
    items: [
      {
        title: 'Edit',
        icon: 'mdi-pencil',
        click() {
          this.dialogs.edit = true
        }
      },
      {
        title: 'Due Date',
        icon: 'mdi-calendar',
        click() {
          this.dialogs.dueDate = true
        }
      },
      {
        title: 'Delete',
        icon: 'mdi-delete',
        click() {
          this.dialogs.delete = true
        }
      }, {
        title: 'Sort',
        icon: 'mdi-drag-horizontal-variant',
        click() {
          this.$store.commit('toggleSorting')
        }
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this)
    }
  }
}
</script>