import home from "../page/home"
import galery from "../page/galery"
import features from "../page/features"

const mainContain = document.querySelector("#mainContent") 

const route = async(name) =>{
  mainContain.innerHTML= await galery;
  
}
export default route;