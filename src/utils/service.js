class service extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.img= this.getAttribute("img")
        this.title= this.getAttribute("title")
        this.paragraph= this.getAttribute("paragraph")
    }
    getTemplate(){
        const template = document.createElement("template")
        template.innerHTML=`
        <div>
          <img src="${this.img}" loading="lazy">
          <h2>${this.title}</h2>
          <p>${this.paragraph}</p>
        </div>
        ${this.getStyle()}
        `
        return template;
    }
    getStyle(){
        return `
        <style>
          div{
            max-width: 300px;
            text-align: center;
            margin-inline: 25px;
            padding: 60px 20px;
          }
          img{
            margin-bottom: 50px;
          }
          h2{
            margin-bottom: 20px;
          }
          p{
            color: #000;
            line-height: 20px;
            font-size: 1rem;
          }
        </style>
        `;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}
customElements.define("service-card", service)