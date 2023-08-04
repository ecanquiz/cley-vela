import {ref} from "vue"

export default () => {

  const mobileMenu = ref(false)

  const triggerNavItem = (num = 100)=>{
  console.log(num)
    window.scrollTo({
      top: num,
      //left: 100,
      behavior: "smooth",
    })
    mobileMenu.value = false;
  };

  const triggerNavItemMobile = (id) => {
    mobileMenu.value = false;
    triggerNavItem(id)
  }

  return {
    mobileMenu,
    triggerNavItem,
    triggerNavItemMobile  
  }
}
