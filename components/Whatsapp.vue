<script setup>
import {ref} from "vue"

const props = defineProps({
  amounts: Object  
}) 

//{
//      USDBalance: myInput.value
//      PesosToReceive: myComputed.value
////
  
const phone = '+5491173642809'
const myTextarea = ref("")

myTextarea.value= `Quiero vender ${props.amounts.USDBalance} dolares para recibir ${props.amounts.PesosToReceive} pesos.`


const enviar = () => {
  let mensaje = myTextarea.value
  if(mensaje.length > 0){
        
        if (!isNaN(phone)){
            window.location = "https://api.whatsapp.com/send?phone=" + phone + "&text=" + mensaje;
        }else{
            window.location = "https://api.whatsapp.com/send?text=" + mensaje;
        }
    }  
}
    
console.log(props.amounts)

</script>
<template>
  
  <div class="body py-5">
        <h1>Envío de mensajes de WhatsApp</h1>
        <div class="whatsapp">
           <div class="header rounded-t-lg">
                <div class="back">
                    <i class="fas fa-arrow-left"></i>
                </div>
                <div class="imagen">
                    <img src="../assets/img/telegram/avatar.png"> 
                </div>
                <div class="info">
                    <div class="tlf"><input type="text" name="telefono" value="+5491173642809"></div>
                    <div class="estado">en línea</div>
                </div>
                <div class="icons">
                    <i class="fas fa-phone-alt"></i>
                    <i class="fas fa-paperclip"></i>
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div class="conver rounded-b-lg">
                <div class="converMessage">
                    Hola !!
                    <br>
                    Qué quieres hacer ?? 😉
                </div>

                <div v-if="myTextarea" class="converMessageUser">
                    {{ myTextarea }}
                </div>
                <div class="message">
                    <textarea autofocus placeholder="Escribe un mensaje" v-model="myTextarea" rows="2"></textarea>
                    <img class="enviar" src="../assets/img/telegram/send.png" alt="" @click="enviar">
                </div>
            </div>
        </div>
        
        

    </div>
  
</template>

<style scoped>
*{
    font-family: 'Open Sans', sans-serif;
}
.body{
    background-color:#f0f0f0;
}
h1{
    text-align:center;
    color:white;
    text-shadow:1px 1px 1px black;
}
.whatsapp{
    display:flex;
    flex-direction:column;
    width:340px;
    margin: 0 auto;
}
.whatsapp > .header{
    border-top:10px solid #054D44;
    display:flex;
    flex-direction:row;
    background-color:#075E54;
    justify-content:space-between;
    color:white;
    align-items:center;
}
.header > *{
    padding:5px;
    box-sizing:border-box;
}
.header .imagen > img{
    border-radius:50%;
    width:30px;
}
.header .info{
    display:flex;
    flex-direction:column;
    color:white;
    flex-grow:2;
}
.header .info > .tlf > input{
    background-color:#075E54;
    border:none;
    color:white;
}
.header .info > .estado{
    font-size:0.8em;
}
.header > .icons > *{
    margin-left:5px;
    margin-right:5px;
}
.whatsapp .conver {
    background-image:url(../assets/img/telegram/wall.jpg);
    display:flex;flex-direction:column;
    justify-content:space-between;
    padding:10px;
    box-sizing:border-box;
    min-height:350px;
}
.conver > .converMessageUser{    
    background:#e1ffc7;
    align-self:flex-end;
    width:240px;
    min-height:30px;    
    padding: 8px;
    color: #000;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    margin: 8px 0;    
    border-radius: 5px 0px 5px 5px;
}
.conver > .converMessage{
    background:#ffffff;
    align-self:flex-start;
    width:240px;
    min-height:30px;    
    padding: 8px;
    color: #000;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    margin: 8px 0;    
    border-radius: 5px 0px 5px 5px;
}

.whatsapp > .conver > .message{
    display:flex;flex-direction:row;
    align-items:center; 
}
.message > textarea{
    padding:5px 20px;
    width:100%;
    margin-right:10px;
    border-radius:15px;
    background:white;
    border:none;
    height:75px;
    font-size:1em;
    /*resize: none;*/
    overflow:hidden;
    outline:none;
    box-shadow: 1px 1px 1px silver;
}
.message > .enviar{
    background:#075E54;
    width:40px;
    height:40px;
    color:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
}

footer{
    background:#075E54;
    padding:10px;
    box-sizing:border-box;
    color:white;
    margin-top:30px;
    width:100%;
    text-align:center;
}

footer > a{
    color:#d2e1ff;
    text-decoration:none;
}
footer > a:hover{
    text-decoration:underline;
}


</style>
