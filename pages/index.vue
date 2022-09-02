<template>
  <div>
    <Nav/>
    <div class="container">
      <Hero />
      <LargeCardDisplay
        v-for="cardInfo in largeCardInfo"
        :key="cardInfo.id"
        :cardsSection="cardInfo" 
      />
      <SmallCardDisplay
        v-for="cardInfo in smallCardSections"
        :key="cardInfo.id"
        :cardsSection="cardInfo" 
      />
    </div>
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from '../assets/data';
import SmallCardDisplay from '../components/SmallCardDisplay.vue';

export default{
    data() {
        return {
            largeCardInfo: largeCardSections,
            smallCardSections,
        };
    },
    components: { SmallCardDisplay }
}
</script>