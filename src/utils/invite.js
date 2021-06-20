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
          <a href="#">GET AN INVITE <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></a>
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
            width:165px;
            margin-top:25px;
            display:flex;
          }
          svg{
            width:15px;
            margin-left: 10px;
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