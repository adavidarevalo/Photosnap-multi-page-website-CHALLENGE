import "../utils/imgGalery"

const galery = async() =>{
  let galeryImg;
  try{
    const res= await fetch("../assets/api/api.json")
    const data = await res.json();
    galeryImg=data;
  }
  catch (error){
    console.log("error:", error)
  }
  console.log(galeryImg)
  const view = `
  <section class="galery--principal">
  <div>
    <p>Last month´s featured story</p>
    <h2>Hazy full moon of appalachia</h2>
    <p>March 2nd 2020 <span>by John Appleseed</span></p>
    <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains", especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
  </div>
  </section>
  <section class="galery--content__img">
  ${galeryImg.map(character =>`
  <article>
  <img-galery img="${character.link}" date="${character.date}" title="${character.title}" by="${character.by}"></img-galery>
  </article>
  `).join(" ")}
  </section>
  <section class="main--galery">
  </section>
  `
  return view;
}

export default galery();