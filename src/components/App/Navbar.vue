<template>
  <!-- <v-app> -->
  <div>
    <v-app-bar app class="grey lighten-4" clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- Uitlity buttons -->
      <v-toolbar-item>
        <v-btn text 
         v-for="item in config.app_items" 
         :key="item.name"
         :to="item.route">
          {{item.name}}
          </v-btn>
      </v-toolbar-item>
      <!--  -->
    </v-app-bar>
    <v-navigation-drawer clipped app v-model="drawer" >
      <!-- Navigation contents on left side -->
      <v-container dense>
        <v-list-item v-for="item in config.nav_items" :key="item.name" :to='item.route'>
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
        title: "SuperCool Tool",
        app_items:[
          { name: "Pivot", icon: "", route: "/pivot" },
          { name: "Plot", icon: "", route: "/plot" },
          { name: "About", icon: "", route: "/about" },
          { name: "Layout", icon: "", route: "/layout" },
        ],
        nav_items: [
          { name: "Pivot", icon: "", route: "/pivot" },
          { name: "Plot", icon: "", route: "/plot" },
        ],
      },
    };
  },
};
</script>
