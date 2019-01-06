<template>
  <section>
    <div class="header"></div>
    <div class="content">
      <nuxt />
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
  
  .header {
    width: 100%;
    height: 20px;
    background: $barColor;
  }
  .content {
    width: 100%;
    height: calc(100% - 20px);
  }
}
</style>
