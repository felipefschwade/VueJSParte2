<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 v-if="foto._id" class="centralizado">Alterando</h2>
    <h2 v-else class="centralizado">Inserindo</h2>
    <h2 class="centralizado">{{ foto.titulo }}</h2>
    <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model.lazy="foto.titulo">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="foto.url">
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" v-model="foto.descricao"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link :to="{ name : 'home'}"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';
import Foto from '../../domain/Foto/Foto.js'
import FotoService from '../../domain/Foto/FotoService.js'

export default {

  components: {

    'imagem-responsiva': ImagemResponsiva, 
    'meu-botao': Botao
  },

  data() {
      return {
          foto : new Foto(),
          id : this.$route.params.id
      }
  },

  created() {
        this.service = new FotoService(this.$resource);
        if (this.id) {
          this.service.buscaPorId(this.id)
          .then(foto => this.foto = foto);
        }
      },

  methods : {
      grava() {
        this.service
        .cadastra(this.foto)
        .then(() => {
          this.$router.push({name : 'home'});
          this.foto = new Foto();
        } , err => console.log(err));
      }
  }

}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>