<template>
    <v-container>
        <SearchArea @search="onUpdateSearchTerm"></SearchArea>
        <v-container>
            <v-row align="center">
                <v-col cols="4" class="pa-0 ma-0" v-for="(element, index) in allKayaks" :key="index">
                    <KayakCard :value="allKayaks[index]"></KayakCard>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import Kayak from '../models/Kayak'
import KayakCard from '../components/KayakCard.vue'
import SearchArea from '../components/SearchArea.vue'
import _ from 'lodash'
export default {
    name: 'DisplayGrid',
    components: { SearchArea, KayakCard },
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
        // filterBySearchTerm(searchTerm) {
        //     console.log(searchTerm)
        //     console.log(this.filteredContent)
        //     // this.filteredContent.forEach(element => {
        //     //     console.log(element)
        //     // })
        // },
        async getAllKayaks() {
            this.allKayaks = await Kayak.get()
            console.log('all kayaks', this.allKayaks)
        },
        onUpdateSearchTerm(word) {
            // console.log('on update search term ', word)
            this.searchTerm = word
        }
    }
}
</script>
