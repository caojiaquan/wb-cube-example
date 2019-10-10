import Component from './Component.vue'
if (window.Vue) {
  window.Vue.component(require('../schema.json').type, Component)
}
export default Component
