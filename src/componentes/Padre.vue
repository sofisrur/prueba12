<template>

  <section class="src-componentes-padre">
   <div class="jumbotron">
      <h2>Componente {{"Padre" | pasarAMayuscula | reverse | reverse | wrap("**", "&&")}}</h2>
      <hr>
      <hr>
      <br>
      <h5 class="alerte alert-warning w-50">Contador del hijo {{contador}}</h5>

      <button class="btn btn-success mb-4" @click="incrementar()">Contador {{cont}}</button>
      <Hijo :contador="cont" @contador="contador=$event"/>
   </div>
  </section>

</template>

<script>
import Hijo from "./Hijo.vue"

  export default  {
    name: 'src-componentes-padre',
    components:{
      Hijo
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        cont: 123,
        contador:0

      }
    },
    methods: {
      incrementar(){
        this.cont++
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
    .jumbotron{
    background-color: rgb(211, 19, 183);
    color: white;
  }

  hr{
    background-color: #bbb;
  }
</style>
