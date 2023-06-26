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
      axios.get(store.serieUrl).then((response) => {
                store.series = response.data.results;
                console.log(response.data.results)
              
            })
    },


    methods: {
      search(){
        store.myUrl= store.apiUrl
        if(store.searchText !== ''){
             store.myUrl += `&query=${store.searchText}`
              console.log(store.searchText)
              
          }
      },

      getMovie(){

        this.search()

        axios.get(store.myUrl).then((response) => {
                store.movies = response.data.results;
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