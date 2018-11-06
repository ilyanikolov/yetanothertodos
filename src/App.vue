<template>
  <div id="root">
    <div v-if="loading" class="loading-view">
      <div class="dash uno"></div>
      <div class="dash dos"></div>
      <div class="dash tres"></div>
      <div class="dash cuatro"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'root',
  data() {
    return {
      loading: false,
    };
  },
}
</script>

<style lang="scss">
#root {
  position: relative;
  height: 100%;
}
.loading-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #f8f8fa;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
}
.dash {
  margin: 0 6px;
  width: 15px;
  height: 10px;
  border-radius: 8px;
  background: #3c6dec;
  box-shadow: 0 3px 5px -3px rgba(#000, .15);
}

.uno {
  margin-right: -7px;
  transform-origin: center left;
  animation: spin 3s linear infinite;  
}

.dos {
  transform-origin: center right;
  animation: spin2 3s linear infinite;
  animation-delay: .2s;
}

.tres {
  transform-origin: center right;
  animation: spin3 3s linear infinite;
  animation-delay: .3s;
}

.cuatro {
  transform-origin: center right;
  animation: spin4 3s linear infinite;
  animation-delay: .4s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(360deg);
  }
  30% {
    transform: rotate(370deg);
  }
  35% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin2 {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(-180deg);
  }
  35% {
    transform: rotate(-190deg);
  }
  40% {
    transform: rotate(-180deg);
  }
  78% {
    transform: rotate(-180deg);
  }
  95% {
    transform: rotate(-360deg);
  }
  98% {
    transform: rotate(-370deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes spin3 {
  0% {
    transform: rotate(0deg);
  }
  27% {
    transform: rotate(0deg);  
  }
  40% {
    transform: rotate(180deg);
  }
  45% {
    transform: rotate(190deg);
  }
  50% {
    transform: rotate(180deg);
  }
  62% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(360deg);
  }
  80% {
    transform: rotate(370deg);
  }
  85% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin4 {
  0% {
    transform: rotate(0deg);
  }
  38% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(-360deg);
  }
  65% {
    transform: rotate(-370deg);
  }
  75% {
    transform: rotate(-360deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
