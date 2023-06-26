import { reactive } from 'vue'

export const store = reactive({
    // recupero api NB MESSO FILM PLACEHOLDER PER PROVA
    apiUrl:'https://api.themoviedb.org/3/search/movie?api_key=0687ba305a9abbe356b2713b91984653',
    serieUrl:' https://api.themoviedb.org/3/search/tv?api_key=0687ba305a9abbe356b2713b91984653&query=dark',
    movies:[],
    series:[],
    searchText:'',
    myUrl:'',
})