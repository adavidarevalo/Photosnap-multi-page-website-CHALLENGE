import "../utils/service";
const home = ()=>{
  const view=`
  <section class="create">
      <picture>
        <img src="./assets/images/personWhitCamera.jpg" alt="Person whit Camera" loading="lazy">
      </picture>
      <div class="create-content">
        <h2>CREATE AND SHARE YOUR PHOTO STORIES</h2>
        <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell
          stories and
          connect with others.</p>
        <a href="#">GET AN INVITE <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></a>
      </div>
    </section>
    <section class="stories">
      <picture>
        <img src="./assets/images/photoComputer.jpg" alt="Picture of Computer" loading="lazy">
      </picture>
      <div class="stories-content">
        <h2>BEAUTIFUL STORIES EVERY TIME</h2>
        <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and
          media from
          other networks. Then share your story with everyone.</p>
        <a href="#">VIEW THE STORIES <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14 dark-arrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></a>
      </div>
    </section>
    <section class="designed">
      <picture>
        <img src="./assets/images/menWhitCamera.jpg" alt="Men with Camera" loading="lazy">
      </picture>
      <div class="designed-content">
        <h2>DESIGNED FOR EVERYONE</h2>
        <p>Photosnap can help you create stories that resonate with your audience. Our tool is designed for
          photographers of all
          levels, brands, businesses you name it.</p>
        <a href="#">VIEW THE STORIES <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14 dark-arrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></a>
      </div>
    </section>
    <section class="card">
      <div class="mountain-card">
        <div class="container-card">
          <h3>The Mountains</h3>
          <p>by John Appleseed</p>
          <hr>
          <a href="#">Read Story <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></a>
        </div>
      </div>
      <div class="sunset-card">
        <div class="container-card">
          <h3>Sunset Cityscapes</h3>
          <p>by Benjamin Cruz</p>
          <hr>
          <a href="#">Read Story <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></a>
        </div>
      </div>
      <div class="person-card">
        <div class="container-card">
          <h3>18 Days Voyage</h3>
          <p>by Alexei Borodin</p>
          <hr>
          <a href="#">Read Story <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></a>
        </div>
      </div>
      <div class="architecture-card">
        <div class="container-card">
          <h3>Architecturals</h3>
          <p>by Samantha Brooke</p>
          <hr>
          <a href="#">Read Story <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></a>
        </div>
      </div>
    </section>
    <section class="info">
      <service-card img="./assets/images/computer.svg" title="100% Responsive" paragraph="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."></service-card>
      <service-card class="info--noLimit" img="./assets/images/infinity.svg" title="No Photo Upload Limit" paragraph="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one
      go."></service-card>
      <service-card img="./assets/images/social.svg" title="Available to Embed" paragraph="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."></service-card>
    </section>
  `
  return view;
}

export default home();