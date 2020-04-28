<template>
  <div>
    <v-app-bar app class="grey lighten-4" clipped-left>
      <AppList></AppList>
    </v-app-bar>
  </div>
</template>

<script>
import AppList from '@/components/Header/AppList'
export default {
  name: "Navbar",
  props: ["nav_config"],
  components:{AppList},
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
