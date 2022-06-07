import vue from "vue"
import VueRouter from "vue-router"

import Binding from './componentes/Binding.vue'
import Estructura from './componentes/Estructura.vue'
import Atributos from './componentes/Atributos.vue'
import Contadores from './componentes/Contadores.vue'
import FormularioAv from './componentes/FormularioAv.vue'
import Formulario from './componentes/Formulario/IndexFormulario.vue'
import HttpClient from './componentes/HttpClient.vue'
import ApiRestFul from './componentes/ApiRestFul.vue'
import Padre from './componentes/Padre.vue'
import ContadorVuex from './componentes/ContadorVuex.vue'

vue.use(VueRouter)

export const router = new VueRouter({
    node: "history",
    routes: [
        {path: "/", redirect: "/binding"},
        {path: "/binding", component: Binding},
        {path: "/estructura", component: Estructura},
        {path: "/atributos", component: Atributos},
        {path: "/contadores", component: Contadores},
        {path: "/formularioAv", component: FormularioAv},
        {path: "/formulario", component: Formulario},
        {path: "/http-client", component: HttpClient},
        {path: "/apirestful", component: ApiRestFul},
        {path: "/padre", component: Padre},
        {path: "/contadorVuex", component: ContadorVuex},
        {path: "*", redirect: "/"}, //cuando no existe la ruta
]
})