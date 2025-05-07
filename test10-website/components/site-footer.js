class siteFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <!-- COMPONENT HTML GOES HERE -->
      <footer class="site-footer">
          [ footer goes here ]

          [ links to social media and other stuff ]

      </footer>
        
      `;
      
    };
  };
  customElements.define("site-footer", siteFooter);