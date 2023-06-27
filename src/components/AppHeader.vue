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
    <header>
        <div class="container-fluid px-3" >
            <div class="row">
                <div class="col-12" >
                    <div class="content d-flex justify-content-between align-items-center">
                        <h1 >BOOLFLIX</h1>
                        <div class="d-flex">
                            <input class="form-control mx-2" type="text" id="search" v-model="store.searchText" placeholder=" search" >
                            <button class="btn btn-danger" @click="$emit('search')">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
        height: 150px;
        .content{
            height: 150px;
        }

    }

    
    
</style>