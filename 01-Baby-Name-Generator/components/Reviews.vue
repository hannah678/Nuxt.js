<template>
    <div>
        <h3>Customer Reviews</h3>
        <div v-if="!$fetchState.pending">
            <ReviewCard
                v-for="reviewer in reviewers.results"
                :key="reviewer.login.uuid"
                :review="reviewer"
            />
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>
<script>
import ReviewCard from "./ReviewCard.vue";

export default{
    data() {
        return {
            reviewers: []
        };
    },
    async fetch() {
        this.reviewers = await fetch("https://randomuser.me/api/?results=5").then(res => res.json());
    },
    components: { ReviewCard }
}
</script>