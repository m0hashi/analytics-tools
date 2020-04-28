<template>
  <!-- TODO -->
  <!-- styling指定の方法が汚いので跡で直す -->
  <div>
    <v-card class="grey lighten-3">
      <v-subheader class="grey darken-2 white--text ">TABSETTING</v-subheader>
      <v-card>
        <div class="d-flex flex-column ">
          <!-- rows -->
          <v-card class="pa-2 mx-0 grey lighten-1" outlined>ROWS</v-card>


          <!-- TODO ストアのstateをv-bindで直接更新しにいっているのでダメ。やりなおし -->
          <!-- カードをADDカード上にドロップしたときの挙動が直感に反する
          現状、ADDとROWの間に置かないと反応しない-->
          <draggable :list="dimRows" group="dimension">
          <v-card
            v-for="item in dimRows"
            :key="item.name"
            class="pa-2 mx-2"
            outlined
          >
            {{ item.name }}
          </v-card>
          </draggable>
          <v-card class="pa-2 mx-2 mb-2" outlined>
            <v-icon>mdi-plus</v-icon>ADD<br/> (Drop dimension here)
          </v-card>

          <!-- TODO ストアのstateをv-bindで(ry -->
          <!-- cols -->
          <v-card class="pa-2 mx-0 grey lighten-1" outlined>COLUMNS</v-card>

          <draggable :list="dimCols" group="dimension">
          <v-card
            v-for="item in dimCols"
            :key="item.name"
            class="pa-2 mx-2"
            outlined
          >
            {{ item.name }}
          </v-card>
          </draggable>
          <v-card class="pa-2 mx-2 mb-2" outlined>
            <v-icon>mdi-plus</v-icon>ADD<br/> (Drop dimension here)
          </v-card>


          <!-- TODO ストアの(ry -->
          <!-- metrics -->
          <v-card class="pa-2 mx-0 grey lighten-1" outlined>VALUES</v-card>

          <draggable :list="usedMetrics" group="metrics">
          <v-card
            v-for="item in usedMetrics"
            :key="item.name"
            class="pa-2 mx-2"
            outlined
          >
            {{ item.name }}
          </v-card>
          </draggable>
          <v-card class="pa-2 mx-2 mb-2" outlined>
            <v-icon>mdi-plus</v-icon>ADD <br> (Drop metrics here)
          </v-card>
        </div>
      </v-card>
    </v-card>
  </div>

</template>

<script>
import {mapState} from 'vuex'
import draggable from "vuedraggable";
export default {
  name: 'NavRightCol',
  components:{draggable},
  data(){
    return{
      // dimRows:[
      //   {name: "dim1"},
      //   {name: "dim2"},
      // ],
      // dimCols:[
      //   {name: "dim1"},
      //   {name: "dim2"},
      // ],
      // metrics:[
      //   {name: "mt1"},
      //   {name: "mt2"},
      // ],
    }
  },
  computed:{
    ...mapState(['dimRows', 'dimCols', 'usedMetrics'])
  },
}
</script>
<style scoped lang="scss">
.card-item-style{
  min-height:50px;
}
</style>