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
    <div>
        <input type="text" id="search" v-model="store.searchText" placeholder=" search" >
        <button @click="$emit('search')">Search</button>
    </div>
</template>

<style lang="">
    
</style>