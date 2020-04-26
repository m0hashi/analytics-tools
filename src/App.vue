<template>
  <v-app>
    <Navbar ></Navbar>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/App/Navbar'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
