<script setup>

const props = defineProps({
  amounts: Object  
})

const emit = defineEmits(['fillForm'])

const fillForm = async () => emit('fillForm')
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
  
  
  
  
  
<div class="relative mb-3">  
  <input
    type="number"
    class="peer m-0 block h-[58px] w-full md:w-1/2 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-400 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"    
    placeholder=""
    v-model="amounts.usd"/>
  <label
    for="floatingInput"
    class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-gray-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
    >Saldo USD</label
  >
</div>
  
<div class="relative rounded w-full md:w-1/2 mb-3 bg-gray-100 p-1 pl-2 border border-solid text-left">  
  <label
    for="floatingInput"
    class="relative text-gray-500"
    >Pesos a recibir</label
  ><br>
  <span class="relative text-gray-700">$ {{amounts.pesos}} </span>
</div>   
<br>
 
  <button
    class="mt-2 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
    @click="fillForm"
    >
      Vender
    <i class="bx bx-chevron-right relative -right-2 text-3xl"></i>
  </button>
  
  </div>
  

  
  </div>
</template>
