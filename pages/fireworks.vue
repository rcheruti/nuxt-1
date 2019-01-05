<template>
  <div id="fireworks-form" >
    <div class="light"></div>
    <div class="help">Click on the black Space!</div>
    
    <fireworks-panel ref="fw"/>
    
    <form @click="firework">
      <h2>Fireworks! <span>Click in this form for a random Firework!</span></h2>
      <hr />
      <my-input v-model="valor"/>
    </form>
  </div>
</template>

<script>
import MyInput from '~/components/MyInput.vue';
import FireworksPanel from '~/components/FireworksPanel.vue';
import * as anime from 'animejs';
export default {
  data() {
    return {
      valor: 'oi'
    };
  },
  components: {
    MyInput, FireworksPanel
  },
  mounted() {
    let _fire = () => {
      this.$refs.fw.randomFireworks();
      let nextTime = ( 3000 * Math.random() ) + 1000 ;
      setTimeout(_fire, nextTime);
    }
    setTimeout(_fire, 2000);
  },
  methods: {
    firework() {
      this.$refs.fw.randomFireworks();
    }
  }
}
</script>

<style lang="scss">
#fireworks-form {
  
  position: relative;
  width: 100%;
  height: 100%;
  background: #222;
  
  .help {
    position: absolute;
    left: 50%;
    top: 200px;
    color: #333;
    transform: translate(-50%, 0);
    font-family: 'Courier New', Courier, monospace;
    font-size: 30px;
    font-weight: bold;
  }
  
  .quadro {
    position: absolute;
    left: 0; top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .light {
    position: absolute;
    top: 0;
    left: 50%;
    height: 100px;
    width: 100px;
    transform: translate(-50%, -100%);
    box-shadow: 0 50px 80px 50px #fff;
    border-radius: 50%;
    background: #fff;
    opacity: 0.1;
  }
  
  form {
    display: block;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    min-height: 100px;
    min-width: 100px;
    max-width: 600px;
    background: #333;
    border: 1px solid #222;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0,0,0, 0.3);
  }
  
  h2 {
    color: #777;
    
    span {
      font-weight: normal;
      font-size: 14px;
      float: right;
    }
  }
  hr {
    border: 1px solid #222;
  }
  
}
</style>
