<template>

  <section class="src-componentes-binding">
    <div class="jumbotron">
      <h2>Componente Binding</h2>
      <hr>
      <hr>
      <br>
      <!-- Directiva data binding -->
            <h4><u>Interpolacion / v-text / v-html </u></h4>
            <b>{{3+4}}</b>
            <br>
            <br>
            <b>{{mensaje}}</b>
            <div v-text="mensaje"></div>
            <div v-html="mensaje"></div>
            <br>
            <b>{{mensajeHTML}}</b>
            <div v-text="mensajeHTML"></div>
            <div v-html="mensajeHTML"></div>

            <!-- Property Binding / v-bind -->
            <br>
            <h4><u>Property Binding / v-bind </u></h4>

            <input type="text" value="123"><br>
            <input type="text" value="valor"><br>
            <input type="text" v-bind:value="valor"> {{valor}}<br>
            <input type="text" :value="valor"> {{valor}}<br>


            <br>
            <h4><u>Event Binding / v-on </u></h4>
            <button class="btn btn-success my-3" v-on:click="contador++">Conta {{contador}}</button>
            <button class="btn btn-warning my-3" @click="contador2++">Conta {{contador2}}</button>
            <button class="btn btn-danger my-3" @click="incrementar()">Conta {{getContador()}}</button>

            <!-- Double data Binding / v-model -->
            <h4><u>Double data Binding / v-model </u></h4>
            <br>

            <h5>Manual</h5>
            <input type="text" value="valor2" @input="actualizar($event)">{{valor2}}<br>
            <!-- input event: tiene informacion sobre el evento -->

            <h5>Automatico</h5>
            <input type="text" v-model="valor3">{{valor3}}<br>

            <br>
            <br>
            <br>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-binding',
    props: [],
    mounted () {

    },
    data () {
      return {
         mensaje: "Soy un mensaje", 
        mensajeHTML: "<i>Soy un mensaje</i>",
        valor: 123,
        valor2: 321,
        valor3:  654,
        contador: 123,
        contador2: 456, 
        contador3: 789, 

      }
    },
    methods: {
       incrementar(){
            this.contador3++
        },
        getContador(){
           return this.contador3
        },
        actualizar(e){

            //console.log("actualizar", e)
            let valor = e.target.value
            this.valor2 = valor
        },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-binding {

  }
  .jumbotron{
    background-color: blue;
    color: white;
  }

  hr{
    background-color: #bbb;
  }
</style>
