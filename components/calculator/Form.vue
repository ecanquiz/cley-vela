<template>
  <div class="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
    <div class="mb-2">
      <h2
        class="font-header text-4xl font-semibold uppercase text-primary sm:text-4xl lg:text-4xl"
      >       
        Completa el formulario y cambia USD a Pesos Argentinos en menos de 30'
      </h2>
  
  
  
<div class="p-5 m-auto w-full">  
  <form @submit.prevent="submit">
  
  
    <div class="relative z-0 w-full mb-6 group py-2">
      <input type="text" name="floating_email" id="floating_email" class="form-input peer" placeholder=" " required />
      <label for="floating_email" class="form-label">Nombre completo</label>
    </div>

    <div class="relative z-0 w-full mb-6 group py-2">
      <input type="text" name="floating_email" id="floating_email" class="form-input peer" placeholder=" " required />
      <label for="floating_email" class="form-label">Celular</label>
    </div>  
  
    <div class="relative z-0 w-full mb-6 group py-2">
      <input type="number" name="floating_email" id="floating_email" class="form-input peer" placeholder=" " required />
      <label for="floating_email" class="form-label">Saldo USDT</label>
    </div>

    <div class="relative z-0 w-full mb-6 group py-2">
      <input type="text" name="floating_email" id="floating_email" class="form-input peer" placeholder=" " required />
      <label for="floating_email" class="form-label">Pesos a Recibir</label>
    </div>

    <button
    class="mt-2 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
    @click="sell"
    >
      Vender
    <i class="bx bx-chevron-right relative -right-2 text-3xl"></i>    
  </button>
  <span class="text-xs text-stone-900">Iniciaras un chat Whatsapp</span>
</form>
  
</div>


  </div>
</div>
  
  

</template>

<style scoped>
.form-label {
  @apply pl-2 peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6;
}
.form-input {
 @apply w-5/6 rounded block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 border border-2; 
}
</style>
