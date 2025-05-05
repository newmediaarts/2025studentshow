class sectionMap extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
     <!-- MAP SECTION HTML GOES HERE -->
     <section id="map">

            [ map goes here ]

            [ directions go here ]

        </section>
      
    `;
    
  };
};
customElements.define("section-map", sectionMap);