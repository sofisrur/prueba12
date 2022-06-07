<template>

  <section class="src-componentes-contador-vuex">
<div class="jumbotron">
      <h2>Componente Contador Vuex</h2>
      <hr>
      <hr>
      <br>

<!--     <h3>Contador {{contador}}</h3>-->   
<!--      <h3>Contador {{$store.state.contador}}</h3>
 -->    
  <h3>{{mostrarContadorVuex}}</h3>
 <button class="btn btn-success my-2 mr-3" @click="decrementar()">Decrementar</button>
    <button class="btn btn-success my-2 mr-3" @click="incrementar()">Incrementar</button>

      </div>
      </section>

</template>

<script>

  export default  {
    name: 'src-componentes-contador-vuex',
    props: [],
    mounted () {

    },
    data () {
      return {
        contador:123
      }
    },
    methods: {
     /*  decrementar(){
        this.contador--
        console.warn(" ---------------")
          console.warn("dispatch -> decrementar",new Date().toLocaleString())
          this.$store.dispatch("contarDown",1)

      },
      incrementar(){
        this.contador++
        console.warn(" ---------------")
          console.warn("dispatch -> incrementar",new Date().toLocaleString())
          this.$store.dispatch("contarUp",1)
      } */
    },
    computed: {
    
    }
}


</script>

<style scoped lang="css">
.jumbotron{
    background-color: teal;
    color: white;
  }

  hr{
    background-color: #bbb;
  }
 
</style>
