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
      this.getMovie()
    },
    methods: {
      getMovie(){

        store.myUrl= store.apiUrl
        if(store.searchText !== ''){
             store.myUrl += `&query=${store.searchText}`
              console.log(store.searchText)
              
          }

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