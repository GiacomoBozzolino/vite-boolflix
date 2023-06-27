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
                {{myserie.vote_average}}
                
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