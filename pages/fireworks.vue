<template>
  <div id="fireworks-form" v-hammer:tap="fireworks">
  
    <div class="light"></div>
    <div class="help">Click on the black Space!</div>
    <svg class="quadro"></svg>
    
    
    <form>
      <h2>Fireworks!</h2>
      <hr />
      <my-input v-model="valor"/>
    </form>
    
    <svg template="baloes">
      <g class="baloes">
        <circle class="circulo c1" stroke="#444" stroke-width="2" r="5" fill="none"/>
        <circle class="circulo c2" stroke="#555" stroke-width="2" r="2" fill="none"/>
      </g>
    </svg>
    <svg template="bola">
      <circle class="bola" r="1" stroke="none" stroke-width="0"/>
    </svg>
    
  </div>
</template>

<script>
import MyInput from '~/components/MyInput.vue';
import * as anime from 'animejs';
export default {
  data() {
    return {
      valor: 'oi',
      colors: ['rgb(255, 74, 74)','rgb(105, 204, 110)','rgb(29, 153, 255)', 'rgb(214, 228, 29)', 'rgb(247, 117, 240)']
    };
  },
  components: {
    MyInput
  },
  mounted: function(){
    this.formulario =   this.$el.querySelector('form');
    this.quadro =       this.$el.querySelector('.quadro');
    this.moldeBaloes =  this.$el.querySelector('[template="baloes"]').children[0];
    this.moldeBola =    this.$el.querySelector('[template="bola"]').children[0];
    
  },
  methods: {
    fireworks(ev) {
      if( ev.target == this.formulario || this.formulario.contains(ev.target) ) return;
      console.log('fireworks', ev, this);
      
      let cloneBaloes = this.moldeBaloes.cloneNode(true);
      let circuloC1 = cloneBaloes.querySelector('.circulo.c1');
      let circuloC2 = cloneBaloes.querySelector('.circulo.c2');
      cloneBaloes.style.transform = `translate( ${ev.center.x}px, ${ev.center.y}px )`;
      
      this.quadro.appendChild( cloneBaloes );
      let timeline = anime.timeline();
      timeline.add({ targets: circuloC1, duration: 1400, offset: 0, easing: 'easeOutCubic', r: '155' });
      timeline.add({ targets: circuloC1, duration:  400, offset: '-=1200', easing: 'easeOutCubic', opacity: 0 });
      timeline.add({ targets: circuloC2, duration: 1400, offset: 0, easing: 'easeOutBack', r: '65' });
      timeline.add({ targets: circuloC2, duration:  600, offset: '-=1000', easing: 'easeOutCubic', opacity: 0 });
      
      for( let i = 0; i < Math.random() * 16 + 6; i++ ){
        let temp = this.moldeBola.cloneNode(true);
        let dist = 40;
        let x = Math.random() * dist - (dist/2) ;
        let y = Math.random() * dist - (dist/2) ;
        let tam = Math.sqrt( x*x + y*y );
        let d_x = x * (200 / tam) - x;
        let d_y = y * (200 / tam) - y;
        temp.style.transform = `translate( ${x}px, ${y}px )`;
        temp.setAttribute('fill', this.colors[ parseInt( Math.random() * this.colors.length ) ] );
        cloneBaloes.appendChild( temp );
        timeline.add({ targets: temp, duration: 1400, offset: 0, easing: 'easeOutCubic', r: [{ value: '1' }, { value: '25' }, { value: '0' }], translateX: d_x, translateY: d_y });
        timeline.add({ targets: temp, duration: 400, offset: '-=600', easing: 'easeOutCubic', opacity: 0 });
      }
      
      setTimeout(()=>{
        this.quadro.removeChild( cloneBaloes );
      }, 1400 );
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
  }
  hr {
    border: 1px solid #222;
  }
  
  .baloes {
    .circulo {
      opacity: 0.7;
    }
    .bola {
      border-radius: 50%;
    }
  }
  
}
</style>
