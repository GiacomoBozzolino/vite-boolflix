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
        
    },
}
</script>




<template lang="">
    <div>
        <ul>
            <li>
                <div>{{mymovie.title}}</div>
            </li>
            <li>
                <div>{{mymovie.original_title}}</div>
            </li>
            <li>
                <lang-flag :iso="mymovie.original_language"/>  
            </li>
            <li>
                <div>{{mymovie.vote_average}}</div>  
            </li>
            

        </ul>
        
    </div>
</template>

<style lang="">
    
</style>