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

    <div class="cards position-relative">
        <div class="text-center" >
            <!-- aggiungo un controllo se manca l'immagine -->
            <img v-if="myserie.poster_path !== null" :src="`https://image.tmdb.org/t/p/w500/${myserie.poster_path}`" :alt="myserie.original_name">
            <img id="placeholder" v-else="myserie.poster_path === null" src="../assets/No-Image-Placeholder.png" :alt="myserie.original_name">   
        </div>

        <div class="overlay position-absolute top-0 end-0">
            <ul >
                <li>
                        <div> 
                        <span>Titolo:</span> 
                        {{myserie.name}}
                    </div>
                </li>
                <li>
                        <div>
                        <span>Titolo originale:</span>
                        {{myserie.original_name}}
                    </div>
                </li>
                <li>
                    <div class="d-flex align-items-center">
                        <span >Lingua originale: </span> 
                        <lang-flag class="flag mx-1" :iso="myserie.original_language"/>  
                    </div>
                </li>
                <li >
                    <div class="d-flex justify-content-center">
                        <!-- stampo le stelle piene -->
                        <div v-for="point in makeStar()" ><i class="fa-solid fa-star" style="color: #dfdf00;"></i></div>
                        <!-- stampo le stelle vuote -->
                        <div v-for=" point in (5 -makeStar())" ><i class="fa-regular fa-star"></i></div>    
                    </div>
                </li>
                <li>
                    <div>
                        <span>Sinossi:</span>
                         {{myserie.overview}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cards{
    width: 500px ;
    margin: 0 0.5rem;
    // border: 1px solid gray;
}
.flag{
    width: 30px;
    height: 30px;
}
li{
    padding: 10px 0;
    div{
        span{
        font-weight: bold;
        font-size: 17px;
        }
    }
}

.overlay {
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0, 0, 0, 0.744);
    display: flex;
    align-items: center;
    &:hover{
        opacity:1;   
    }
    ul{
        padding: 0 10px;
    }
    
}

#placeholder{
    width: 500px;
}
</style>