<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            
        }
       
    },
}
</script>

<template lang="">
    <div v-for="(movie, index) in store.movies" :key="index">
        <div>{{movie.original_title}}</div>
        
    </div>
    <div>ciao</div>
</template>

<style lang="">
    
</style>