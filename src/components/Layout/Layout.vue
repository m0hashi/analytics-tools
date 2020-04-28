<template>
  <div>
    <v-container ma-0>
    <v-row>
      <v-col cols="2">
        <router-view ></router-view>
      </v-col>
      <v-col>
      <router-view name="sub"></router-view>
      </v-col>
    </v-row>

    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>