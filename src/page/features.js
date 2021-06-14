import "../utils/infoMain.js"
import "../utils/service.js"
import "../utils/invite"
const features = () =>{
  const view = `
  <info-main img="./assets/images/personWithCamera.jpg" title="FEATURES" paragraphContent="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."></info-main>
  <service-card img="https://image.shutterstock.com/image-photo/exterior-colums-west-front-historic-260nw-1763389778.jpg" title="David Arevalo" paragraph="Hola Mundo"></service-card>
  <invite-banner></invite-banner>
  `
  return view
}

export default features();