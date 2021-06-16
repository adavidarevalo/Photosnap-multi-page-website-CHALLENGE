class invite extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }
    getTemplate(){
        const template = document.createElement("template")
        template.innerHTML=`
        <section>
          <div>
            <h2>WE'RE IN BETA.</h2>
            <p>GET YOUR INVITE TODAY</p>
          </div>
          <a href="#">GET AN INVITE</a>
        </section>
        ${this.getStyle()}
        `
        return template;
    }
    getStyle(){
        return `
        <style>
          section{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            background-image: url("../assets/images/banner.jpg");
            padding-block:80px;
            background-repeat: no-repeat; 
            background-size: cover;
          }
          div{
            min-width:300px;
            width:90%;
            max-width:430px;
            margin:0 auto;
          }
          h2, p{
            font-size:2rem;
            color:white;
            margin-block:0px;
          }
          a{
            color: #fff;
            text-decoration: none; 
            font-size:1.2rem; 
            width:150px;
            margin-top:25px;
          }
          a:hover,
          a:active{
            color:#999;
            text-decoration: underline;
          }
          @media(min-width: 600px){
            div{
              margin:0px;
            }
            a{
              margin-top:0px;
            }
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
customElements.define("invite-banner", invite)