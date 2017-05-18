
<template>

        <div class="painel">
            <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
            <transition  name="painel-fade">
              <div class="painel-conteudo" v-show="visivel">
               <slot name="imagem"></slot>
               <slot name="botao"></slot>
              </div>
            </transition >
        </div>

</template>

<script>
export default {
    props : ['titulo'],
    
    data() {
      return {
        visivel : true
      }
    }
}
</script>

<style scoped>
   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
  
  * {
    box-shadow : 5px 5px 5px;
  }

  .painel-fade-enter-active {
    transition: all .6s ease;
  }
  .painel-fade-leave-active {
    transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .painel-fade-enter, .painel-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateY(-20px);
    opacity: 0;
  }
  .painel-conteudo {
    overflow : hidden;
  }

</style>
