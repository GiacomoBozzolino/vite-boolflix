<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store} from './store.js';
import axios from 'axios';

  export default {
    components: {
      AppHeader,
      AppMain,
    },
    data() {
      return {
        store
      }
    },
    mounted() {
      this.getMovie();
      
    },


    methods: {
      search(url){
        if(store.searchText !== ''){
            return url += `&query=${store.searchText}`
              console.log(store.searchText) 
              console.log(url)
          }
          
      },
      // METODO DI CHIAMATA PER MOVIES
      getMovie(){
        store.myUrl = store.apiUrl

        // if(store.searchText !== ''){
        //      store.myUrl += `&query=${store.searchText}`
        //       console.log(store.searchText) 
        //   }
        this.search(store.myUrl)

          axios.get(store.myUrl).then((response) => {
                store.movies = response.data.results;
                console.log(response.data.results)    
        });



        store.mySecondUrl = store.serieUrl
        if(store.searchText !== ''){
            store.mySecondUrl += `&query=${store.searchText}`
            console.log(store.searchText) 
        }
       
        

        axios.get(store.mySecondUrl).then((response) => {
                store.series = response.data.results;
                console.log(response.data.results)
              
            });
      },



      //CHIUSURA METODO DI CHIAMATA PER series
      getSerie(){
        // riprendo l'api principale
        store.mySecondUrl = store.serieUrl
        // richiamo la funzione di ricerca
        if(store.searchText !== ''){
             store.mySecondUrl += `&query=${store.searchText}`
              console.log(store.searchText) 
          }
        // eseguo la chiamata
        axios.get(store.mySecondUrl).then((response) => {
                store.series = response.data.results;
                console.log(response.data.results)
              
            })
      }






    },
    
  }
</script>
<template lang="">
  <div>
    <AppHeader @search="getMovie"/>
    <AppMain/>
    
  </div>
</template>
<style lang="">
  
</style>