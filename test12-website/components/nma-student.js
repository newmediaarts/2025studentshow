import interfaceStudents from '../data/interface.js';
import animationStudents from '../data/animators.js';
import {css, html} from './templates.js';


const styles = css `

/* HERO  */
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-height: 85svh;
}

.hero-box {
    display: flex;
    width: fit-content;
    margin-top: 25%;
    padding-bottom: 10%;
    margin-left: 20vw;
    margin-right: 8vw;
    rotate: -15deg;
    /* border: 2px solid red; */
    translate: 0 -20%;
}

.hero .title {
    font-family: "roc-grotesk-variable", sans-serif;
    font-size: clamp(2em, 11vw, 14em);
    font-weight: 750;
    text-transform: uppercase;
    position: relative;
    line-height: .8;
}

.hero .text-vertical {
    position: absolute;
    top: 0;
    left: 0;
    rotate: 90deg;
    transform-origin: top left;
}

.hero .text-vertical .title{
    font-size: clamp(1em, 7vw, 8em);
    margin-top: .3em;
    margin-left: 0em;
}

.hero .drop-shadow {
    position: absolute;
    top: 0;
    left: 0;
}

.hero h2 {
    font-family: "roc-grotesk-variable", sans-serif;
    font-stretch: condensed;
    font-weight: 750;
    font-size: clamp(2em, 5vw, 5em);
    font-weight: 600;
    line-height: 1;
    color: #00AE8F;
    text-shadow: #FAFBE7 -0.4rem -0.4rem;
    margin: 0;
    margin-top: .1em;
    margin-bottom: .1em;
    text-transform: uppercase;
}

.hero h3 {
    font-family: "geneo-std", serif;
    font-size: clamp(1em, 2vw, 2.5em);
    line-height: 1;
    font-weight: 600;
    text-shadow: #FAFBE7 0.4rem 0.4rem;
    color: #C51A7D;
    margin: 0;
}


.hero .text-black {
    position: relative;
    color: #000000;
    z-index: 3;
}

.hero .drop-shadow-a1 {
    color: transparent;
    text-shadow: #00AE8F -0.8rem 0;
    mix-blend-mode: plus-lighter;
    z-index: 1;
}

.hero .drop-shadow-a2 {
    color: transparent;
    text-shadow: #C51A7D 0.8rem 0;
    mix-blend-mode: plus-lighter;
    z-index: 2;
}

.hero .drop-shadow-a-bg {
    color: black;
    text-shadow: #000000 0.8rem 0, #000000 -0.8rem 0;
}

.hero .hero .hero .drop-shadow-b1 {
    color: transparent;
    text-shadow: #00AE8F 0 -0.4rem;
    mix-blend-mode: plus-lighter;
    z-index: 1;
}

.hero .drop-shadow-b2 {
    color: transparent;
    text-shadow: #C51A7D 0 0.4rem;
    mix-blend-mode: plus-lighter;
    z-index: 2;
}

.hero .drop-shadow-b-bg {
    color: transparent;
    text-shadow: #000000 0 0.4rem, #000000 0 -0.4rem;
}

.hero .text-outline {
    position: relative;
    color: transparent;
    -webkit-text-stroke: black 2px;
    z-index: 6;
}

.hero .text-white {
    color: #FAFBE7;
    font-stretch: semi-condensed;
    z-index: 5;
}


.media {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
    padding: 2rem;
}

img, video {
  display: block;
  width: 100%;
  height: auto;
}

.profile__image {
  display: block;
  width: 300px;
  height: auto;
}
` 

class NMAStudent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    let students = [...interfaceStudents, ...animationStudents];

    const studentURL = this.getAttribute('student-url');
    const program = this.getAttribute('program');

    // Find  the student by url 
    const student = students.find(student => {
      return student.url === studentURL;
    });
 
    const markup = html`
    <section class="hero">
            <h1 class="hide-visually" part="hide-visually">2025 Interface Designers</h1>

            <div class="hero-box">

                <div class="text-vertical">
                    <div class="title">
                        <div class="text-outline">2025</div>
                        <div class="drop-shadow drop-shadow-b1">2025</div>
                        <div class="drop-shadow drop-shadow-b2">2025</div>
                        <div class="drop-shadow drop-shadow-b-bg">2025</div>
                    </div>
                </div>
                <div class="column">
                    <div class="text-stack">
                        <div class="title">
                            <div class="text-black">${student.name}</div>
                            <div class="drop-shadow drop-shadow-a1">${student.name}</div>
                            <div class="drop-shadow drop-shadow-a2">${student.name}</div>
                            <div class="drop-shadow drop-shadow-a-bg">${student.name}</div>
                        </div>
                        <div class="title">
                            <div class="text-black">${student.lastName}</div>
                            <div class="drop-shadow drop-shadow-a1">${student.lastName}</div>
                            <div class="drop-shadow drop-shadow-a2">${student.lastName}</div>
                            <div class="drop-shadow drop-shadow-a-bg">${student.lastName}</div>
                        </div>

                        <h2>NMA Graduate</h2>

                        <h3>${program}</h3>
                    </div>
                </div>

            </div>
        </section>


        <section class="studentbox" part="students">
            <div class="profile">
        <h1>${student.name} ${student.lastName}</h1>
        <a href="${student.portfolio}">Portfolio website</a>
        <img class="profile__image" src="${student.image}" alt="${student.name}" height="500" width="500">
    </div>

            <div class="media">
            ${student.media.map(media => html`
                <div class="media__item"> 
                ${media.type === 'video' ? html`
                    <video class="media__video" controls>
                        <source src="${media.src}" type="video/webm">
                        Your browser does not support the video tag.
                    </video>
                ` : html`<img class="media__image" src="${media.src}" alt="${media.alt}" height="500" width="500">`}
                </div>
            `).join('')}
            </div>
        </section>
`


    const templateEl = document.createElement('template');
    const styleEl = document.createElement('style');



    styleEl.textContent = styles;
    templateEl.innerHTML = markup;



    this.shadowRoot.appendChild(styleEl);
    this.shadowRoot.appendChild(templateEl.content.cloneNode(true));
  }

}

customElements.define('nma-student', NMAStudent);
