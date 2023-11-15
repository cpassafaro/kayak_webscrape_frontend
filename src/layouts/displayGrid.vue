<template>
    <v-container>
        <SearchArea :value="searchTerm"></SearchArea>
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
        filteredContent() {
            if(this.searchTerm) {
                console.log('search ', this.searchTerm)
                return []
            } else {
                console.log('not searching ', this.allKayaks)
                return this.allKayaks
            }
        },  
    },
    watch: {
        searchTerm(newValue) {
            console.log('search term ', newValue)
        }
    },
    data() {
        return {
            allKayaks: '',
            searchTerm: '',
        }
    },
    mounted() {
        console.log('display grid mounted')
        this.getAllKayaks()
    },
    methods: {
        async getAllKayaks() {
            this.allKayaks = _.flatten(await Kayak.get())
            // this.allKayaks = _.flatten(this.allKayaks)
            console.log('all kayaks', this.allKayaks)
        }
    }
}
</script>
