<template>
  <div id="app" class="div"> 
     <h1>当前是App =>{{msg}}</h1>
     <button @click="btnClick">广播给子控件</button> 
    <JSub  />
  </div>
</template>

<script>
import JForm from './JForm.vue'
import JSub from './JSub.vue'

export default {
  name: 'Dispatch',
  components: { 
    JForm,
    JSub
  },
  data(){
    return {
      msg:"",
    }
  },
  mounted () {  
    this.$on("dispatch", msg => {
       console.log("App调用dispatch" + msg);
       this.msg = msg; 
    })
  },
  methods: { 
    btnClick(){
      this.$boardcast("dispatch", "我是父亲");
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
