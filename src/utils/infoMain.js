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
          display:grid;
          grid-template-columns: auto auto;
          grid-template-rows: auto;
          background: var(--clr--black);
        }
        img{
          width:100%;
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