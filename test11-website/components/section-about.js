class sectionAbout extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        
       <!-- MAP SECTION HTML GOES HERE -->
       <section id="about">
       <div class="container">

        <div class="row">

          <div class="one-half">

            <h2>Thank you!</h2>
            <p>Through trial and error, deadlines and critiques, and a lot of long nights - we want to say a big thank you to the people who believed in us.</p>
            <ul>
                <li>Adam Moura</li>
                <li>Emily Moody</li>
                <li>Jake Shimabuku</li>
                <li>Chris Gargiulo</li>
                <li>Joe Mahi</li>
                <li>Marcie Moura</li>
                <li>Chris Magpoc</li>
                <li>Melissa Lum</li>
                <li>Tyler Eng</li>
                <li>Jared Matsushige</li>
                <li>Jae Stableford</li>
                <li>Steve Harris</li>
                <li>Sarah Bremser</li>
                <li>Chris Lee</li>
            </ul>

          </div>

          <div class="one-half">

            <h2>Creators</h2>
            <p>Shout out to the team who helped make the student show happen! Special thanks to Chris Gargulio who helped us to code this website!</p>
            <ul>
              <li>Gabriella Abbey</li>
              <li>Emmanuel Correa</li>
              <li>Katheren Lam</li>
              <li>Angelica Palilio</li>
              <li>Hanna Shibata</li>
              <li>Emiri Miyaji</li>
            </ul>


          </div>

        </div>

            <h2>About New Media Arts @KapCC</h2>
            <p>New Media Arts (NMA) is a two year AS degree program located at Kapi‘olani Community College (KapCC) in Honolulu, Hawai‘i. The NMA mission is to prepare students for employment in the fields of Interface Design and Animation.</p>

            <a class="button" href="https://nma.kapiolani.hawaii.edu/index.html">Visit NMA Website</a>
            <a class="button" href="https://www.kapiolani.hawaii.edu/">Visit KCC Website</a>

        </div>
        </section>
        
      `;
      
    };
  };
  customElements.define("section-about", sectionAbout);