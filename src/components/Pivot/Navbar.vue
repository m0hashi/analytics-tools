<template>
  <!-- <v-app> -->
  <div >
    <v-app-bar class="grey lighten-4" clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ config.title }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer pivot clipped v-model="drawer" >
      <!-- Navigation contents on left side -->
      <v-container >
        <v-list-item v-for="item in config.nav_items" :key="item.name" >
          <v-list-item-content>
            <v-list-item-title class="title">
              {{item.name}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-container>
      <!--  -->
    </v-navigation-drawer>
  <!-- </v-app> -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["nav_config"],
  data() {
    return {
      drawer: false,
      config: {
        title: "Pivot",
        nav_items: [
          { name: "Pivot", icon: "", route: "/pivot" },
          { name: "Plot", icon: "", route: "/plot" },
          { name: "xlot", icon: "", route: "/plot" },
        ],
      },
    };
  },
};
</script>
