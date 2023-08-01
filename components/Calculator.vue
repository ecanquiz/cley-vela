<script setup>
import {ref, computed} from "vue"

const myInput = ref(10)

const myComputed = computed(()=>myInput.value*500)

const emit = defineEmits(['sell'])

const sell = async () => {
    emit('sell', {
      USDBalance: myInput.value,
      PesosToReceive: myComputed.value
    })
  }
</script>

<template>  
  <div class="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
  
  <div class="w-full text-center mx-auto lg:text-left">
  <div class="mb-2">
      <h2
        class="font-header text-3xl font-semibold uppercase text-primary sm:text-4xl lg:text-5xl"
      >
        ¿Cuántos pesos voy a recibir?
      </h2>
      <h4
        class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        ¡Clarita la cuenta!
      </h4>
      <p class="pt-6 font-body leading-relaxed text-grey-20">
      Ingresa la cantidad de saldo que quieras vender para saber cuantos pesos recibirás.
      </p>
  </div>
  
  
  
  
  
  <!--div class="relative mb-3">
  https://tailwind-elements.com/docs/standard/forms/inputs/
  <input
    type="email"
    class="peer m-0 block h-[58px] w-1/2 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
    id="floatingInput"
    placeholder="name@example.com" />
  <label
    for="floatingInput"
    class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Saldo USD</label
  >
</div-->
  
  
  
  
  
  
  <span> Saldo USD </span>
  <input type="number" v-model="myInput" />
  
  
  
  
  
  
  <br><br>
  <span> Pesos a recibir</span>  
  <span class="bg-gray-100 p-3 border ml-2">$ {{myComputed}} </span>
  
  <button
    class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
    @click="sell"
    >
      Vender
    <i class="bx bx-chevron-right relative -right-2 text-3xl"></i>
  </button>
  
  </div>
  

  
  </div>
</template>
