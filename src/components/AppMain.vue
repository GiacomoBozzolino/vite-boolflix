<script>
import AppMovieCard from './AppMovieCard.vue';
import { store } from '../store';
export default {

    components:{
        AppMovieCard,
    },
    data() {
        return {
            store,
            
        }
       
    },
}
</script>

<template lang="">
    <div v-for="(movie, index) in store.movies" :key="index">
        <AppMovieCard :mymovie= "movie"/>
        
    </div>
    
</template>

<style lang="">
    
</style>