<template>

  <section class="src-componentes-estructura">
<div class="jumbotron">
      <h2>Componente Estructura</h2>
      <hr>
      <hr>
      <br>
  <!-- Directivas estructurales-->
        <h4><u>v-if/ v-else-if/ v-else </u></h4>
        <!--  <button class="btn-warning my-3" @click="mostrar =!mostrar">{{mostrar? "Ocultar" : "Mostrar"}}</button> -->
        <button class="btn btn-warning my-3" @click="incrementarMostrar()">{{getValorMostrar()}}</button>
        <!--         <p v-if = "mostrar" class="alert alert-warning"-->
        <p v-if="mostrar == 0" class="alert alert warning">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga accusamus at, quibusdam beatae neque nemo
            minima doloribus deleniti adipisci ab iure ratione explicabo veniam dicta laudantium qui odit nulla
            vero!</p>

        <p v-else-if="mostrar == 1" class="alert alert-success">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga accusamus at, quibusdam beatae neque nemo
            minima doloribus deleniti adipisci ab iure ratione explicabo veniam dicta laudantium qui odit nulla
            vero!
        </p>


        <!-- <p v-if = "!mostrar" class="alert-danger"> -->
        <p v-else class="alert alert-danger">
            Elemento removido
        </p>

        <!-- Directivas estructurales-->
        <h4><u>v-show</u></h4>

        <button class="btn-warning my-3" @click="mostrar2 =!mostrar2">{{mostrar2? "Ocultar" : "Mostrar"}}</button>

        <p v-show="mostrar2" class="alert alert-warning">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga accusamus at, quibusdam beatae neque nemo
            minima doloribus deleniti adipisci ab iure ratione explicabo veniam dicta laudantium qui odit nulla
            vero!</p>

        <p v-show="!mostrar2" class="alert alert-danger">
            Elemento removido
        </p>

        <h4><u>v-for</u></h4>
        <ul>
            <li v-for="(usuario,index) in usuarios"  :key="index">{{(index + 1) + "-" + usuario}}</li>
            <!-- {{`${index+1} - ${usuario}`}} -->
            <!-- <li>{{usuarios[0]}}</li>
            <li>{{usuarios[1]}}</li>
            <li>{{usuarios[2]}}</li>
            <li>{{usuarios[3]}}</li> -->


        </ul>
        <br>

        <button class="btn btn-warning my-3" @click="agregarAlumno()">Agregar Alumno</button>


        <h4 v-if ="!alumnos.length" class="alert alert-warning">
            No se encontraron alumnos
        </h4>
        <div v-if="alumnos.length">
        <ul>
            <li v-for="(alumno,index) in alumnos" :key="index">
                <!--  {{index + 1}}  -  <pre>{{alumno}}</pre> -->
                <!--  {{index + 1}}  - {{alumno.nombre}} {{alumno.apellido}} -->
                {{ (index + 1) + ' - ' + alumno.nombre + ' ' + alumno.apellido}}
            </li>

            <!-- {{`${index+1} - ${alumno}`}} -->


        </ul>

        <div class="table-responsive">
            <table class="table table-dark">
                <tr>
                    <th>Index</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>Curso</th>
                    <th>Foto</th>
                </tr>
                <tr v-for="(alumno,index) in alumnos" :key="index">
                    <td>{{index +1}}</td>
                    <td>{{alumno.nombre}}</td>
                    <td>{{alumno.apellido}}</td>
                    <td>{{alumno.edad}}</td>
                    <td>{{alumno.curso? "Si" : "No"}}</td>
                    <td>
                        <img :src="alumno.foto" width="50px" alt="alumno.nombre">
                    </td>
                </tr>
            </table>

            <h4 class="alert alert-info">
                <span v-if="calcularAlumnosCurso.ninguno">Ningun alumno hizo curso</span>
                <span v-else-if="calcularAlumnosCurso.todos">Todos los alumnos hicieron el curso</span>

                <span v-else>{{calcularAlumnosCurso.cantidad}} de {{calcularAlumnosCurso.total}} alumno(s) {{calcularAlumnosCurso.uno? "hizo":"hicieron"}} el curso </span>
            </h4>
        </div>

        <div class="media alert alert-info" v-for="(alumno,index) in alumnos" :key="index">
            <img :src="alumno.foto" width="150px" alt="alumno.nombre">
            <div class="media-body">
                <h5 class="mt-0">Alumno {{index +1}}  </h5>
                <p>
                    Nombre:  {{alumno.nombre}} {{alumno.apellido}}<br>
                    Edad: {{alumno.edad}}<br>
                    Hizo el curso <input type="checkbox" v-model="alumno.curso">
                </p>
                <button class="bt btn-danger ml-3" @click="borrar(index)">Borrar</button>
            </div>
        </div>

    </div>
    <!--  <h4 v-else class="alert alert-warning">
        No se encontraron alumnos
    </h4> -->
    
</div>  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-estructura',
    props: [],
    mounted () {

    },
    data () {
      return {
        mostrar:0,
        mostrar2: true,
        usuarios : [
            "Pedro",
            "Juan",
            "Ana",
            "Laura"
        ],
        alumnos:[
            {nombre: "Pedro",   apellido:  "Suarez", edad: 8,  curso: false, foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png "},
            {nombre: "Juan",    apellido:  "Perez", edad: 50,  curso: true, foto: " https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-128.png "},
            {nombre: "Ana",     apellido:  "Gomez", edad: 9,   curso: false, foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-128.png "},
            {nombre: "Laura",   apellido:  "Lopez", edad: 74,  curso: true, foto: " https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-128.png"},
        ]

      }
    },
    methods: {
      incrementarMostrar(){
            this.mostrar++
            if(this.mostrar ==3) this.mostrar = 0
        },
        getValorMostrar(){
            return `fase: ${this.mostrar}`
        },
        borrar(index){
            console.log("borrar", index)
            this.alumnos.splice(index,1)
        },
        agregarAlumno(){
           const alumno = {
            nombre: "Cecilia",   
            apellido:  "Perez", 
            edad: 80,  
            curso: false, 
            foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-256.png",
           }
           this.alumnos.push(alumno)
        },

    },
    computed: {
      calcularAlumnosCurso(){
           /*  let cant = 0
            this.alumnos.forEach(alumno => {
                if (alumno.curso) cant ++
            }) */
            let cant = this.alumnos.filter(alumno => alumno.curso).length
            let total = this.alumnos.length
            return{
                ninguno : cant == 0,
                uno : cant==1,
                cantidad : cant,
                total: this.alumnos.length,
                todos : cant == total
               /*  todos : cant == this.total */
            }

        } 

    }
}


</script>

<style scoped lang="css">
/*   .src-componentes-estructura {

  } */
   .jumbotron{
    background-color: crimson;
    color: white;
  }

  hr{
    background-color: #bbb;
  }
</style>
