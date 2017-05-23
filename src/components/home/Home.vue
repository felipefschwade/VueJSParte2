
<template>

  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input type="search" v-on:input="filtro=$event.target.value" class="input-busca" />
    <ul class="lista-fotos">
      <li v-for="foto of fotosComFiltro" class="lista-fotos-item">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:scale.animate="1.1" slot="imagem" :url="foto.url" :titulo="foto.titulo"/>
          <meu-botao 
            slot="botao" 
            tipo="button" 
            @botaoAtivado="remover($event, foto)" 
            rotulo="Remover"
            :confirmacao="true"
            estilo="perigo"/>
        </meu-painel>
      </li>
    </ul>
  </div>

</template>

<script>
import Painel from '../shared/painel-component/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
import Transform from '../../directives/Transform';
import FotoService from '../../domain/Foto/FotoService.js'

export default {

components: {
  'meu-painel' : Painel,
  'imagem-responsiva' : ImagemResponsiva,
  'meu-botao' : Botao
},

directives: {
  'meu-transform' : Transform
},

 data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: "",
      mensagem: ""
    }
 },

 created() {
    this.service = new FotoService(this.$resource);
    this.service
      .lista()
      .then(fotos => this.fotos = fotos, err => console.log(err));
 },

 computed : {
   fotosComFiltro() {
     if (this.filtro)
     {
       return this.fotos.filter(foto => foto.titulo.toLowerCase().includes(this.filtro.toLowerCase()));
     } else {
       return this.fotos;
     }
   }
 },

 methods : {
   remover($event, foto) {
      this.service.apaga(foto._id)
      .then(() => { 
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = "Foto removida com sucesso!";
        }, err => {
        console.log(err);
        this.mensagem = "Não foi possível remover a foto"
      });
      
   }
 }

}
</script>

<style scoped>
  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .input-busca {
    width: 100%;
    border-radius: 5px;
    font-size: 12;
    height: 2.5em;
  }

</style>
