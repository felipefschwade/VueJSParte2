import Home from './components/home/Home.vue'
import Cadastro from './components/cadastro/Cadastro.vue'

export const routes = [
    { path: '', name: 'home', component: Home, text: "Home", menu : true },
    { path: '/cadastro', name : 'cadastro', component: Cadastro, text: "Cadastro de Foto", menu : true},
    { path: '*', component: Home, menu : false}
];