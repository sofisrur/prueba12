import Vue from "vue"

const miMixinGlobal = {
/* beforeMount(){
    console.error("before mount -> miMixinGlobal")
},
mounted(){
    console.warn("mount -> miMixinGlobal")
}, */
    methods:{
     saludar(){
        return "Hola como estas desde el miMixinGlobal"
    },
    decrementar(){
        /*         this.contador--
         */       console.warn(" ---------------")
                  console.warn("dispatch -> decrementar",new Date().toLocaleString())
                  this.$store.dispatch("contarDown",3)
        
              },
              incrementar(){
          /*       this.contador++ */
                console.warn(" ---------------")
                  console.warn("dispatch -> incrementar",new Date().toLocaleString())
                  this.$store.dispatch("contarUp",1)
              }           
    
},
computed:{
    mostrarContadorVuex(){
        let contador = this.$store.state.contador
        console.error("mostrarContadorVuex", contador)
        return contador
      }
    }
}

Vue.mixin(miMixinGlobal)