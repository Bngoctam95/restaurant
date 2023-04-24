<template>
  <div>
    <BannerSection />
    <DishesSection />
    <AboutSection />
    <MenuSection />
    <ReviewSection />
    <OrderSection />
  </div>
</template>

<script>
import BannerSection from '@/components/pages/home/banner'
import DishesSection from '@/components/pages/home/dishes'
import AboutSection from '@/components/pages/home/about'
import MenuSection from '@/components/pages/home/menu'
import ReviewSection from '@/components/pages/home/review'
import OrderSection from '@/components/pages/home/order'

export default {
  name: 'HomePage',
  components: {
    BannerSection,
    DishesSection,
    AboutSection,
    MenuSection,
    ReviewSection,
    OrderSection
  }
}
</script>

<style lang="scss" scoped>

</style>
