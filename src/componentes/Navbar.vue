<template>

  <section class="src-componentes-navbar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <router-link to="/">
<!--          <a class="navbar-brand" href="#">Inicio - {{$store.state.contador}}</a>      
 -->       <a class="navbar-brand" href="#">Inicio - {{mostrarContadorVuex}}</a>
         </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
            

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="btn btn-success ml-2" @click="decrementar()">-</button>
            <button class="btn btn-success ml-2" @click="incrementar()">+</button>
          </li>


          <li class="nav-item">
            <router-link to="/binding">
            <a class="nav-link" href="#">Binding</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/estructura">
            <a class="nav-link" href="#">Estructura</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/atributos">
            <a class="nav-link" href="#">Atributos</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contadores">
            <a class="nav-link" href="#">Contadores</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/formularioAv">
            <a class="nav-link" href="#">FormularioAv</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/formulario">
            <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>
           <li class="nav-item">
            <router-link to="/http-client">
            <a class="nav-link" href="#">HttpClient</a>
            </router-link>
           </li>
            <li class="nav-item">
            <router-link to="/apirestful">
            <a class="nav-link" href="#">ApiRestFul</a>
            </router-link>
           </li>
           <li class="nav-item">
            <router-link to="/padre">
            <a class="nav-link" href="#">Padre</a>
            </router-link>
           </li>
             <li class="nav-item">
            <router-link to="/contadorVuex">
            <a class="nav-link" href="#">contadorVuex</a>
            </router-link>
           </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
 /*  .src-componentes-navbar {

  } */
</style>
