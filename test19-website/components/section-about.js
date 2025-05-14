class sectionAbout extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        
       <!-- MAP SECTION HTML GOES HERE -->
       <section id="about">
       <div class="container">

        <div class="row">

          <div class="one-half">

            <h2>About the NMA Student Show</h2>

            <p>This is the event website for the annual Kapi'olani Community College New Media Arts student show showcasing the demo reels and portfolio websites from graduating animation and interface design students. One of the key features of the event is the screening of the practicum animated short film. Enjoy!</p>

          </div>

        </div>

        <div class="row">

          <div class="one-half">

            <h2>Mahalo!</h2>
            <p>Thank you for joining us to celebrate the graduating NMA class of '25! Through trial and error, deadlines and critiques, and a lot of long nights - we also want to say a big thank you to the people who believed in&nbsp;us.</p>
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
            <p>Shout out to the team who helped make the student show happen! Special thanks to Chris Gargiulo, Melissa Lum, and David Efhan for helping us to code this&nbsp;website!</p>
            <ul>
              <li>Gabriella Abbey</li>
              <li>Emmanuel Correa</li>
              <li>Katheren Lam</li>
              <li>Emiri Miyaji</li>
              <li>Angelica Palilio</li>
              <li>Hanna Shibata</li>
            </ul>

            <p>And thanks to Michael Fiocco and Maya Bautista for being our emcees!</p>


          </div>

        </div>

            <h2>About KCC New Media Arts</h2>
            <p>New Media Arts (NMA) is a two year AS degree program located at Kapi&#699;olani Community College (KapCC) in Honolulu, Hawai&apos;i. The NMA mission is to prepare students for employment in the fields of Interface Design and&nbsp;Animation.</p>

            <a class="button" href="https://nma.kapiolani.hawaii.edu/index.html">Check out the NMA Website</a>
            <a class="button" href="https://www.kapiolani.hawaii.edu/">Go to the KCC Website</a>

        </div>
        </section>
        
      `;
      
    };
  };
  customElements.define("section-about", sectionAbout);