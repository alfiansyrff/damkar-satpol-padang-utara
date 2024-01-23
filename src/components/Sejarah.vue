<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';

const showLinmas = ref(false);
const showSatpol = ref(false);
const showDamkar = ref(false);

const modules = [Autoplay, Keyboard, Pagination, Navigation];
const swiperInstance = ref(null);
</script>

<template>
  <div>
    <div>
      <h1 class="text-center text-4xl font-semibold" id="sejarah">Sejarah</h1>
    </div>
    <div class="md:w-[70%] mx-auto w-[95%]">
      <swiper
        ref="swiperInstance"
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
        <!-- LINMAS -->
        <swiper-slide class="w-full flex justify-center items-center px-4">
          <div class="bg-slate-300/90 w-[90%] py-8 my-4 rounded-lg shadow-lg flex">
            <img src="../../public/Linmas_Logo.png" alt="logo linmas" class="w-1/5 mx-5 h-40" />
            <div class="bg-white/50 pl-4 w-3/4 shadow-lg rounded-l-xl">
              <h1 class="text-2xl font-semibold mt-10">Perlindungan Masyarakat</h1>
              <hr class="bg-slate-900 mt-6 h-[0.15rem] w-[95%]" />
              <p v-if="!showLinmas" class="w-[97%] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nihil? ...</p>
              <div class="flex justify-end">
                <button v-if="!showLinmas" class="my-2 btn bg-blue-400 hover:bg-blue-600 text-white font-semibold border-none" @click="showLinmas = !showLinmas">Read more..</button>
              </div>
              <div v-if="showLinmas" class="text-justify w-[97%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro, ducimus quos nobis est omnis repellat nisi reprehenderit dignissimos numquam nam. Ipsum molestiae nemo nesciunt non quos! Veniam odio reiciendis, a
                aspernatur repellendus quibusdam vel maiores, atque labore culpa consequatur, eius aliquid error minus praesentium blanditiis sequi ipsum? Modi, error.
              </div>
              <div class="flex justify-end">
                <button v-if="showLinmas" class="btn bg-blue-400 hover:bg-blue-600 text-white font-semibold border-none" @click="showLinmas = !showLinmas">Tutup</button>
              </div>
            </div>
          </div>
        </swiper-slide>

        <!-- SATPOL -->
        <swiper-slide class="w-full flex justify-center items-center px-4">
          <div class="bg-slate-300/90 w-[90%] py-8 my-4 rounded-lg shadow-lg flex">
            <img src="../../public/Satpol-PP-logo.png" alt="logo linmas" class="w-1/4 h-40" />
            <div class="bg-white/50 pl-4 w-3/4 shadow-lg rounded-l-xl">
              <h1 class="text-2xl font-semibold mt-10">Satuan Polisi Pamong Praja</h1>
              <hr class="bg-slate-900 mt-6 h-[0.15rem] w-[95%]" />
              <p v-if="!showSatpol" class="w-[97%] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nihil? ...</p>
              <div class="flex justify-end">
                <button v-if="!showSatpol" class="my-2 btn bg-blue-400 hover:bg-blue-600 text-white font-semibold border-none" @click="showSatpol = !showSatpol">Read more..</button>
              </div>
              <div v-if="showSatpol" class="text-justify w-[97%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro, ducimus quos nobis est omnis repellat nisi reprehenderit dignissimos numquam nam. Ipsum molestiae nemo nesciunt non quos! Veniam odio reiciendis, a
                aspernatur repellendus quibusdam vel maiores, atque labore culpa consequatur, eius aliquid error minus praesentium blanditiis sequi ipsum? Modi, error.
              </div>
              <div class="flex justify-end">
                <button v-if="showSatpol" class="btn bg-blue-400 hover:bg-blue-600 text-white font-semibold border-none" @click="showSatpol = !showSatpol">Tutup</button>
              </div>
            </div>
          </div>
        </swiper-slide>

        <!-- DAMKAR -->
        <swiper-slide class="w-full flex justify-center items-center px-4">
          <div class="bg-slate-300/90 w-[90%] py-8 my-4 rounded-lg shadow-lg flex">
            <img src="../../public/damkar.png" alt="logo linmas" class="w-1/4 h-40" />
            <div class="bg-white/50 pl-4 shadow-lg rounded-l-xl w-3/4">
              <h1 class="text-2xl font-semibold mt-10">Pemadam Kebakaran</h1>
              <hr class="bg-slate-900 mt-6 h-[0.15rem] w-[95%]" />
              <p v-if="!showDamkar" class="w-[97%] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nihil? ...</p>
              <div class="flex justify-end">
                <button v-if="!showDamkar" class="my-2 btn bg-blue-400 hover:bg-blue-600 text-white font-semibold border-none" @click="showDamkar = !showDamkar">Read more..</button>
              </div>

              <div v-if="showDamkar" class="text-justify w-[97%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro, ducimus quos nobis est omnis repellat nisi reprehenderit dignissimos numquam nam. Ipsum molestiae nemo nesciunt non quos! Veniam odio reiciendis, a
                aspernatur repellendus quibusdam vel maiores, atque labore culpa consequatur, eius aliquid error minus praesentium blanditiis sequi ipsum? Modi, error.
              </div>
              <div class="flex justify-end">
                <button v-if="showDamkar" class="btn bg-blue-400 hover:bg-blue-600 text-white font-semibold border-none" @click="showDamkar = !showDamkar">Tutup</button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<!-- Initialize Swiper
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
</script> -->
