<template>
    <v-container>
        test
    </v-container>
</template>

<script>
import Kayak from '../models/Kayak'
import _ from 'lodash'
export default {
    props: {},
    name: 'DisplayGrid',
    data() {
        return {
            allKayaks: ''
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