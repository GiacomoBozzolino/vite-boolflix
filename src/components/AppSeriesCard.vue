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
                {{myserie.original_language}}
            </li>

            <li>
                {{myserie.vote_average}}

            </li>
           
           
            
        </ul>
        
    </div>
</template>

<style lang="">
    
</style>