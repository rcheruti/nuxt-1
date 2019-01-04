<template>
  <div class="container">
    <div class="placeholder" v-bind:class="{ fechado: placeholderFechado }">Holder: {{ placeholder }}</div>
    <input type="text" v-bind:value="value"
      v-on:input="$emit('input', $event.target.value);" v-on:focus="inputFocus = true" v-on:blur="inputFocus = false"/>
  </div>
</template>

<script>
export default {
  props: {
    value: { default: '[no-value-yet]' },
    placeholder: { default: 'Default Placeholder' }
  },
  data() {
    return {
      inputFocus: false
    };
  },
  computed: {
    placeholderFechado: function() {
      return !!this.value || this.inputFocus ;
    }
  },
  head: {
    title: 'nuxt-1 | Person Form'
  }
}
</script>

<style lang="scss">
.container {
  position: relative;
  min-height: 40px;
  margin-top: 20px;
  
  .placeholder, input {
    position: absolute;
    left: 0;
    top: 0;
    padding: 4px 6px;
    width: 100%;
    height: 100%;
    background: transparent;
    font-size: 1.4em;
    color: #ccc;
  }
  input {
    border: none;
    border-bottom: 2px solid #ccc;
  }
  
  .placeholder {
    transition: transform .25s ease-out, font-size .25s ease-out, color .25s linear ;
  }
  .placeholder.fechado {
    transform: translateY(-50%);
    color: #fff;
    font-size: .8em;
  }
}
</style>
