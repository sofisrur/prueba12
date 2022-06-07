<template >

  <section class="src-componentes-http-client">
    <div class="jumbotron">
      <h2>Componente HttpClient</h2>
      <hr>
      <hr>
      <br>

    <button class="btn btn-warning my-3 mr-3" @click="getPostsXHRcb()">Pedir XHR (callback)</button>
    <button class="btn btn-success my-3 mr-3" @click="getPostsXHRpromise()">Pedir XHR (promise)</button>
    <button class="btn btn-success my-3 mr-3" @click="getPostsFetch()">Pedir Fetch</button>
    <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">Pedir Axios</button>
    <button class="btn btn-danger my-3" @click="posts=[]">CLEAR</button>
     <div v-if="posts.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body}} </td>
        </tr>
      </table>
      <h4 class="alert alert-primary">Se encontraron {{posts.length}} posts</h4>
    </div>
    <h4 v-else class="alert alert-danger text-center">No se encontraron posts</h4>
  </div>
    
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-http-client',
    props: [],
    mounted () {

    },
    data () {
      return {
/*           url: "https://jsonplaceholder.typicode.com/posts/",
 */          url: "https://62864b8896bccbf32d72cdfe.mockapi.io/posts",
          posts: [
            /*  {
              "userId": 1,
              "id": 1,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
              "userId": 1,
              "id": 2,
              "title": "qui est esse",
              "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
              "userId": 1,
              "id": 3,
              "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
              "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            }, */
          ]
      }
    },
    methods: {

      wrapperXHRpromise(){
        return new Promise((resolve, reject) => {
           const xhr= new XMLHttpRequest()
        xhr.open("get", this.url)
        xhr.addEventListener("load", () => {
          if (xhr.status == 200){
              let respueta = JSON.parse(xhr.response)
              //console.log(respueta)
              resolve(respueta)
          }
          else{
            console.error("ERROR XHR CB (STATUS)", xhr.status)
            let error = {
              tittle: "ERROR XHR CB (STATUS)",
              status: xhr.status
            }
            reject(error)
          }
        })
        xhr.addEventListener("error", e => {
            console.error("ERROR XHR CB (AJAX)", e)
             let error = {
              tittle: "ERROR XHR CB (AJAX)",
              status: e
            }
            reject(error)
        })
        xhr.send()
        })
      
      },


      getPostsXHRcb(){
        const xhr= new XMLHttpRequest()
        xhr.open("get", this.url)
        xhr.addEventListener("load", () => {
          if (xhr.status == 200){
              let respueta = JSON.parse(xhr.response)
              //console.log(respueta)
              this.posts = respueta
          }
          else{
            console.error("ERROR XHR CB (STATUS)", xhr.status)
          }
        })
        xhr.addEventListener("error", e => {
            console.error("ERROR XHR CB (AJAX)", e)
        })
        xhr.send()
      },
      async getPostsXHRpromise(){
        //UTILIZANDO LA SINTAXIS THEN/cATCH
        /*   this.wrapperXHRpromise()
          .then(respueta => {
            console.log(respueta)
            this.posts=respueta
          })
          .catch(error => console.log("Error XHRPROMISE", error))
 */

      /* UTILIZANDO ASYNC/AWAIT */
      try{
       let respuesta = await this.wrapperXHRpromise()
      /* console.log(respueta)*/           
       this.posts=respuesta
      } catch (error){
          console.log("Error XHRPROMISE", error)
      }
      },



      async getPostsFetch(){


      //UTILIZANDO LA SINTAXIS THEN/cATCH

       /*  fetch(this.url)
        .then(response => response.json())
        .then(respuesta => {
          //console.log(respuesta)
          this.posts=respuesta
        })
        .catch(error => console.log("Error FETCH", error))
      }, */

            /* UTILIZANDO ASYNC/AWAIT */
        try{
        let response = await fetch(this.url)
        let respuesta = await response.json()
          //console.log(respuesta)
          this.posts=respuesta
        } catch(error){
       console.log("Error FETCH", error)
        }
      },



      async getPostsAxios(){
       //UTILIZANDO LA SINTAXIS THEN/cATCH

/*          this.axios(this.url)
 */          /* con destructuring object*/
        /* .then(rta => { */
        /*   let {data}= rta //o let data =rta.data
           this.posts=data */

          /* let {data:datos}= rta 
          this.posts=datos .............. destructuring con alias*/
       /*  }) */

      /*  .then(({data})=>{
         this.posts=data
       }) */


        /* sin destructuring data */
        /* .then(respuesta => {
          //console.log(respuesta)
          this.posts=respuesta.data */
      
      /*   }) */
       // .catch(error => console.log("Error Axios", error))
      //}


      /* UTILIZANDO ASYNC/AWAIT */
      try{
      let {data} = await this.axios(this.url)
      this.posts=data
      }catch(error){
         console.log("Error Axios", error)
      }
      }

      /* LOS METODOS QUE HAGO CON ASYNC LE TENGO QUE AGREGAR ASYNC */
    
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  /* .src-componentes-http-client {

  } */
   .jumbotron{
    background-color: teal;
    color: white;
  }

  hr{
    background-color: #bbb;
  }
</style>
