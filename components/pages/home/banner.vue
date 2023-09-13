<template>
  <div class="banner-section">
    <div id="banner-section__list" v-swiper="swiperOptions" class="banner-section__list">
      <div class="swiper-wrapper">
        <div
          v-for="(banner, index) in listBanners"
          :key="index"
          class="swiper-slide container"
        >
          <div class="content">
            <span>our special dish</span>
            <h3>spicy noodles</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, esse? Veniam, ratione?</p>
            <baseButton>order now</baseButton>
          </div>
          <div class="image">
            <img :src="require(`@/static/images/${banner.image}.png`)" alt="">
          </div>
        </div>
      </div>
      <div slot="pagination" class="swiper-pagination swiper-pagination-bullets" />
    </div>
  </div>
</template>

<script>
import { HOT_BANNERS } from '@/contains/banner.js'
import baseButton from '@/components/button/base-button.vue'

export default {
  name: 'BannerSection',
  components: {
    baseButton
  },

  data () {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        clickable: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      },
      listBanners: HOT_BANNERS
    }
  }
}
</script>

<style lang="scss" scoped>

.banner-section {
  padding: 2rem 9%;

  &__list {
    .container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
      padding-top: 9rem;

      .content {
        flex: 1 1 45rem;

        span {
          color: var(--green);
          font-size:2.5rem;
        }

        h3 {
          color: var(--black);
          font-size:7rem;
        }

        p {
          color: var(--light-color);
          font-size:2.2rem;
          padding: .5rem 0;
          line-height: 1.5;
        }
      }

      .image {
        flex: 1 1 45rem;

        img {
          width: 100%;
        }
      }
    }
  }
}

::v-deep .swiper-pagination-bullets {
  bottom: 5px;
  left: 0;
  .swiper-pagination-bullet-custom {
    width: 23px;
    height: 1px;
    opacity: 1;
    transform-origin: bottom;
    margin: 0;
    &.swiper-pagination-bullet-active {
      height: 2px;
      border-radius: 100px;
    }
  }
}
</style>
