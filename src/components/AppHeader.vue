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
    <header >
        <div class="container-fluid px-3" >
            <div class="row">
                <div class="col-12" >
                    <div class="content d-flex justify-content-between align-items-center">
                        <div>
                            <img src="../assets/logo.png" alt="">
                        </div>
                        <div class="d-flex">
                            <input class="form-control mx-2" type="text" id="search" v-model="store.searchText" placeholder=" search" @keyup.enter="$emit('search')">
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
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 20;
        height: 150px;
        background: rgb(20,20,20);
        background: linear-gradient(0deg, rgba(20,20,20,0.5340336818321079) 15%, rgba(20,20,20,1) 76%);
        &:hover{
            background-color:rgb(20,20,20) ;
        }
        .content{
            height: 150px;
        }
    } 
</style>