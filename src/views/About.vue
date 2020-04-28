<template>

  <div class="dashboard">
    <v-container ml-1 rows="1">
      <v-row>
        <v-col class="flex-grow-0 flex-shrink-0" >
            <v-card class="card1 ">
              <v-list>
                <v-subheader>METRICS</v-subheader>
                <v-list-item>
                  <v-list-item-content>A</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>A</v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>


                <v-subheader>ROWS</v-subheader>
                <v-list-item>
                  <v-list-item-content>A</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>A</v-list-item-content>
                </v-list-item>

                <v-subheader>COLUMNS</v-subheader>
                <v-list-item>
                  <v-list-item-content>A</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>A</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
        </v-col>

        <v-col  class="flex-shrink-0 " >
          <v-container pa-0>
            <v-toolbar dense>
              <v-toolbar-title>Title</v-toolbar-title>
            </v-toolbar>
          </v-container>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<style scoped lang="scss">
.card1{
  min-height: 100%;
  min-width: 200px;
  flex-direction: columns ;
}
</style>