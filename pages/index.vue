<script setup>
import {ref, computed} from "vue"

const myInput = ref(1)

const myComputed = computed(()=>myInput.value*500)

</script>

<template>
  <main>
    <div>
      <div class="bg-gray-400">
  <span> Introduce tu monto aquí -> </span>
  <input type="text" v-model="myInput" /> <span> x 500 = </span>
  <span class="bg-white p-3"> {{myComputed}} </span>
  </div>
      <h1>Home</h1>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
    <img src="/qingbao-meng-01_igFr7hd4-unsplash.jpg" loading="lazy">
  </main>
</template>
