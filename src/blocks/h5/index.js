import Component from './Component.vue'
if (window.Vue) {
  Vue.component(require('../../../package.json').name, Component)
}
export default Component
