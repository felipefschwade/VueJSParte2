<template>

  <div class="corpo">
    <meu-painel :rotas="routes"></meu-painel>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>

</template>

<script>
  import { routes } from './routes';
  import Navegacao from './components/shared/navegacao/Navegacao.vue'
  export default {
    components: { 'meu-painel' : Navegacao },
      data() {
        return {
          routes : routes.filter(rota => rota.menu)
        }
      }
  }
</script>
<style scoped>
  .corpo {
    font-family: Helvetica, Sans-serif;
    margin: 0, auto;
    width: 96%;
  }
  pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }
</style>