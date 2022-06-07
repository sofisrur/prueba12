<template>

  <section class="src-componentes-hijo">
<div class="jumbotron">
      <h2>Componente Hijo ({{timer}})</h2>
      <hr>
      <hr>
      <br> 
      <h5 class="alerte alert-success w-50">Contador del padre {{contador}}</h5>
     <button class="btn btn-warning mb-4" @click="incrementar()">Contador {{cont}}</button>
      <!-- local filters: --><hr>
      <h4>Filtros locales:</h4><br>
      Ingrese el presupuesto en $ <input type="text" v-model="valorPresupuesto"><br><br>
      <p>Presupuesto en pesos: {{valorPresupuesto | curremcy("$")}}</p>
      <p>Presupuesto en dolares: {{valorPresupuesto | toUsd(208) | curremcy("USD")}}</p>
      <br>
      <!-- Mixins locales: metodos, propiedades, etc que se pueden mezclar -->
      <h4>Mixins locales:</h4>
      <p>{{saludar()}}</p>
</div>

</section>

</template>

<script >
  import { miMixinLocal } from '../localMixins'
  export default  {
    name: 'src-componentes-hijo',
    props: ["contador"],
    /* LIFE CYCLE HOOKS: */
    //creacion del componente en memoria
    beforeCreate(){
      console.log("beforeCreate -> Hijo")
    },
      created(){
      console.log("created -> Hijo")
    },
    //despliegue del componente en el DOM
      beforeMount(){
      console.log("beforeMount -> Hijo")
    },
      mount(){
      console.log("mount -> Hijo")
    },
    mounted () {
    /*   setTimeout(() => {
      this.$emit("contador", this.cont)
      },2000) */

     this.refTimer= setInterval(()=>{
        this.timer++
/*         console.warn(this.timer)
 */      },1000)
      this.$emit("contador", this.cont)
    },
    /* cambio de las propiedades o la vista del componente */
      beforeUpdate(){
      console.log("beforeUpdate -> Hijo")
    },
      update(){
      console.log("update -> Hijo")
    },
    //indica el proceso de desmontado o destruccion del componente
      beforeDestroy(){
      console.log("beforeDestroy -> Hijo")
    },
      destroyed(){
      console.log("destroyed -> Hijo")
      clearInterval(this.refTimer)
    },
    /* FILTROS LOCALES:      */
    filters:{
      curremcy: function(value,signo){
/*         return signo + (value == "" ? 0 : value)
 */        return signo + (Number(value || 0).toFixed(2))
    },
      toUsd: function(value,valorUsd){
        return (value / valorUsd).toFixed(2)
      }
      },
      /* local mixins */
      mixins:[miMixinLocal],
    
    data () {
      return {
        cont: 321,
        timer:0,
        refTimer:null,
        valorPresupuesto: 12000
      }
    },
    methods: {
        incrementar(){
         this.cont++
         this.$emit("contador", this.cont)
        },
    /*      saludar(){
          return "Hola, como estan desde el hijo"
        }  */
    },
    computed: {
    
    }
}

</script>

<style scoped lang="css">
     .jumbotron{
    background-color: rgb(55, 2, 44);
    color: white;
  }

  hr{
    background-color: #bbb;
  }
</style>
