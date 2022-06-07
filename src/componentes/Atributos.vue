<template>

  <section class="src-componentes-atributos">
  <div class="jumbotron">
      <h2>Componente Atributos</h2>
      <hr>
      <hr>
      <br>
       <!-- Directivas de atributos-->
            <h4><u>Directivas de atributos (CSS condicional)</u></h4>
            <hr>

            <h4>:style</h4>

            <button @click="estado1=!estado1" class="btn btn-info my-3">Cambiar fondo</button>
           <!--  <p style="color:white;background-color:green;border-radius:10px;padding:10px;"> --><!-- css en linea estatico -->
                <!-- <p :style="{color:'white', backgroundColor:estado1 ?'green' : 'red','border-radius':'10px',padding:'10px'} --><!-- ">css en linea dinamico (puedo agregar un ternario) -->
                <p :style=getEstilos(estado1)>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo qui similique enim commodi laborum architecto unde maxime itaque eum officia consequuntur obcaecati asperiores eligendi sint, culpa, in, quisquam nam minus.
            </p>
            <hr>

            <h4>:class</h4>

            <button @click="estado2=!estado2" class="btn btn-info my-3">Cambiar fondo</button>
            <!-- <p class="bg-success text-white p-2"> -->
                <!-- <p :class="{'bg-success' : estado2, 'bg-danger' : !estado2, 'text-white' : true, 'p-2': true, rounded: true}"> -->
                <!-- <p :class="['bg-success', 'text-white', 'p-2', 'rounder']"> -->
                <!--     <p :class="[{'bg-success':estado2,'bg-danger' : !estado2}, 'text-white', 'p-2', 'rounder']"> -->
                    <p :class="getClass(estado2)">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo qui similique enim commodi laborum architecto unde maxime itaque eum officia consequuntur obcaecati asperiores eligendi sint, culpa, in, quisquam nam minus.
            </p>
            <br>
            <hr>
            <h4>MIXIN GLOBAL</h4>
            <p>{{saludar()}}</p>
    </div>   </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-atributos',
    props: [],
    mounted () {

    },
    data () {
      return {
           estado1: true,
        estado2: true,

      }
    },
    methods: {
      getEstilos(estado){
            return {color:'white',
             backgroundColor: estado?'green' : 'red',
             'border-radius':'10px',
             padding:'10px'
        }
        },
        getClass(estado){
            return [{'bg-success':estado,'bg-danger' : !estado}, 'text-white', 'p-2', 'rounder']
         }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
 
   .jumbotron{
    background-color: blueviolet;
    color: white;
  }

  hr{
    background-color: #bbb;
  }
</style>
