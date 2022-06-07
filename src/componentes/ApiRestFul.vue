<template >

  <section class="src-componentes-api-rest-ful">
 <div class="jumbotron">
      <h2>Componente ApiRestFul</h2>
      <hr>
      <hr>

      <!-- <pre>{{usuarios}}</pre> -->

       <button class="bt btn-success mr-2 mb-3" @click="getUsuarios()">GET</button>
               <button class="bt btn-info mb-3" @click="postUsuarios()">POST</button>

       <div class="media alert alert-info" v-for="(usuario,index) in usuarios" :key="index">
            <img :src="usuario.foto" width="300px" alt="usuario.name" :style="{'border-radius': '10px'}">
            <div class="media-body ml-3">
                <h5 class="mt-0">Usuario {{index +1}}  - ID: {{usuario.id}} - creado: {{convertirFyH(usuario.createdAt)}}</h5>
                <p> Nombre: <b> {{usuario.name}}</b></p>
                  <p>  Descripcion: {{usuario.description}}</p>
                   <p> Comentarios: {{usuario.comentarios}}</p>
                    <p> {{usuario.direccion}} - {{usuario.cordenadas}}<br>
                </p>
               <button class="bt btn-warning mr-3 mt-3" @click="putUsuarios(usuario.id)">PUT</button>
               <button class="bt btn-danger mt-3" @click="deleteUsuarios(usuario.id)">DELETE</button>
             </div>
        </div>
      </div>
      </section>

</template>

<script>

  export default  {
    name: 'src-componentes-api-rest-ful',
    props: [],
    mounted () {
      //this.getUsuarios()

    },
    data () {
      return {
        url: "https://62864b8896bccbf32d72cdfe.mockapi.io/usuarios/",
        usuarios:[]

      }
    },
    methods: {
      convertirFyH(fyh){
        return new Date(fyh).toLocaleString()
      },
        /* API REST: GET */
        async getUsuarios(){
          try{
          let {data: usuarios} = await this.axios(this.url)
          console.log("AXIOS GET USUARIOS", usuarios)
          this.usuarios= usuarios
          } catch(error){
            console.log("Error en getUsuarios()", error.message)

          }

        },
         /* API REST: POST */
        async postUsuarios(){
           let usuarioNuevo= {
            name:"Juan",
            foto:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-128.png",
            description:"usuario del sistema A!",
            cordenadas:["12345","54321"],
            direccion:"CABA 123",
            comentarios:"Hola, como estas?",
            }

          try{
         
            let {data:usuario} = await this.axios.post(this.url, usuarioNuevo, {"content-type": "application/json"})
            console.log("AXIOS POST USUARIOS", usuario)

            this.usuarios.push(usuario)
            } 
           catch(error){
            console.log("Error en postUsuarios()", error.message)
            }
        },
         /* API REST: PUT */
          async putUsuarios(id){
             console.log("put usuarios", id)
 
            let usuarioUpdate= {
            name:"Ana",
            foto:"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png",
            description:"usuario del sistema B!",
            cordenadas:["78945","54321"],
            direccion:"CABA 456",
            comentarios:"Hola, dame bola?",
            }

            try{
         
            let {data:usuario} = await this.axios.put(this.url+id, usuarioUpdate, {"content-type": "application/json"})
            console.log("AXIOS PUT USUARIOS", usuario)
            let index = this.usuarios.findIndex(user => user.id == usuario.id)
            if(index == -1) throw new Error ("Usuario no encontrado")
            this.usuarios.splice(index,1,usuario)
            } 
            catch(error){
            console.log("Error en putUsuarios()", error.message)
            }
          
          },

        
         /* API REST: DELETE */
          async deleteUsuarios(id){
          console.log("delete usuarios", id)
           try{
         
            let {data:usuario} = await this.axios.delete(this.url+id)
            console.log("AXIOS DELETE USUARIOS", usuario)
            let index = this.usuarios.findIndex(user => user.id == usuario.id)
            if(index == -1) throw new Error ("Usuario no encontrado")
            this.usuarios.splice(index,1)
            } 
            catch(error){
            console.log("Error en deleteUsuario()", error.message)
            }
          
        }
    },
    computed: {

    }
}
  

</script>

<style scoped lang="css">
  /* .src-componentes-api-rest-ful {

  } */
  .jumbotron{
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f8ffe8+0,e3f5ab+33,b7df2d+100;Green+3D+%234 */
background: #f8ffe8; /* Old browsers */
background: -moz-linear-gradient(left,  #f8ffe8 0%, #e3f5ab 33%, #b7df2d 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(left,  #f8ffe8 0%,#e3f5ab 33%,#b7df2d 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right,  #f8ffe8 0%,#e3f5ab 33%,#b7df2d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8ffe8', endColorstr='#b7df2d',GradientType=1 ); /* IE6-9 */
color:black
  }
hr{
  background-color: #f8ffe8;
}
pre{
  color: black;
}
</style>
