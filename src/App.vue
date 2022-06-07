<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a VueJS CLI </h1>
      <hr>
      <Navbar/>
      <router-view></router-view>
      <!-- <Binding/>
      <Estructura/>
      <Atributos/>
      <Contadores/>
      <FormularioAv/>
      <Formulario/>
    -->


   <!--    <div class="row">
        <div class="col-4"><Binding/></div>
        <div class="col-4"><Estructura/></div>
        <div class="col-4"><Atributos/></div>
      </div> -->
      
    </div>
  </div>
</template>

<script>
/* import Binding from './componentes/Binding.vue'
import Estructura from './componentes/Estructura.vue'
import Atributos from './componentes/Atributos.vue'
import Contadores from './componentes/Contadores.vue'
import FormularioAv from './componentes/FormularioAv.vue'
import Formulario from './componentes/Formulario/IndexFormulario.vue' */
import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
     /* Binding,
    Estructura,
    Atributos,
    Contadores,
    FormularioAv,
    Formulario, */
    Navbar
   }
}
</script>

<style>
h1{
  color:blue
}



</style>
