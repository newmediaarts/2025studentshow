class sectionMap extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
      <!-- MAP SECTION HTML GOES HERE -->
      <section id="map">
      <div class="container">
      <div class="container">
        <h2 class="hidden">Location</h2>
        <div class="row">

          <div class="one-half">
            <img src="img/campusmap.svg" alt="Map of KCC" width="1280" height="1280">
          </div>

          <div class="one-half">
            <h3>Kapi&lsquo;olani Community College</h3>
            <address>
              <a href="http://maps.apple.com/?q=Kapiolani+Community+College">
                4303 Diamond Head Road <br>
                Honolulu, Hawai&lsquo;i 96816</a>
            </address>
            <p>The event is located inside of the &lsquo;Ōhi&lsquo;a&nbsp;cafeteria.</p>
            <p>General parking can be found in Lot C and accessible parking is available on the lane
              south side of the &lsquo;Ōhi&lsquo;a cafeteria.</p>
            <a href="http://maps.apple.com/?q=Kapiolani+Community+College" class="button">View Map</a>

          </div>

      </div>
      </section>
      
    `;
    
  };
};
customElements.define("section-map", sectionMap);