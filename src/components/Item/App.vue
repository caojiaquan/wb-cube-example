<template>
  <div class="item">
    <wb-cube-example 
      :data="data.properties"
      ref="elem"
      @click.native.stop="handleClick()"></wb-cube-example>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    data: Object
  },
  data() {
    return {
    }
  },
  mounted() {
    setTimeout(() => {
      window.componentsData[this.$refs.elem._uid] = this.data;
    });
  },
  methods: {
    handleClick() {
      console.log(window.componentsData[this.$refs.elem._uid]);
    }
  }
};
</script>
      