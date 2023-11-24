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
    computed: {},
    watch: {
        searchTerm(newValue) {
            this.filterBySearchTerm(newValue)
        },
    },
    data() {
        return {
            allKayaks: [],
            searchTerm: '',
            filteredKayaks: [],
        }
    },
    mounted() {
        this.getAllKayaks()
    },
    methods: {
        filterBySearchTerm(searchTerm) {
            if(searchTerm === ''){
                this.filteredKayaks = this.allKayaks
            } else {
                this.filteredKayaks = this.allKayaks.filter(kayak => {
                    console.log(kayak.title.toLowerCase())
                    console.log(kayak.title.toLowerCase().includes(searchTerm))
                    return kayak.title.toLowerCase().includes(searchTerm)
                })
            }
        },
        async getAllKayaks() {
            const kayakHolder = await Kayak.get()
            kayakHolder.forEach((element) => {
                for (const boat in element) {
                    // for colorado kayak replace {width} with an actual width
                    // console.log(element[boat])
                    if(element[boat].website === 'Colorado Kayak' || element[boat].website === 'Rutabaga Shop') {
                        element[boat].image = element[boat].image.replace('{width}', '200')
                        element[boat].image = element[boat].image.slice(0, element[boat].image.indexOf('?'))
                        console.log(element[boat].image)
                    }
                    this.allKayaks.push(element[boat])
                    this.filteredKayaks.push(element[boat])
                }
            })
        },
        onUpdateSearchTerm(word) {
            this.searchTerm = word
        }
    }
}
</script>
