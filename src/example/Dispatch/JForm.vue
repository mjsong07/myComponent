<template>
  <div class=""> 
     <h2>当前是Form => {{currentvalue}}</h2>
    <input :value="currentvalue" @input="onInput" />
    <button @click="callFather">提交</button>
     </div>
</template>

<script>
export default {
  name: 'JForm',
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
      currentvalue: this.value,
    }
  },
  methods:{
    onInput(e){
      this.currentvalue = e.target.value;
      this.$emit("input",this.currentvalue);
    },
    callFather(){ 
      this.$dispatch("dispatch","xxxx");
      // this.$emit("dispatch","xxxx");
    }
  }
}
</script>
  