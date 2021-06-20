class imgGalery extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.img = this.getAttribute("img")
        this.date = this.getAttribute("date")
        this.title = this.getAttribute("title")
        this.by = this.getAttribute("by")
    }
    getTemplate(){
        const template = document.createElement("template")
        template.innerHTML=`
        <div class="container">
          <div class="designed-content">
            <p>${this.date}</p>
            <h2>${this.title}</h2>
            <p>${this.by}</p>
            <hr>
            <a href="#">READ STORY <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></i></a>
          </div>
        </div>
        ${this.getStyle()}
        `
        return template;
    }
    getStyle(){
        return `
        <style>
          .container{
            background:url(${this.img});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 450px;
            position:relative;
            }
          .designed-content{
            padding-top: 180px;
            padding-inline:20px;
            color: #fff;
            position:absolute;
            bottom: 25px;
            width: 80%;
          }
          p, h2, p{
            margin-block:0px;
          }
          p{
            font-size: 0.8125rem;
          }
          h2{
            font-size: 1.125rem;
          }
          hr{
            border:.3px solid #fff;
          }
          a{
            text-decoration:none;
            color:#fff;
            font-size: 0.75rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          a:hover,
          a:active{
            text-decoration: underline;
          }
          svg{
            width: 15px;
          }
          }
        </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define("img-galery", imgGalery)