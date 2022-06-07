
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData()

      }
    
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData(){
      return{
        nombre: " ",
        apellido: null,
        edad:null,
        email:null,
      }
    },
    enviar(){
      console.log("Enviar")
      console.log({...this.formData})//clonacion de un objeto ...Spread operator
      this.formData=this.getInicialData()
      this.formDirty=this.getInicialData()
      }
  }
}


