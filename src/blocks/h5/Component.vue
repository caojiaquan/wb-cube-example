<template>
  <div class="test">{{ data.title.value }}</div>
</template>

<script>
export default {
  name: "wb-cube-example",
  props: ["data"],
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .test{
    background: #f00;
  }
</style>