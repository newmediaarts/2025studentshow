import interfaceStudents from '../data/interface.js';
import animationStudents from '../data/animators.js';
import {css, html} from './templates.js';


const styles = css `

/* HERO  */
.hero {
    --color1: var(--bg-green);
    --color2: var(--bg-magenta);
    --color3: var(--bg-yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-height: 85svh;
}

.page-animators .hero {
    --color1: var(--bg-yellow);
}

.page-designers .hero {
    --color2: var(--bg-yellow);
}

.hero-box {
    display: flex;
    width: fit-content;
    /* max-width: 100svh; */
    margin-top: 25%;
    padding-bottom: 10%;
    margin-left: 20vw;
    margin-right: 8vw;
    rotate: -15deg;
    /* border: 2px solid red; */
    translate: 0 -20%;
}
@media (max-width: 767px) {
    .hero-box {
        translate: 0 -5%;
        margin-top: 12em;
        padding-bottom: 8em;
    }
}

@media (max-width: 435px) {
    .hero-box {
        translate: 0 0;
        margin-top: 10em;
        padding-bottom: 5em;
    }
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
    color: var(--bg-green);
    text-shadow: #FAFBE7 -0.4vw -0.4vw;
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
    text-shadow: #FAFBE7 0.2vw 0.2vw;
    color: var(--bg-black);
    margin: 0;
}


.hero .text-black {
    position: relative;
    color: var(--bg-black);
    z-index: 3;
}

.hero .drop-shadow-a1 {
    color: transparent;
    text-shadow: var(--color3) -0.8vw 0;
    mix-blend-mode: plus-lighter;
    z-index: 1;
}

.hero .drop-shadow-a2 {
    color: transparent;
    text-shadow: var(--color1) 0.8vw 0;
    mix-blend-mode: plus-lighter;
    z-index: 2;
}

.hero .drop-shadow-a-bg {
    color: var(--bg-black);
    text-shadow: var(--bg-black) 0.8vw 0, var(--bg-black) -0.8vw 0;
}

.hero .drop-shadow-b1 {
    color: transparent;
    text-shadow: var(--bg-green) 0 -0.2vw;
    mix-blend-mode: plus-lighter;
    z-index: 1;
}

.hero .drop-shadow-b2 {
    color: transparent;
    text-shadow: var(--bg-magenta) 0 0.2vw;
    mix-blend-mode: plus-lighter;
    z-index: 2;
}

.hero .drop-shadow-b-bg {
    color: transparent;
    text-shadow: #888 0 0 ;
    mix-blend-mode: plus-lighter;
    z-index: -1;
}

.hero .text-outline {
    position: relative;
    color: transparent;
    -webkit-text-stroke: var(--bg-black)2px;
    z-index: 6;
}

.hero .text-white {
    color: #FAFBE7;
    font-stretch: semi-condensed;
    z-index: 5;
}


.student-two-col {
    padding: 2rem;
}
@media (min-width: 768px) {
    .student-two-col {
        display: flex;
        align-items: flex-start;
        gap: 2rem;
    }
    .profile {
        position: sticky;
        top: 2em;
    }
}


.profile {
    margin-bottom: 3rem;
}

.media {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

img, video {
  display: block;
  width: 100%;
  height: auto;
}

.profile h1 {
    font-size: 3em;
    line-height: 1;
    margin: 0;
}

.profile__image {
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
}

/* BUTTONS */
.button {
    background-color: var(--bg-yellow);
    color: black;
    display: inline-block;
    padding: 1em 2em;
    border-radius: .5em;
    margin: 1.5em .5em .5em 0;
    text-decoration: none;
    text-transform: uppercase;
}
.button:hover {
    background-color: var(--bg-green);
    color: black;
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

            <div class="student-two-col">
                <div class="profile">
                    <div>
                        <img class="profile__image" src="${student.image}" alt="${student.name}" height="500" width="500">
                    </div>
                    <h1>${student.name} ${student.lastName}</h1>
                    <p>${program}</p>
                    <div>
                        <a class="button" href="${student.portfolio}">Website</a>
                    </div>
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
