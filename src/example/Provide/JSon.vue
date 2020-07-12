<template>
    <div class="div2" > 
    <h3>当前是Son => {{context.message}}</h3> 
    <button @click="btnClick">获取父级数据</button>
    </div>
</template>

<script>
export default {
  name: 'JSon',
  inject: [ "getContext"],
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
      msg: '',
      context : {}
    }
  },
  methods:{
    btnClick(){
      // let a = this.obj;
      this.context = this.getContext(); 
        this.msg = this.context.message; 
      // this.message = "new1111";
    }
  },
  mounted () {
    // this.context.message = "222";
  }
}
</script>
<style scoped>
 .div2 { border: 3px solid green !important; width: 50%;}
</style>
  