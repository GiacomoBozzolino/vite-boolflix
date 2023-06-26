<script>
import AppMovieCard from './AppMovieCard.vue';
import AppSeriesCard from './AppSeriesCard.vue';
import { store } from '../store';
export default {

    components:{
        AppMovieCard,
        AppSeriesCard,
    },
    data() {
        return {
            store,
            
        }
       
    },
}
</script>

<template lang="">
    <ul>
        <li>
            <div v-for="(movie, index) in store.movies" :key="index">
                <AppMovieCard :mymovie= "movie"/>
            </div>

        </li>
        <li>
            <div v-for="(serie, index) in store.series" :key="index">
                <AppSeriesCard :myseries= "serie"/>
             </div>
        </li>
    </ul>
   
    
</template>

<style lang="">
    
</style>