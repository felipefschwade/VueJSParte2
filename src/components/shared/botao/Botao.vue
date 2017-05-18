<template>
    <button @click="BotaoAtivado()" class="botao" :class="tipoBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>
    export default {
        props : { 
            tipo : {
                required : true,
                type : String
            }, 
            rotulo : {
                required : true,
                type : String
            }, 
            confirmacao : {
                type : Boolean
            }, 
            estilo : {
                type : String
            }
        },

        methods : {
            BotaoAtivado() {
                if(this.confirmacao) {
                    if(confirm("Confirma remoção?")) {
                        this.$emit("botaoAtivado", new Date());
                    }
                    return;
                }
                this.$emit("botaoAtivado", new Date());
            }
        },

        computed : {
            tipoBotao() {
                if (this.estilo
                 == 'padrao' || !this.estilo) return "botao-padrao";
                else if (this.estilo == 'perigo') return "botao-perigo";
            }
        }

    }
</script>

<style scoped> 
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
    .botao:hover {
        cursor: pointer;
        text-decoration: underline;
    }
</style>