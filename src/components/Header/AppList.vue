<template>
<div>

  <v-toolbar-items>
    <v-btn text 
     v-for="item in app_items" 
     :key="item.name"
     :to="item.route">
      {{item.name}}
      </v-btn>
  </v-toolbar-items>

</div>
</template>

<script>
export default {
  name: 'AppList',
  data() {
    return {
    app_items:[
      { name: "Home", icon: "", route: "/home" },
      { name: "Pivot", icon: "", route: "/pivot" },
      { name: "Plot", icon: "", route: "/plot" },
    ],
    }
  }
  
}
</script>