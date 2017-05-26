import Home from './components/home/Home.vue'
//import Cadastro from './components/cadastro/Cadastro.vue'
const Cadastro = () => System.Import('./components/cadastro/Cadastro.vue');

export const routes = [
    { path: '', name: 'home', component: Home, text: "Home", menu : true },
    { path: '/cadastro', name : 'cadastro', component: Cadastro, text: "Cadastro de Foto", menu : true},
    { path: '/cadastro/:id', name : 'alterar', component: Cadastro, text: "Cadastro de Foto", menu : false},
    { path: '*', component: Home, menu : false}
];