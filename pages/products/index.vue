<template>
    <div>
        <Nav/>
        <div class="container">
            <LargeCardDisplay
                v-for="cardInfo in largeCardInfo.slice(0,1)"
                :key="cardInfo.id"
                :cardsSection="cardInfo"
            />
            <SmallCardDisplay
                v-for="cardInfo in smallCardInfo"
                :key="cardInfo.id"
                :cardsSection="cardInfo"
            />
        </div>
    </div>
</template>
<script>
import {largeCardSections, smallCardSections } from "@/assets/data.js"
import Nav from "../../components/Nav.vue";

export default{
    data() {
        return {
            largeCardInfo: largeCardSections,
            smallCardInfo: smallCardSections
        };
    },
    components: { Nav }
}
</script>