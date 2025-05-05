class sectionAbout extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        
       <!-- MAP SECTION HTML GOES HERE -->
       <section id="about">

            [ about goes here ]

        </section>
        
      `;
      
    };
  };
  customElements.define("section-about", sectionAbout);