<template>
  <div>
    まだ動的には動かない
    <!-- https://bootstrap-vue.org/docs/components/table/ -->
    <!-- App.vueの <v-content>タグの中で描画されてしまっているので、
      sticky-header='100vh' を使いたくても使うと下側がはみだしてしまう。 
      こうした細かい挙動を直したいなら、vuetifyは使わないほうがいいかも
      サイドメニューの実装は面倒になるけれど-->
    <b-table
      sticky-header="500px"
      head-variant="light"
      height="500px"
      :items="pivotData"
    >
    </b-table>
  </div>
</template>

<script>
// import mock from './mock'
import {mapState} from "vuex";
export default {
  data() {
    return {
      // mock:{...mock.data}
    };
  },
  // computed:{ ...mapState(['pivotData']) },
  computed:{
    // pivotData(){ return null},
    ...mapState(['pivotData'])
  }
};
</script>
