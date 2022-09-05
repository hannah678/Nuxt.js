<template>
<div class="container">
    <MyItem
        v-for="myRental in myRentals"
        :key="myRentals.id"
        :item="myRental"
    />
</div>
</template>
<script>
import { mapState } from 'vuex'
import MyItem from '../components/MyItem.vue'

export default{
    layout: "no-nav",
    computed: {
        ...mapState(["myRentals"])
    },
    components: { MyItem }
}
</script>

<style scoped>
    .container {
        padding: 5rem 0
    }
</style>