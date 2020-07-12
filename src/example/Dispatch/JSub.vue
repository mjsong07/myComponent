<template>
  <div class="div"> 
     <h2>当前是Sub => {{msg}}</h2>
    <JSubChlid></JSubChlid>
     </div>
</template>

<script>
import JSubChlid from './JSubChlid'
export default {
  name: 'JSub',
  components: {
    JSubChlid
  },
  props:{
    type:{
      type:String,
      default: ''
    },
    value:{
      type:String,
      default:''
    }
  },
  data () {
    return {
      msg: ''
    }
  },
  methods:{ 
  },
  mounted () {
    this.$on("dispatch", msg =>{
      this.msg = msg;
      console.log("JSub调用dispatch" + msg);
    })
  }
}
</script>
  
<style scoped>
 .div{ border: 3px solid  blue; width: 70%;}
</style>
  