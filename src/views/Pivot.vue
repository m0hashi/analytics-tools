<template>
  <div>
    <PivotNav></PivotNav>
  </div>
</template>

<script>
import aggdata from "@/assets/sampledata.js"
import PivotNav from "@/components/Pivot/PivotNav"
// import Navbar from "@/components/Pivot/Navbar"

export default {
  name: "Pivot",
  components:{PivotNav},

  data() {
    return {
      aggdata
    }
  }
  
}
</script>