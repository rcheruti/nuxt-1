<template>
  <section>
    <h1 @click="log">Products</h1>
    
    <div class="item"
      v-for="item in products" 
      v-bind:key="item.name">
      <img v-bind:src="item.img" />
      <h2>{{ item.name }}</h2>
    </div>
    
  </section>
</template>

<script>
export default {
  layout: 'sales',
  data(that) {
    return {
      products:   process.env.products ,
      that:       process.env.name
    };
  },
  
  methods: {
    log() {
      console.log(this.that);
    }
  }
}
</script>

<style lang="scss" scoped >
section {
  width: 100%;
  height: 100%;
  text-align: center;
  
  h1 {
    text-align: center;
  }
  
  .item {
    padding: 20px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    display: inline-block;
    
    img {
      max-width: 100px;
    }
  }
}
</style>
