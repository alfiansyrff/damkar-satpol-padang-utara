<template>
  <footer class="bg-gradient-to-br from-[#2C67F2] to-[#597FD8] text-base-content">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex flex-col lg:flex-row justify-around items-center">

      <div class="mb-6 lg:mb-0">
        <img src="../../../public/logo.png" alt="logo" class="w-20 h-20" />
      </div>

      <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div class="mb-8 lg:mb-0">
          <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigasi</h2>
          <ul class="text-white font-medium">
            <li class="mb-4">
              <a @click="scrollToSection('aboutUs')" class="cursor-pointer hover:underline">Tentang Kami</a>
            </li>
            <li class="mb-4">
              <a @click="scrollToSection('struktur')" class="hover:underline cursor-pointer select-none">Struktur</a>
            </li>
            <li>
              <a @click="scrollToSection('sejarah')" class="hover:underline cursor-pointer select-none">Sejarah</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4636039534603!2d99.6171810737946!3d1.4931297611009993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302c6b9be76022e3%3A0xcd8131183c8d016b!2sKantor%20Satuan%20Polisi%20Pamong%20Praja!5e0!3m2!1sen!2sid!4v1705942972773!5m2!1sen!2sid" width="300" height="200" class="w-full md:w-60 h-40 md:h-48" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>

    <!-- Separator Line -->
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-8 lg:mb-2" />

    <!-- Copyright Section -->
    <div class="text-sm text-white text-center py-2">
      © 2024 <a href="https://flowbite.com/" class="hover:underline cursor-pointer select-none">Kabupaten Padang Lawas Utara™</a>. All Rights Reserved.
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>
