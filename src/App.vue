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
      search(url, search){
        if(search !== ''){
             return url += `&query=${search}`
          } else {
            return url 
          }
         
      },
      // METODO DI CHIAMATA PER MOVIES E SERIES
      getMovie(){
        let myUrl = store.apiUrl;
        let mySecondUrl =store.serieUrl;
        let search = store.searchText;
        
        // PER MOVIES
        let searchUrl = this.search(myUrl, search);
  
        axios.get(searchUrl).then((response) => {
          store.movies = response.data.results;
          console.log(response.data.results)    
        });

        // PER SERIES
        let secondSearchUrl = this.search(mySecondUrl, search);
  
        axios.get(secondSearchUrl).then((response) => {
          store.series = response.data.results;
          console.log(response.data.results)     
        });
      },
    },
    
  }
</script>
<template lang="">
  <div>
    <AppHeader @search="getMovie"/>
    <AppMain/>
    
  </div>
</template>
<style lang="scss">
@use '../styles/generals.scss' as *
  
</style>