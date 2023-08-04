<script setup>
import {ref} from "vue"

//const config = useRuntimeConfig()
//useHead({title: "Cartrader",});

const {
  mobileMenu,
  triggerNavItem,
  triggerNavItemMobile  
} = useTriggerNav()

const selling = ref(false)

const amounts = ref({})

const sell = (payload) => {
  selling.value = true
  amounts.value = payload  
}
</script>

<template>
  <div class="scroll-smooth hover:scroll-auto">

  <div class="w-full z-50 top-0 py-3 sm:py-5  absolute">
  <div class="container flex items-center justify-between">
    <div>
      <a href="/">
        <img src="../assets/img/logo.svg" class="w-24 lg:w-48" alt="logo image" />
      </a>
    </div>
    <div class="hidden lg:block">
      <ul class="flex items-center">
        
        <li class="group pl-6">
          
          <span
            @click="triggerNavItem(800)"
            class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >About</span
          >
          
          <span
            class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>

        <li class="group pl-6">
          
          <NuxtLink
            to="/calculator"
            class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Calculadora</NuxtLink
          >
          
          <span
            class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li class="group pl-6">
          
          <span            
            @click="triggerNavItem(1300)"
            class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Services</span
          >
          
          <span
            class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li class="group pl-6">
          
          <span            
            @click="triggerNavItem(2300)"
            class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Portfolio</span
          >
          
          <span
            class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li class="group pl-6">
          
          <span
            @click="triggerNavItem(3370)"
            class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Clients</span
          >
          
          <span
            class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li class="group pl-6">
          
          <span
            @click="triggerNavItem(3750)"
            class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Work</span
          >
          
          <span
            class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li class="group pl-6">
          
          <span
            @click="triggerNavItem(4650)"            
            class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Statistics</span
          >
          
          <span
            class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li class="group pl-6">
          
          <span
            @click="triggerNavItem(5200)"
            class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Blog</span
          >
          
          <span
            class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
        <li class="group pl-6">
          
          <span
            @click="triggerNavItem(6000)"
            class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Contact</span
          >
          
          <span
            class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
        
      </ul>
    </div>
    <div class="block lg:hidden">
      <button @click="mobileMenu = true">
        <i class="bx bx-menu text-4xl text-white"></i>
      </button>
    </div>
  </div>
</div>



<div>
<div
  class="bg-[url('/assets/img/bg-hero.jpg')] relative bg-cover bg-center bg-no-repeat py-8"
>
  <!--div
    class="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"
  ></div-->
  
    <div
    class="absolute inset-0 z-20 bg-gradient-to-r from-stone-800 to-stone-900 opacity-75 bg-cover bg-center bg-no-repeat"
  ></div>



  <div
    class="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48"
  >
    <div class="flex flex-col items-center justify-center lg:flex-row">
      <div class="rounded-full border-8 border-stone-900 shadow-xl">
        <img
          src="/assets/img/blog-author.jpg"
          class="h-48 rounded-full sm:h-56"
          alt="author"
        />
      </div>
      <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
        <h1
          class="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl"
        >
          Hola soy Cley Vela!
        </h1>
        <div
          class="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start"
        >
          <div
            class="flex items-center justify-center pl-0 sm:justify-start md:pl-1"
          >
            <p class="font-body text-lg uppercase text-white">Vamos a conectar</p>
            <div class="hidden sm:block">
              <i class="bx bx-chevron-right text-3xl text-yellow"></i>
            </div>
          </div>
          <div
            class="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
          >
            <a href="/">
              <i
                class="bx bxl-facebook-square text-2xl text-white hover:text-yellow"
              ></i>
            </a>
            <a href="/" class="pl-4">
              <i
                class="bx bxl-twitter text-2xl text-white hover:text-yellow"
              ></i>
            </a>
            <a href="/" class="pl-4">
              <i
                class="bx bxl-dribbble text-2xl text-white hover:text-yellow"
              ></i>
            </a>
            <a href="/" class="pl-4">
              <i
                class="bx bxl-linkedin text-2xl text-white hover:text-yellow"
              ></i>
            </a>
            <a href="/" class="pl-4">
              <i
                class="bx bxl-instagram text-2xl text-white hover:text-yellow"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
      </div>


<div class="bg-grey-50" id="about">
  <HomeAbout />
</div>


<div
  class="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
  :class="{ 'opacity-100 pointer-events-auto': mobileMenu }"
>
  <div
    class="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
  >
    <button
      class="absolute top-0 right-0 mt-4 mr-4"
      @click="mobileMenu = false"
    >
      <img src="/assets/img/icon-close.svg" class="h-10 w-auto" alt="" />
    </button>

    <ul class="mt-8 flex flex-col">
      
      <li class="py-2">
        
        <span
          @click="triggerNavItem(600)"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >About</span
        >
        
      </li>
      
      <li class="py-2">
          
          <NuxtLink
            to="/calculator"
            class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Calculadora</NuxtLink
          >

      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerNavItem(1650)"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Services</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerNavItemMobile('#portfolio')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Portfolio</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerNavItemMobile('#clients')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Clients</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerNavItemMobile('#work')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Work</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerNavItemMobile('#statistics')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Statistics</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerNavItemMobile('#blog')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Blog</span
        >
        
      </li>
      
      <li class="py-2">
        
        <span
          @click="triggerNavItemMobile('#contact')"
          class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
          >Contact</span
        >
        
      </li>
      
    </ul>
  </div>
</div>

<div class="container py-16 md:py-20" id="services">
  <HomeServices />
</div>

<div class="container py-16 md:py-20" id="portfolio">
  <HomePortfolio />
</div>

<div class="bg-grey-50" id="clients">
  <HomeClients />
</div>

<div class="container py-16 md:py-20" id="work">
  <HomeWork />
</div>

<div
  class="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
  style="background-image: url(~assets/img/experience-figure.png)"
  id="statistics"
>
  <HomeStatistics />
</div>

<div class="bg-grey-50" id="blog">
  <HomeBlog />
</div>


<div class="container py-16 md:py-20" id="contact">
  <HomeContact />
</div>


<div
  class="bg-[url('/assets/img/map.png')] h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
></div>

<HomeKeep />


<LayoutFoot />

  </div>
  
  

</template>
  
<style>
:root #social-button {
  --vsc-bg-header: orange;
  --vsc-bg-footer: #fafafa;
  --vsc-text-color-header: yellow;
  --vsc-text-color-footer: green;
  --vsc-bg-button: pink;
  --vsc-text-color-button: purple;
  --vsc-outline-color: #333;
  --vsc-border-color-bottom-header: teal;
  --vsc-border-color-top-footer: #f3f3f3;
}
</style>
