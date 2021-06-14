const home = ()=>{
  const view=`
  <section class="create">
      <picture>
        <img src="./assets/images/personWhitCamera.jpg" alt="Person whit Camera">
      </picture>
      <div class="create-content">
        <h2>CREATE AND SHARE YOUR PHOTO STORIES</h2>
        <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell
          stories and
          connect with others.</p>
        <a href="#">GET AN INVITE <i class="fas fa-arrow-right"></i></a>
      </div>
    </section>
    <section class="stories">
      <picture>
        <img src="./assets/images/photoComputer.jpg" alt="Picture of Computer">
      </picture>
      <div class="stories-content">
        <h2>BEAUTIFUL STORIES EVERY TIME</h2>
        <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and
          media from
          other networks. Then share your story with everyone.</p>
        <a href="#">VIEW THE STORIES <i class="fas fa-arrow-right"></i></a>
      </div>
    </section>
    <section class="designed">
      <picture>
        <img src="./assets/images/menWhitCamera.jpg" alt="Men with Camera">
      </picture>
      <div class="designed-content">
        <h2>DESIGNED FOR EVERYONE</h2>
        <p>Photosnap can help you create stories that resonate with your audience. Our tool is designed for
          photographers of all
          levels, brands, businesses you name it.</p>
        <a href="#">VIEW THE STORIES<i class="fas fa-arrow-right"></i></a>
      </div>
    </section>
    <section class="card">
      <div class="mountain-card">
        <div class="container-card">
          <h3>The Mountains</h3>
          <p>by John Appleseed</p>
          <hr>
          <a href="#">Read Story<i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="sunset-card">
        <div class="container-card">
          <h3>Sunset Cityscapes</h3>
          <p>by Benjamin Cruz</p>
          <hr>
          <a href="#">Read Story<i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="person-card">
        <div class="container-card">
          <h3>18 Days Voyage</h3>
          <p>by Alexei Borodin</p>
          <hr>
          <a href="#">Read Story<i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="architecture-card">
        <div class="container-card">
          <h3>Architecturals</h3>
          <p>by Samantha Brooke</p>
          <hr>
          <a href="#">Read Story<i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
    <section class="info">
      <div>
        <img src="./assets/images/computer.svg" alt="Computer">
        <h3>100% Responsive</h3>
        <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.
        </p>
      </div>
      <div class="info-infinity">
        <img src="./assets/images/infinity.svg" alt="Infinity">
        <h3>No Photo Upload Limit</h3>
        <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one
          go.
        </p>
      </div>
      <div>
        <img src="./assets/images/social.svg" alt="Social Media">
        <h3>Available to Embed</h3>
        <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.
        </p>
      </div>
    </section>
  `
  return view;
}

export default home();