
export default {
  name: 'src-componentes-contador',
  components: {},
  props: ["init", "color"],
  data () {
    return {
      cont : this.init || 0, //short circuit operator (LOS DOS VALORES COMPITEN POR ESTA EN EL CONT, EL OPERADOR
      //EVALUA DE IZQUIERDA A DERECHA, SI ES DISNTINTO DE INDEFINIDO O DISTINTO DE NULL
      
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    contar(){
      this.cont++
  },
  getColor(){
      return "btn-" + (this.color || "primary") 
  }
  }
}


