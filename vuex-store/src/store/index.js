import { createStore } from 'vuex';

 const store = createStore({
   state() {
     return {
       count: 0,
     };
   },

   mutations: {
     increment(state) {
           state.count++;
           console.log(state.count)
     },
   },
 });



store.commit('increment');


export default store