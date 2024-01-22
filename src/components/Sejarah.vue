<template>
  <div>
    <div>
      <h1 class="text-center text-4xl font-semibold" id="sejarah">Sejarah</h1>
    </div>
    <div class="md:w-[60%] mx-auto w-[95%]">
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :navigation="true"
        :keyboard="{
          enabled: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="swiper"
      >
        <swiper-slide class="w-full"> asdsad</swiper-slide>
        <swiper-slide class="w-full bg-red-600">sadad </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<!-- Initialize Swiper -->
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Keyboard, Pagination, Navigation],
    };
  },
};
</script>
