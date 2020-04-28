import Vue from 'vue'
import Vuex from 'vuex'
import mock from './mock'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  mock: mock,
  state: {
    pivotData:[],
    dimension:[],
    metrics:[],
    dimRows:[],
    dimCols:[],
    usedMetrics:[]
  },
  mutations: {
    addDimension(state){
      state.dimension.splice(0,0,{name:'Dimension'})
    },
    addMetrics(state){
      state.metrics.splice(0,0,{name:'Metrics'})
    },
    loadData(state, filepath){
      // Todo
      // filepath からファイル読み込み処理を実装
      filepath
      state.pivotData = mock.data.data
      console.log('At @/store/index.js loadData is called')
      console.log(state.pivotData)
    }
  },
  actions: {
  },
  modules: {
  }
})
