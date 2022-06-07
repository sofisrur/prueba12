<template >

  <section class="src-componentes-contadores">
 <div class="jumbotron">
      <h2>Componente Contadores</h2>
      <hr>
      <hr>
      <br>
         <Contador init="123" color="success"></Contador>
          <Contador init="456" color="warning"></Contador>
          <Contador init="789" color="danger"></Contador>
          <Contador></Contador>
    </div>  </section>

</template>

<script lang="js">

import Contador from './Contador/IndexContador.vue'

  export default  {
    name: 'src-componentes-contadores',
    components: {
      Contador
    },
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
  .src-componentes-contadores {

  }
    .jumbotron{
    background-color: gold;
    color: white;
  }

  hr{
    background-color: #bbb;
  }
</style>
