class siteHeaderSub extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        
        <!-- COMPONENT HTML GOES HERE -->
        <header class="site-header">
          <div id="site-logo">
            <a href="../index.html">
                <svg class="nma-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 591 174">
                    <path class="bg-green" d="M451,87v87h87.57l-87.57-87Z" />
                    <path class="bg-green" d="M208,174h175.14l-87.57-87-87.57,87Z" />
                    <path class="bg-green" d="M140,87V0H52.42l87.57,87Z" />
                    <path class="bg-black" d="M538.58,174h52.42L415.86,0v174h35.15v-87l87.57,87Z" />
                    <path class="bg-black" d="M295.5,87l87.57,87V0l-87.57,87Z" />
                    <path class="bg-magenta" d="M207.93,0v174l87.57-87L207.93,0Z" />
                    <path class="bg-black" d="M52.42,0H0l175.14,174V0h-35.14v87L52.42,0Z" />
                    <path class="bg-magenta" d="M0,46.67v127.33h128.16L0,46.67Z" />
                </svg>
            </a>
        </div>
        <nav>
            <ul>
                <li><a href="../animators.html#film">Short Film</a></li>
                <li><a href="../index.html#students">Students</a></li>
                <li><a href="../index.html#map">Event</a></li>
                <li><a href="../index.html#about">About</a></li>
            </ul>
        </nav>
        </header>
        
      `;
  
      // COMPONENT JAVASCRIPT GOES HERE  
      // const siteHeader = document.querySelector(".site-header");
      // console.log(siteHeader);
      
    };
  };
  customElements.define("site-header-sub", siteHeaderSub);