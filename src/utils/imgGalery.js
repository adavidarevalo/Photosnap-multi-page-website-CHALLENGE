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
            <a href="#">READ STORY<i class="fas fa-arrow-right"></i></a>
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
          }
          a:hover,
          a:active{
            text-decoration: underline;
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