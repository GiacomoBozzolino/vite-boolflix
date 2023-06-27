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
    <div>
        <h2 class="px-3">MOVIES</h2>
       <div class="watch-slider d-flex m-3 py-5">
            <!-- ciclo per i film -->
           <div v-for="(movie, index) in store.movies" :key="index">
               <!-- recupero il file per generare le schede -->
               <AppMovieCard :mymovie= "movie"/>
           </div>
       </div>
           
                
            
       
    </div>
    <div>
        <h2>SERIES</h2>
       
        <ul>
            <li>
                <div v-for="(serie, index) in store.series" :key="index">
                    <!-- recupero il file per generare le schede -->
                    <AppSeriesCard :myserie= "serie"/>
                 </div>
            </li>
        </ul>

    </div>
   
    
</template>

<style lang="scss" scoped>
.watch-slider{
    overflow-x: scroll;
}
    
</style>