<script>
import LangFlag from 'vue-lang-code-flags'

export default {
    components:{
        LangFlag
    },

    props:{
        mymovie: Object
    },
    data() {
        return {
            
        }
    },
   
    methods: {
        // funzione per trasformare il punteggio medio
        makeStar(){
            let point = Math.round(this.mymovie.vote_average / 2) 
            return point
        }
    },
}
</script>




<template lang="">

    <div class="cards">
        <div class="text-center" v-if="mymovie.poster_path !== null">
            <!-- aggiungo un controllo se manca l'immagine -->
            <img :src="`https://image.tmdb.org/t/p/w342/${mymovie.poster_path}`" alt="">
        </div>
        <div>
            <ul>
                <li>
                     <div> 
                        <span>Titolo:</span> 
                        {{mymovie.title}}
                    </div>
                </li>
                <li>
                     <div>
                        <span>Titolo originale:</span>
                        {{mymovie.original_title}}
                    </div>
                </li>
                <li>
                    <div>
                        <span class="pt-2">Lingua originale:</span> <lang-flag class="flag mb-1" :iso="mymovie.original_language"/>  
                    </div>
                </li>
                <li >
                    <div class="d-flex justify-content-center">
                        <!-- stampo le stelle piene -->
                        <div v-for="point in makeStar()" ><i class="fa-solid fa-star"></i></div>
                        <!-- stampo le stelle vuote -->
                        <div v-for=" point in (5 -makeStar())" ><i class="fa-regular fa-star"></i></div>    
                    </div>
                </li>
                <li>
                    <div>Sinossi: {{mymovie.overview}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cards{
    width: 350px ;
    margin: 0 1rem;
    border: 1px solid gray;
}
.flag{
    width: 30px;
    height: 30px;
}
li{
    div{
        span{
        font-weight: bold;
        }
    }
}
</style>