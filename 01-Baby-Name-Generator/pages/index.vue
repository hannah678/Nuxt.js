<template>
  <!-- 컴포넌트들을 담을 페이지 -->
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
</template>

<script>
import { largeCardSections, smallCardSections } from '../assets/data';

export default{
    data() {
        return {
            largeCardInfo: largeCardSections,
            smallCardSections,
        };
    },
}
</script>