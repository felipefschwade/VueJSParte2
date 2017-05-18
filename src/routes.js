import Home from './components/home/Home.vue'
import Cadastro from './components/cadastro/Cadastro.vue'

export const routes = [
    { path: '', component: Home, text: "Home" },
    { path: '/cadastro', component: Cadastro, text: "Cadastro de Foto" }
];