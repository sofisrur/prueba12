export const miMixinLocal = {
    beforeMount(){
        console.warn("before mount -> miMixinLocal")
    },
    mounted(){
        console.warn("mount -> miMixinLocal")
    },
    methods:{
         saludar(){
            return "Hola como estas desde el miMixinLocal"
        }
    }
}