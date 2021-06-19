import "../utils/infoMain.js"
import "../utils/service.js"
import "../utils/invite"
const features = () =>{
  const view = `
  <info-main img="./assets/images/personWithCamera.jpg" title="FEATURES" paragraphContent="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."></info-main>
  <section class="features--service__cards">
    <service-card img="../assets/images/computer.svg" title="100% Responsive" paragraph="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."></service-card>
    <service-card img="../assets/images/infinity.svg" title="No Photo Upload Limit" paragraph="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."></service-card>
    <service-card img="../assets/images/social.svg" title="Available to Embed" paragraph="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."></service-card>
    <service-card img="../assets/images/domain.svg" title="Custom Domain" paragraph="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"></service-card>
    <service-card img="../assets/images/bootsYourExposure.svg" title="Boost Your Exposure" paragraph="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."></service-card>
    <service-card img="../assets/images/dragImage.svg" title="Drag & Drop Image" paragraph="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."></service-card>
  </section>
  <invite-banner></invite-banner>
  `
  return view
}

export default features();