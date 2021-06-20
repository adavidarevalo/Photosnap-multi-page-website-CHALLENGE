import "./style.css";
import home from "./page/home";
import galery from "./page/galery"
import features from "./page/features"
import pricing from "./page/pricing"
import "./utils/infoMain.js";
const mainContain = document.querySelector("#mainContent") 

//header Menu
document.getElementById("buttonMenu").addEventListener("click", ()=>{
  document.querySelector("#headerNav").classList.toggle("display-None")
})

//homepage
document.addEventListener("DOMContentLoaded", ()=>{
  mainContain.innerHTML= home ;
})


//STORIES
window.addEventListener("click", e=>{
  pages(e)
})
const pages = async(e) =>{
  if(e.target.classList.contains("STORIES")){
    console.log(galery)
    mainContain.innerHTML= await galery;
  }
  if(e.target.classList.contains("FEATURES")){
    mainContain.innerHTML= features ;
  }
  if(e.target.classList.contains("PRICING")){
    mainContain.innerHTML= pricing;
  }
  if(e.target.classList.contains("HOME")){
    mainContain.innerHTML= home;
  }
  //switch picing
  if(e.target.classList.contains("switch")){
    paymentSwitch () 
  }
}

//switch picing function

function paymentSwitch () {
  const innerCircle = document.querySelector(".inner-circle") 
  const pricingConstBasic = document.querySelector("#pricing--const__Basic")
  const pricingConstPro = document.querySelector("#pricing--const__Pro")
  const pricingConstBusiness= document.querySelector("#pricing--const__Business")
    innerCircle.classList.toggle("active")
    if(pricingConstBasic.innerHTML == 19.00){
      pricingConstBasic.innerHTML= "190.00";
      pricingConstPro.innerHTML = "390.00";
      pricingConstBusiness.innerHTML="990.00";
    } else{
      pricingConstBasic.innerHTML= "19.00";
      pricingConstPro.innerHTML = "39.00";
      pricingConstBusiness.innerHTML="99.00";
    }
}