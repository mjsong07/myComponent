import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


Vue.prototype.$dispatch = function(eventName,data) { 
  this.$emit(eventName,data);
  let parent = this.$parent; 
  while (parent) {
    parent.$emit(eventName,data);
     parent = parent.$parent;
  }
}

Vue.prototype.$boardcast = function(eventName,data) {
  boardcast.call(this,eventName,data);
}
function boardcast(eventName,data) {  
  this.$emit(eventName,data);
  this.$children.forEach(children => {
    children.$emit(eventName,data);
    if(children.$children.length > 0){
      boardcast.call(children,eventName,data);
    } 
  });
} 

new Vue({
  render: h => h(App),
}).$mount('#app')
