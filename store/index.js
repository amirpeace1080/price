import vuex from 'vuex'
import Promise from 'core-js/features/promise'

export default () => {
    return new vuex.Store({
        state: {
            arzs: []
        },
        mutations: {
            SET_ARZ(state, arzs){
                state.arzs = arzs
            }
        },
        actions: {
            arz({commit}){
                return new Promise((resolve, reject) =>{
                    this.$axios({
                        url: 'https://currency.jafari.li/json',
                        method: 'GET'
                    })
                    .then((resp)=>{
                        commit("SET_ARZ", resp.data)
                        resolve
                    })
                    .catch((error)=>{
                        console.log(error, statusArz);
                    })
                })
            }
        },
        getters: {}
    })
}