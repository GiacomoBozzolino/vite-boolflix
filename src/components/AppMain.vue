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
            <!-- <h2>FILM</h2> -->
            <!-- ciclo per i film -->
            <div v-for="(movie, index) in store.movies" :key="index">
                <!-- recupero il file per generare le schede -->
                <AppMovieCard :mymovie= "movie"/>
            </div>

        </li>
        <li>
            <!-- <H2>SERIE</H2> -->
            <!-- ciclo per le serie -->
            <div v-for="(serie, index) in store.series" :key="index">
                <!-- recupero il file per generare le schede -->
                <AppSeriesCard :myserie= "serie"/>
                
             </div>
        </li>
    </ul>
   
    
</template>

<style lang="">
    
</style>