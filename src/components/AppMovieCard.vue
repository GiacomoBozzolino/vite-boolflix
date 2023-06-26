<script>

export default {
    props:{
        mymovie: Object
    }
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
                <div>{{mymovie.original_language}}</div>
            </li>
            <li>
                <div>{{mymovie.vote_average}}</div>  
            </li>

        </ul>
        
    </div>
</template>

<style lang="">
    
</style>