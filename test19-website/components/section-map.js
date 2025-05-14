class sectionMap extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
      <!-- MAP SECTION HTML GOES HERE -->
      <section id="map">
      <div class="container">
        <div class="row swapped">

          <div class="one-half">
            <h2 class="hide-visuallyx">Event Info &amp; Directions</h2>
            <h3>Kapi&lsquo;olani Community College</h3>
            <address>
              <a href="http://maps.apple.com/?q=Kapiolani+Community+College">
                4303 Diamond Head Road <br>
                Honolulu, Hawai&lsquo;i 96816</a>
            </address>
            <p>The event takes place between 5&ndash;7pm inside of the &lsquo;Ōhi&lsquo;a&nbsp;cafeteria.</p>
            <p>General parking can be found in Lot C and accessible parking is available on the lane
              south side of the &lsquo;Ōhi&lsquo;a cafeteria.</p>
            <a href="http://maps.apple.com/?q=Kapiolani+Community+College" class="button">View Campus Map</a>

          </div>

          <div class="one-half">
            <a href="http://maps.apple.com/?q=Kapiolani+Community+College"><img src="img/campusmap.svg" alt="Map of KCC" width="1280" height="1280"></a>
          </div>

        </div>
      </div>
      </section>
      
    `;
    
  };
};
customElements.define("section-map", sectionMap);