<template>
    <div class="item-container">
        <NuxtLink :to="`/products/${item.id}`">
            <img :src="require(`@/assets/images/${item.image}`)" alt="">
            <div class="text-container">
                <h5>( {{item.range[0]}} ~ {{item.range[1]}} )</h5>
                <h4> {{item.title}} </h4>
                <p> {{item.description}} </p>
            </div>
        </NuxtLink>
    </div>
</template>
<script>
    export default {
        props: ['item']
    }
</script>

<style scoped>
    a{
        display: flex;
    }
    .item-container {
        display: flex;
        margin: 3rem 0
    }
    .text-container {
        padding: 0 1rem
    }
    img {
        width: 17.5rem;
        border-radius: 0.5rem;
        height: 14rem
    }
    p {
        font-size: 0.8rem;
        color: grey
    }
    h5{
        color:grey
    }
</style>