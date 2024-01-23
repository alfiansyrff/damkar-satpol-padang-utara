<script setup>
import { ref } from 'vue';
import VueFeather from 'vue-feather';

const show = ref(false);
</script>

<template>
  <!-- Dekstop -->
  <div class="navbar hidden md:flex justify-between bg-white text-slate-900">
    <div class="">
      <a class="btn btn-ghost text-xl">
        <img src="../../../public/logo.png" alt="logo" class="w-12 h-12" />
      </a>
    </div>
    <div class="">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a href="#home">Beranda</a>
        </li>
        <li>
          <a href="#aboutUs">Tentang Kami</a>
        </li>
        <li>
          <a href="#struktur">Struktur</a>
        </li>
        <li>
          <a href="#sejarah">Sejarah</a>
        </li>
      </ul>
    </div>
  </div>

  <!-- Mobile -->
  <div class="navbar flex md:hidden justify-between bg-white text-slate-900">
    <div class="">
      <a class="btn btn-ghost text-xl">
        <img src="../../../public/logo.png" alt="logo" class="w-12 h-12" />
      </a>
    </div>
    <div class="">
      <button @click="show = !show" class="btn btn-square btn-ghost">
        <VueFeather v-if="!show" type="menu" class="inline-block w-5 h-5 stroke-current" />
        <VueFeather v-if="show" type="x" class="inline-block w-5 h-5 stroke-current" />
      </button>
    </div>
  </div>

  <Transition>
    <div v-if="show" class="absolute md:hidden bg-gradient-to-tr w-full from-[#2C67F2]/90 to-[#597FD8]/95 min-h-screen">
      <ul class="text-xl text-center">
        <a href="#home" @click="show = !show">
          <li class="hover:bg-blue-500 py-8">Beranda</li>
        </a>
        <div class="w-full flex justify-center">
          <hr class="bg-slate-50 w-[90%]" />
        </div>
        <a href="#aboutUs" @click="show = !show">
          <li class="hover:bg-blue-500 py-8">Tentang Kami</li>
        </a>
        <div class="w-full flex justify-center">
          <hr class="bg-slate-50 w-[90%]" />
        </div>
        <a href="#struktur" @click="show = !show">
          <li class="hover:bg-blue-500 py-8">Struktur</li>
        </a>
        <div class="w-full flex justify-center">
          <hr class="bg-slate-50 w-[90%]" />
        </div>
        <a href="#sejarah" @click="show = !show">
          <li class="hover:bg-blue-500 py-8">Sejarah</li>
        </a>
      </ul>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transform: translateX(0);
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
</style>
