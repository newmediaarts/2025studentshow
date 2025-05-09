class sectionMap extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
      <!-- MAP SECTION HTML GOES HERE -->
      <section id="map">
      <div class="container">

            [ map goes here ]

            [ directions go here ]
      </div>
      </section>
      
    `;
    
  };
};
customElements.define("section-map", sectionMap);