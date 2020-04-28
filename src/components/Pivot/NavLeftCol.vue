<template>
  <!-- TODO -->
  <!-- styling指定の方法が汚いので跡で直す -->
  <div>
    <v-card class="grey lighten-3">
      <v-subheader class="grey darken-2 white--text ">VARIABLES</v-subheader>
      <v-card>
        <div class="d-flex flex-column ">
          <!-- dataload -->
          <v-card class="pa-2 mx-0 grey lighten-1" outlined>Data</v-card>

          <v-card class="pa-2 mx-2">{{filepath}}</v-card>
          <v-btn @click='loadData' class="pa-2 mx-2 mb-2" outlined>
            <v-icon>mdi-file</v-icon> Load Data
          </v-btn>
          <!-- dimension -->
          <v-card class="pa-2 mx-0 grey lighten-1" outlined>DIMENSION</v-card>

          <draggable :list="dimension" group="dimension">
            <v-card
              v-for="item in dimension"
              :key="item.name"
              class="pa-2 mx-2"
              outlined
            >
              {{ item.name }}
            </v-card>
          </draggable>
          <v-btn @click='addDimension' class="pa-2 mx-2 mb-2" outlined>
            <v-icon>mdi-plus</v-icon>ADD
          </v-btn>

          <!-- metrics -->
          <v-card class="pa-2 mx-0 grey lighten-1" outlined>METRICS</v-card>

          <draggable :list="metrics" group="metrics">
          <v-card
            v-for="item in metrics"
            :key="item.name"
            class="pa-2 mx-2"
            outlined
          >
            {{ item.name }}
          </v-card>
          </draggable>
          <v-btn @click='addMetrics' class="pa-2 mx-2 mb-2" outlined>
            <v-icon>mdi-plus</v-icon>ADD
          </v-btn>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import draggable from "vuedraggable";

export default {
  name: "NavLeftCol",
  components:{
    draggable
  },
  data() {
    return {
      // dimension: [{ name: "dim1" }, { name: "dim2" }],
      // metrics: [{ name: "mt1" }, { name: "mt2" }],

      //ToDo ローカルファイルを指定してのパスを関数で読み取る実装
      filepath: null,
    };
  },
  computed:{
    ...mapState(['dimension','metrics'])
  },
  methods:{
    addDimension(){
      // this.dimension = [{ name: "dim" }, { name: "dim2" }]
      //TODO 読み込んだデータからカラムを抽出する機能の追加
      this.$store.commit('addDimension')
    },
    addMetrics(){
      // this.dimension = [{ name: "dim" }, { name: "dim2" }]
      //TODO 規定のメトリクスから必要なものを指定する機能の追加
      this.$store.commit('addMetrics')
    },
    loadData(filepath){
      this.filepath = './Airline_Data.csv'
      // Table.vueで利用するデータの読み込み処理
      this.$store.commit('loadData',filepath)
    }
  }
};
</script>
<style scoped lang="scss">
.card-item-style {
  min-height: 50px;
}
</style>
