<template>
  <div id="app" class="div"> 
    <JFather></JFather>
    <button @click="btnClick">测试</button>
  </div>
</template>

<script> 
import JFather from './JFather'
export default {
  name: 'Provide',
  components: {  
    JFather
  }, 
   provide () {
    return {
      getContext:() => ({
         message: this.msg, 
      })
    } 
  },
  
  data(){
    return {
      msg:"msg顶级初始化", 
    }
  },
  mounted () {  
    
  },
  methods: { 
    btnClick(){
       this.msg = "msg顶级点击"
    }
  }
}
</script>

<style>
.div { 
  text-align: center; 
  border: 4px solid red;
}
</style>
