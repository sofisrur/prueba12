import Vue from "vue"
import Vuex from "vuex"

const delay = ms => new Promise((resolve,reject) => {
if(typeof ms == "number"){
    setTimeout(resolve,ms)
}
else{
    reject("ms no es de tipo number")
}
})

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        contador:321
    },
    actions:{ //se permite trabajar asincronicamente unicamente aca
        async contarUp({commit},cant){
            console.warn("Action -> contarUp", cant, new Date().toLocaleString())
           /* con promesas (sin el async) 
           delay(1000)
            .then(()=>{commit("incrementar",cant)})
            .catch(error=>console.error(error)) */

            try{
            await delay(1000)
            commit("incrementar",cant)
            } catch(error){
                console.error(error)
            }
        },
        contarDown({commit},cant){
            console.warn("Action -> contarDown", cant, new Date().toLocaleString())
            setTimeout(() => {
            commit("decrementar",cant)
           },2000)
        },
    },
    mutations:{
        incrementar(state,cant){
            console.warn("Mutations -> incrementar", state,cant, new Date().toLocaleString())
            state.contador+=cant

        },
        decrementar(state,cant){
            console.warn("Mutations -> decrementar", state,cant, new Date().toLocaleString())
            state.contador-=cant
        }

    }
})