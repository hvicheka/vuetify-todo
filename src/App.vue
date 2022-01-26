<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        :mobile-breakpoint="768"
        app
    >
      <v-img
          class="pa-5"
          src="mountain.jpg"
          height="150"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
        <v-avatar class="mb-3 ml-5">
          <img
              height="100"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Hok Vicheka"
          >
        </v-avatar>
        <div class="white--text">hvicheka.it@gmail.com</div>
        <div class="white--text">Hok Vicheka</div>
      </v-img>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="primary"
        dark
        src="mountain.jpg"
        prominent
        height="150"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-toolbar-title class="text-h4 ml-4">
            {{ $store.state.appTitle }}
          </v-toolbar-title>
        </v-row>
        <v-row>
          <live-date-time></live-date-time>
        </v-row>
      </v-container>

      <v-spacer></v-spacer>
      <search></search>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar></snackbar>
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "./components/Shared/Snackbar";
import LiveDateTime from "./components/Tools/LiveDateTime";
import Search from "./components/Tools/Search";

export default {
  data: () => ({
    drawer: null,
    items: [
      {title: 'Todo', icon: 'mdi-format-list-checks', to: '/'},
      {title: 'About', icon: 'mdi-help-box', to: '/about'},
    ],
  }),
  components: {Snackbar, LiveDateTime, Search}
}
</script>