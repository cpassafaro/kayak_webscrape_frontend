<template>
    <v-container>
        <SearchArea @search="onUpdateSearchTerm"></SearchArea>
    </v-container>
</template>

<script>
import Kayak from '../models/Kayak'
import SearchArea from '../components/SearchArea.vue'
import _ from 'lodash'
export default {
    name: 'DisplayGrid',
    components: { SearchArea },
    props: {},
    computed: {
        // filteredContent() {
        //     if(this.searchTerm) {
        //         console.log('search ', this.searchTerm)
        //         return []
        //     } else {
        //         console.log('not searching ', this.allKayaks)
        //         return this.allKayaks
        //     }
        // },  
    },
    watch: {
        searchTerm(newValue) {
            console.log('search term ', newValue)
            this.filterBySearchTerm(newValue)
        },  
    },
    data() {
        return {
            allKayaks: '',
            searchTerm: '',
            filteredContent: '',
        }
    },
    mounted() {
        this.getAllKayaks()
    },
    methods: {
        filterBySearchTerm(searchTerm) {
            console.log(searchTerm)
            this.filteredContent.forEach(element => {
                console.log(element)
            })
        },
        async getAllKayaks() {
            console.log(_.flattenDeep(await Kayak.get()))
            this.filteredContent = _.flattenDeep(await Kayak.get())
            // this.allKayaks = _.flatten(this.allKayaks)
            console.log('all kayaks', this.filteredContent)
        },
        onUpdateSearchTerm(word) {
            // console.log('on update search term ', word)
            this.searchTerm = word
        }
    }
}
</script>
