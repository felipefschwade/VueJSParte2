
<template>

  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" v-on:input="filtro=$event.target.value" class="input-busca" />
    <ul class="lista-fotos">
      <li v-for="foto of fotosComFiltro" class="lista-fotos-item">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva slot="imagem" :url="foto.url" :titulo="foto.titulo"/>
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

export default {

components: {
  'meu-painel' : Painel,
  'imagem-responsiva' : ImagemResponsiva,
  'meu-botao' : Botao
},

 data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: ""
    }
 },

 created() {
   this.$http.get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
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
      alert($event + " Remover foto: " + foto.titulo);
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
