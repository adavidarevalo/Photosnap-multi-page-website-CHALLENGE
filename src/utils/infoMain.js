class infoMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.paragraphContent = this.getAttribute("paragraphContent");
  }
  static get observedAttributes() {
    return ["img", "title", "paragraphContent"];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "img") {
      this.img = newVal;
    };
    if (attr === "title") {
      this.price = newVal;
    }
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <section class="create">
         <picture>
          <img src="${this.img}">
         </picture>
         <div class="create-content">
           <h2>${this.title}</h2>
           <p>${this.paragraphContent}</p>
        </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
      <style>
      :host{
        --clr--white:#fff;
        --clr--black:#000;
      }
        section{
          display:block;
          background: var(--clr--black);
        }
        section picture{
          align-items: center;
          display:flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          max-width:100%;
        }
        img{
          width:100%;
          max-width: 900px;
          max-height: 410px;
          box-sizing: border-box;
        }
        div{
          padding: 60px 20px;
          color: var(--clr--white);
        }
        div h2{
          font-size: 2rem;
          line-height: 40px;
          margin-bottom: 20px;
        }
        div p {
          font-size: 1rem;
          line-height: 30px;
          margin-bottom: 20px;
        }
        @media(min-width: 768px){
          section{
            max-height:410px;
            display:grid;
            grid-template-columns: 1fr 1fr;
            }
          section picture{
            grid-area: 1 / 2;
            display: flex;
            align-items: center;
           }
          div{
          margin:0 auto;
          width: 70%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          }
        }
      </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("info-main", infoMain);