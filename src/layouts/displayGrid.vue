<template>
    <v-container>
        <SearchArea @search="onUpdateSearchTerm"></SearchArea>
        <v-container>
            <v-row align="center">
                <v-col cols="4" class="pa-0 ma-0" v-for="(element, index) in filteredKayaks" :key="index">
                    <KayakCard :value="filteredKayaks[index]"></KayakCard>
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
            allKayaks: [],
            searchTerm: '',
            filteredKayaks: [],
            updateKey: 0
        }
    },
    mounted() {
        this.getAllKayaks()
    },
    methods: {
        filterBySearchTerm(searchTerm) {
            console.log('filter by search starts!!!!')
            if(searchTerm === ''){
                this.filteredKayaks = this.allKayaks
                // this.updateKey = this.updateKey + 1
            } else {
                this.filteredKayaks = this.allKayaks.filter(kayak => {
                    console.log(kayak.title.toLowerCase())
                    console.log(kayak.title.toLowerCase().includes(searchTerm))
                    return kayak.title.toLowerCase().includes(searchTerm)
                })
                // this.updateKey = this.updateKey + 1
                console.log('filtered kayaks ', this.filteredKayaks)
            }
            this.updateKey = this.updateKey + 1
            console.log('filtered all kayaks ', this.filteredKayaks)
        },
        async getAllKayaks() {
            const kayakHolder = await Kayak.get()
            kayakHolder.forEach((element) => {
                // console.log(typeof element)
                for (const boat in element) {
                    // console.log(element[boat])
                    this.allKayaks.push(element[boat])
                    this.filteredKayaks.push(element[boat])
                }
                // element.forEach((boat) => {
                //     console.log(boat)
                // })
            })
            console.log(typeof this.allKayaks)
        },
        onUpdateSearchTerm(word) {
            // console.log('on update search term ', word)
            this.searchTerm = word
        }
    }
}
</script>
