<template>
    <div class="div1" > 
    <h3>当前是SubChlid => {{msg}}</h3> 
    <button @click="callFather">发送父组件</button>
    </div>
</template>

<script>
export default {
  name: 'JSubChlid',
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
    
    callFather(){  
      this.$dispatch("dispatch","我是孙子");
    }
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
 .div1 { border: 3px solid green !important; width: 50%;}
</style>
  