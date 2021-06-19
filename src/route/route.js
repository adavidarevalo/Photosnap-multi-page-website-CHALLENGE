import home from "../page/home"
import galery from "../page/galery"
import features from "../page/features"
import pricing from "../page/pricing"

const mainContain = document.querySelector("#mainContent") 

const route = async(name) =>{
  mainContain.innerHTML= await pricing;
}
export default route;