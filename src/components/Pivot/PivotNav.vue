<template>
  <div>

    <!-- D&D機能 vue-easy-dnd -->
    <!-- https://github.com/rlemaigre/Easy-DnD -->
    <!-- https://www.quirksmode.org/blog/archives/2009/09/the_html5_drag.html -->



    <!-- TODO -->
    <!-- ボタンの表示位置が変わるのがイケてない。あとでappbarに表示されるように修正する。 -->
    <v-btn @click="drawer =! drawer"><v-icon>mdi-apps</v-icon> </v-btn> 

    <!-- TODO -->
    <!-- 左右のカードが独立していないのがイケてない。独立にスクロースしたいが、cssをいじる必要ありか。 -->
    <v-navigation-drawer width="500px" dense clipped app v-model="drawer" >

      <!-- styling指定の方法が汚いので後で直す -->
      <!-- Navigation contents on left side -->
          <v-container pa-0>
            <v-row class='pa-0'>
            <v-col class='pr-0 '>
              <NavLeftCol></NavLeftCol>
            </v-col>
      <!-- Navigation contents on left side -->
            <v-col class='pl-0'>
              <NavRightCol></NavRightCol>
            </v-col>
            </v-row>
          </v-container>
    </v-navigation-drawer>

      <!--  -->
      <Table></Table>
  </div>
</template>

<script>
import NavRightCol from './NavRightCol'
import NavLeftCol from './NavLeftCol'
import Table from './Table'


export default {
  name: 'PivotNav',
  components:{
    NavRightCol,
    NavLeftCol, 
    Table
    },
  data(){
    return{
      drawer: true
    }
  }
}
</script>