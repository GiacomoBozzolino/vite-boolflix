<script>
import LangFlag from 'vue-lang-code-flags'

export default {
    components:{
        LangFlag
    },

    props:{
        myserie: Object
    },
    data() {
        return {
            
        }
    },
    methods: {
        // funzione per trasformare il punteggio medio
        makeStar(){
            let point = Math.round(this.myserie.vote_average / 2) 
            return point
        }
    },
}
</script>


<template lang="">
    <div>
      
        <ul>
            <li>
                {{myserie.name}}
                
            </li>
            
            <li>
                {{myserie.original_name}}
            </li>

            <li>
                <lang-flag :iso="myserie.original_language"/>  
            </li>

            <li>
                <!-- stampo le stelle piene -->
                <div v-for="point in makeStar()" ><i class="fa-solid fa-star"></i></div>
                <!-- stampo le stelle vuote -->
                <div v-for=" point in (5 -makeStar())" ><i class="fa-regular fa-star"></i></div>
                
            </li>
            <li>
                <!-- aggiungo un controllo se manca l'immagine -->
                <div v-if="myserie.poster_path !== null">
                    <img :src="`https://image.tmdb.org/t/p/w342/${myserie.poster_path}`" alt="">
                </div>
            </li>
           
           
            
        </ul>
        
    </div>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *
    
</style>