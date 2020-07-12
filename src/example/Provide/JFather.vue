<template>
    <div class="div1" > 
    <h3>当前是父级 => {{msg}}</h3> 
    <JSon></JSon>
    <JSon></JSon>
    <button @click="btnClick">msg获取父级设置</button>
    </div>
</template>

<script>
import JSon from './JSon'
export default {
  name: 'JFather',
   inject: [ "getContext"],
  data () {
    return {
      msg: 'test'
    }
  },
  components: {
    JSon
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
  methods:{ 
    btnClick(){
       this.context = this.getContext(); 
       this.msg = this.context.message;
    }
  },
  mounted () { 
  }
}
</script>
<style scoped>
 .div1 { border: 3px solid fuchsia !important; width: 50%;}
</style>
  