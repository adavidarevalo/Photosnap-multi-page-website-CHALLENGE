const galeryInfo = {
  1:{
    data: "April 16th 2020",
    title: "The Mountains",
    by: "by John Appleseed",
  },
  2:{
    data: "April 14th 2020",
    title: "Sunset Cityscapes",
    by: "by Benjamin Cruz",
  },
  3:{
    data: "April 11th 2020",
    title: "18 Days Voyage",
    by: "by Alexei Borodin",
  },
  4:{
    data: "April 9th 2020",
    title: "Architecturals",
    by: "by Samantha Brooke",
  },
  5:{
    data: "April 7th 2020",
    title: "World Tour 2019",
    by: "by Timothy Wagner",
  },
  6:{
    data: "April 3rd 2020",
    title: "Unforeseen Corners",
    by: "by William Malcolm",
  },
  7:{
    data: "March 29th 2020",
    title: "King on Africa: Part II",
    by: "by Tim Hillenburg",
  },
  8:{
    data: "March 21st 2020",
    title: "The trip to Nowhere",
    by: "by Timothy Wagner",
  },
  9:{
    data: "March 19th 2020",
    title: "Rage of The Sea",
    by: "by Mohammed Abdul",
  },
  10:{
    data: "March 16th 2020",
    title: "Running Free",
    by: "by Michelle",
  },
  11:{
    data: "March 11th 2020",
    title: "Behind the Waves",
    by: "by Lamarr Wilson",
  },
  12:{
    data: "March 9th 2020",
    title: "Calm Waters",
    by: "by Samantha Brooke",
  },
  13:{
    data: "March 5th 2020",
    title: "The Milky Way",
    by: "by Benjamin Cruz",
  },
  14:{
    data: "March 4th 2020",
    title: "Night at The Dark Forest",
    by: "by Mohammed Abdul",
  },
  15:{
    data: "March 1st 2020",
    title: "Somwarpet’s Beauty",
    by: "by Michelle",
  },
  16:{
    data: "February 25th 2020",
    title: "Land of Dreams",
    by: "by William Malcolm",
  }
}

const galery = () =>{
  const view = `
  <section class="galery--principal">
  <div>
    <p>Last month´s featured story</p>
    <h2>Hazy full moon of appalachia</h2>
    <p>March 2nd 2020 <span>by John Appleseed</span></p>
    <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains", especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
  </div>
  <a href="#">Read the story<i class="fas fa-arrow-right"></i></a>
  </section>
  <section class="main--galery">
  </section>
  `
  console.log(galeryInfo)
  return view;
}

export default galery();