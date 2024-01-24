<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const showLinmas = ref(false);
const showSatpol = ref(false);
const showDamkar = ref(false);
const shouldShowNavigation = ref(true);

const modules = [Keyboard, Pagination, Navigation];
const swiperInstance = ref(null);

const checkScreenWidth = () => {
  shouldShowNavigation.value = window.innerWidth >= 768; // Adjust the width based on your mobile breakpoint
};

onMounted(() => {
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenWidth);
});
</script>

<template>
  <div>
    <div>
      <h1 class="text-center text-4xl my-5 text-blue-700 font-semibold" id="sejarah" data-aos="zoom-up"
      data-aos-easing="ease-in">Sejarah</h1>
    </div>
    <div class="md:w-[70%] mx-auto w-[97%]"  data-aos="zoom-up"
      data-aos-easing="ease-in">
      <swiper
        ref="swiperInstance"
        :slidesPerView="1"
        :spaceBetween="30"
        :navigation="shouldShowNavigation"
        :keyboard="{
          enabled: true,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="swiper"
      >
        <!-- LINMAS -->
        <swiper-slide class="w-full flex justify-center items-center px-4">
          <div class="bg-slate-300/90 w-full md:w-[90%] py-8 my-4 rounded-lg shadow-lg md:flex">
            <img src="../../public/Linmas_Logo.png" alt="logo linmas" class="md:w-1/5 sm:w-1/2 md:mx-5 w-3/4 mx-auto h-40" />
            <div class="bg-white/50 pl-4 md:w-3/4 w-full shadow-lg rounded-l-xl">
              <h1 class="text-2xl font-semibold mt-10">Perlindungan Masyarakat</h1>
              <hr class="bg-slate-900 mt-6 h-[0.15rem] w-[95%]" />
              <p v-if="!showLinmas" class="w-[97%] text-justify md:text-base text-sm">Pertahanan Sipil atau yang kita kenal sebagai HANSIP ...</p>
              <div class="flex justify-end">
                <button v-if="!showLinmas" class="my-2 btn bg-blue-400 hover:bg-blue-600 text-white font-semibold border-none" @click="showLinmas = !showLinmas">Selengkapnya..</button>
              </div>
              <div v-if="showLinmas" class="text-justify w-[97%] md:text-base text-sm">
                Pertahanan Sipil atau yang kita kenal sebagai HANSIP merupakan salah satu komponen pendukung dalam konsep pertahanan negara. Pertahanan sipil dimulai dari jaman kolonial Belanda dan didirikan untuk menghadapi serangan dari
                Jepang.
                <br />
                <br />
                Hansip didirikan pada awalnya dengan nama LBD (Lucht Bescherming Dients) oleh Belanda, untuk menjadi tim reaksi cepat menginforrnasikan dan melindungi masyarakat dari serangan udara. LBD mempunyai struktur yang jelas dalam
                pemerintahan mulai dari pusat sampai daerah di bawah pejabat sipil. LBD dibawah pemerintah Belanda lebih bersifat defensif dan reaksional, ketika Jepang berkuasa pada tahun 1943, LBD dirubah menjadi Pertahanan Sipil (HANSIP)
                dan diarahkan umtuk pertahanan dan pengerahan semesta.
                <br /><br />
                Setelah Indonesia meraih kemerdekaan, HANSIP dilindungi payung hukum dibawah keputusan Wakil Menteri Pertama Urusan Pertahanan/Kemanan No. MI/A172/62 tanggal 19 April Tahun 1962 tentang Peraturan Pertahanan Sipil sampai
                dengan tahun 1972 ketika pembinaan Hansip diserahkan Menhamkam/Pangab kepada Mendagri yang dikukuhkan dengan kepres No. 55 Tahun 1972, dan peraturan ini dicabut ketika periode SBY atas rekomendasi Kemendagri
                <br />
                <br />
                HANSIP yang awalnya bergerak dalam kegiatan yang bersifat pertahanan dan keamanan berubah menjadi membantu dalam pengamanan lingkungan. Pada tahun 2002 HANSIP berubah menjadi LINMAS ( Perlindungan Masyarakat ) namun tupoksi
                nya tidak berubah. LINMAS sendiri tidak pernah mendapatkan pelatihan dasar militer sejak tahun 2004 pembinaan L1NMAS berada dibawah PEMDA melalui Satuan Pamong Praja (SATPOL PP) hal ini didasari UU 32 tahun 2004 yang
                menyatakan urusan wajib yang menjadi kewenangan Pemda Provinsi, Kabupaten/Kota, meliputi penyelenggaraan ketertiban umum dan ketentraman masyarakat termasuk di dalamnya perIindungan masyarakat.
                <br />
                <br />
                HANSIP yang berawal dari pertahanan melawan pendudukan jepang kini telah menjadi LINMAS yang lebih bersifat pengamanan lingkungan masyarakat, peran ini dapat lebih ditingkatkan dengan membekali LINMAS kemampuan dasar
                penanggulangan bencana, pengamanan lingkungan seperti TPS acara kemasyarakatan dan menjadi on site team setelah kejadiardperistiwa/bencana.
              </div>
              <div class="flex justify-end">
                <button v-if="showLinmas" class="btn bg-blue-400 hover:bg-blue-600 text-white font-semibold border-none" @click="showLinmas = !showLinmas">Tutup</button>
              </div>
            </div>
          </div>
        </swiper-slide>

        <!-- SATPOL -->
        <swiper-slide class="w-full flex justify-center items-center px-4">
          <div class="bg-slate-300/90 w-full md:w-[90%] py-8 my-4 rounded-lg shadow-lg md:flex">
            <img src="../../public/Satpol-PP-logo.png" alt="logo linmas" class="md:w-1/5 sm:w-1/2 md:mx-5 w-3/4 mx-auto h-40" />
            <div class="bg-white/50 pl-4 md:w-3/4 w-full shadow-lg rounded-l-xl">
              <h1 class="text-2xl font-semibold mt-10">Satuan Polisi Pamong Praja</h1>
              <hr class="bg-slate-900 mt-6 h-[0.15rem] w-[95%]" />
              <p v-if="!showSatpol" class="w-[97%] text-justify md:text-base text-sm">Satuan Polisi Pamong Praja (disingkat Satpol PP) adalah aparatur ...</p>
              <div class="flex justify-end">
                <button v-if="!showSatpol" class="my-2 btn bg-blue-400 hover:bg-blue-600 text-white font-semibold border-none" @click="showSatpol = !showSatpol">Selengkapnya..</button>
              </div>
              <div v-if="showSatpol" class="text-justify w-[97%] md:text-base text-sm">
                Satuan Polisi Pamong Praja (disingkat Satpol PP) adalah aparatur Pemerintah Daerah Provinsi maupun Kabupaten/kota yang bertujuan memelihara ketenteraman dan ketertiban umum serta menegakkan peraturan. Organisasi dan tata
                kerja Satuan Polisi Pamong Praja ditetapkan dengan peraturan undang-undang. Organisasi dan tata kerja Satuan Polisi Pamong Praja di atur dalam Peraturan Menteri Dalam Negeri dan atau ditetapkan dengan Peraturan Daerah.
                Secara struktur Organisasi Satpol PP dibawah Direktorat Jenderal Bina Administrasi Kewilayahan Kementerian Dalam Negeri, Saat ini Direktur Polisi Pamong Praja dan Perlindungan Masyarakat dipimpin Dr. Bernhard Eduard
                Rondonuwu, S.Sos, M.Si. <br />
                <br />
                Satpol PP berkedudukan di seluruh Daerah Provinsi dan Daerah Kabupaten/Kota di lndonesia.
                <br />
                <br />
                • Di Daerah Provinsi, Satuan Polisi Pamong Praja dipimpin oleh Kepala Satuan yang berada di bawah dan bertanggung jawab kepada Gubernur melalui Sekretaris Daerah.
                <br />
                <br />
                • Di Daerah Kabupaten/Kota, Satuan Polisi Pamong Praja dipimpin oleh Kepala Satuan yang berada di bawah dan bertanggung jawab kepada BupatilWali kota melalui Sekretaris Daerah.

                <br />
                <br />
                Satuan Polisi Pamong Praja didirikan di Yogyakarta pada tanggal 3 Maret 1950 moto Praja Wibawa, untuk mewadahi sebagian ketugasan pemerintah daerah. Sebenamya ketugasan ini telah dilaksanakan pemerintah sejak zaman kolonial.
                Sebelum menjadi Satuan Polisi Pamong Praja setelah proklamasi kemerdekaan di mana diawali dengan kondisi yang tidak stabil dan mengancam NKRI, dibentuklah Detasemen Polisi sebagai Penjaga Keamanan Kapanewon di Yogjakarta
                sesuai dengan Surat Perintah Jawatan Praja di Daerah Istimewa Yogyakarta untuk menjaga ketentraman dan ketertiban masyarakat. Pada tanggal 10 November 1948, lembaga ini berubah menjadi Detasemen Polisi Pamong Praja. Di Jawa
                dan Madura Satuan Polisi Pamong Praja dibentuk tanggal 3 Maret 1950. Inilah awal mula terbentuknya Satpol PP. dan oleh sebab itu, setiap tanggal 3 Maret ditetapkan sebagai Had Jadi Satuan Polisi Pamong Praja (Satpol PP) dan
                diperingati setiap tahun. Pada Tahun 1960, dimulai pembentukan Kesatuan Polisi Pamong Praja di luar Jawa dan Madura, dengan dukungan para petinggi militer /Angkatan Perang. Tahun 1962 namanya berubah menjadi Kesatuan Pagar
                Baya untuk membedakan dari korps Kepolisian Negara seperti dimaksud dalam UU No 13/1961 tentang Pokok-pokok Kepolisian. Tahun 1963 berubah nama Iagi menjadi Kesatuan Pagar Praja. lstilah Satpol PP mulai terkenal sejak
                pemberlakuan UU No 5/1974 tentang Pokok-pokok Pemerintahan di Daerah. Pada Pasal 86 (1) disebutkan, Satpol PP merupakan perangkat wilayah yang melaksanakan tugas dekonsentrasi.
              </div>
              <div class="flex justify-end">
                <button v-if="showSatpol" class="btn bg-blue-400 hover:bg-blue-600 text-white font-semibold border-none" @click="showSatpol = !showSatpol">Tutup</button>
              </div>
            </div>
          </div>
        </swiper-slide>

        <!-- DAMKAR -->
        <swiper-slide class="w-full flex justify-center items-center px-4">
          <div class="bg-slate-300/90 w-full md:w-[90%] py-8 my-4 rounded-lg shadow-lg md:flex">
            <img src="../../public/damkar.png" alt="logo linmas" class="md:w-1/5 sm:w-1/2 md:mx-5 w-3/4 mx-auto h-40" />
            <div class="bg-white/50 pl-4 shadow-lg rounded-l-xl md:w-3/4 w-full">
              <h1 class="text-2xl font-semibold mt-10">Pemadam Kebakaran</h1>
              <hr class="bg-slate-900 mt-6 h-[0.15rem] w-[95%]" />
              <p v-if="!showDamkar" class="w-[97%] text-justify md:text-base text-sm">Sejarah damkar yang dulu dikenal "Branwir" dari Bahasa Belanda ...</p>
              <div class="flex justify-end">
                <button v-if="!showDamkar" class="my-2 btn bg-blue-400 hover:bg-blue-600 text-white font-semibold border-none" @click="showDamkar = !showDamkar">Selengkapnya..</button>
              </div>

              <div v-if="showDamkar" class="text-justify w-[97%] md:text-base text-sm">
                Sejarah damkar yang dulu dikenal "Branwir" dari Bahasa Belanda : Brandweer bermula pada tahun 1873, dimana terjadi kebakaran besar di Kramat Kwitang, dan residen (sekarang Gubemur DKI Jakarta mengeluarkan peraturan
                (reglemet) pada tahun 1915 dengan nama Regiement op de Brandweer in de Afdeeling stad Vorsteden van Batavia. Suatu kejadian penting yang patut selalu diingat adalah peristiwa diberikannya suatu tanda penghargaan kepada
                Brandweer Batavia oleh mereka yang mengatasnamakan kelompok orang betawi. Tanda penghargaan tersebut diberikan dalam bentuk "Prasasti" pada tanggal 1 Maret 1929, bertuliskan "Tanda Peringatan Brandweer Batavia 1919-1929"
                tanda penghargaan tersebut diberikan sebagai wujud terimakasih atas dharma bakti para petugas pemadam kebakaran. <br />
                <br />
                Pencantuman angka 1919-1929 pada prasasti tersebut dianggap sebagai bukti otentik, maka kemudian tanggal 1 Maret 1919 ditetapkan sebagai tahun berdirinya organisasi Pemadam Kebakaran.
                <br />
                <br />
                Sehubungan dengan perkembangan dan kemajuan pembangunan Kota Semarang, maka Walikota Semarang bersama Dewan Perwakilan Rakyat Daerah Kotamadya Semarang membentuk Dinas Pemadam Kebakaran secara resmi pada tanggal 19 januari
                1989. Dalam Anggaran Dasar dan Anggaran Rumah Tangga Dinas Kebakaran memiliki Kedudukan Tugas, Fungsi, Kewenangan, Susunan dan Bagan Organisasi.
                <br />
                <br />
                Dinas Pemadam Kebakaran dalam babakan sejarah Kota Semarang sama tuanya dengan sejarah Pemerintahan Kota Semarang. Pada masa pemerintahan Hindia Belanda disebut dengan "Brandweer". Dengan perkembangan masyarakat dan
                pertumbuhan pembangunan menuntut adanya peran pemerintah dalam mengelola Unit Pemadam Kebakaran ini. Baru setelah adanya penyerahan sebagian urusan Pemerintah Pusat kepada daerah-daerah otonom, Kabupaten, Kota Besar dan
                Kecil di Jawa pada bidang Pekerjaan Umum ini, maka Pemerintah Kotamadua Semarang mengeluarkan Peraturan Daerah tanggal 31 Agustus 1971, dimana Unit Pemadam Kebakaran menjadi bagian Dinas Pekerjaan Umum.
                <br />
                <br />
                Unit Pemadam Kebakaran ini terus ditingkatkan mengikuti perkembangan dan kemajuan pembangunan yang dihadapi Kota Semarang. Karena adanya perkembangan dan kemajuan pembangunan Kota semakin pesat, maka Walikota Semarang
                mengajukan rencana peraturan Daerah pembentukan Dinas Pemadam Kebakaran kepada Dewan Perwakilan Rakyat Daerah Kota Semarang. Rencana Peraturan Daerah ini oleh Dewan Perwakilan Rakyat Daerah Kota Semarang disetujui dan
                disahkan menjadi peraturan daerah pada tanggal 19 Januari1989, yang dalam penjelasan umum daerah itu menyebutkan:
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
