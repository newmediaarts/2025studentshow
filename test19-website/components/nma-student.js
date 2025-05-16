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
    /* max-height: 85svh; */
    max-height: 100svh;
}
.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-body-background);
    z-index: -1;
}

.page-animators .hero::before {
    --color-body-background: var(--bg-green);
    --color-hero-background: var(--bg-green);
    background-color: var(--bg-green);
}

.page-animators .hero {
    --color1: var(--bg-yellow);
}

.page-designers .hero::before {
    --color-body-background: var(--bg-magenta);
    --color-hero-background: var(--bg-magenta);
    background-color: var(--bg-magenta);
}

.page-designers .hero {
    --color2: var(--bg-yellow);
}

.hero-box {
    display: flex;
    width: fit-content;
    /* max-width: 100svh; */
    margin-top: 25%;
    margin-bottom: 18%;
    margin-left: 20vw;
    margin-right: 8vw;
    rotate: -15deg;
    /* border: 2px solid red; */
    translate: 0 -20%;
}

.page-animators .hero-box {
    margin-top: 20%;
}
@media (max-width: 767px) {
    .hero-box {
        translate: 0 -5%;
        margin-top: 12em;
        margin-bottom: 8em;
    }
    .page-animators .hero-box {
        margin-top: calc(8em + 10%);
    }
}

@media (max-width: 435px) {
    .hero-box {
        translate: 0 0;
        margin-top: 10em;
        margin-bottom: 5em;
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
.page-home .hero .title {
    font-size: clamp(10vw, 15vw, 10em);
}
.page-animators .title {
    font-size: clamp(2em, 9vw, 14em);
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
    font-size: clamp(1.2em, 5vw, 5em);
    font-weight: 600;
    line-height: 1;
    color: var(--bg-green);
    text-shadow: #FAFBE7 -0.2vw -0.2vw;
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
    text-shadow: var(--color1) -0.8vw 0;
    mix-blend-mode: plus-lighter;
    z-index: 1;
}

.hero .drop-shadow-a2 {
    color: transparent;
    text-shadow: var(--color2) 0.8vw 0;
    mix-blend-mode: plus-lighter;
    z-index: 2;
}

.hero .drop-shadow-a-bg {
    color: var(--bg-black);
    text-shadow: var(--bg-black) 0.8vw 0, var(--bg-black) -0.8vw 0;
}


.hero .drop-shadow-b1 {
    color: transparent;
    text-shadow: var(--bg-green) 0 -0.4vw;
    mix-blend-mode: plus-lighter;
    z-index: 1;
}

.hero .drop-shadow-b2 {
    color: transparent;
    text-shadow: var(--bg-magenta) 0 0.4vw;
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

.hero .text-vertical .title {
    translate: -100% 0; opacity: 0;
    animation: hero-text-vertical-slide-in .3s cubic-bezier(0, 1, 1, 1) .6s forwards;
}
@keyframes hero-text-vertical-slide-in {
    100% { opacity: 1;translate: 0 0; }
}

.hero .text-stack .title:nth-child(1) {
    translate: -100% 0; opacity: 0;
    animation: hero-text-stack-1-slide-in .4s cubic-bezier(0, 1, 1, 1) forwards;
}
@keyframes hero-text-stack-2-slide-in {
    100% { opacity: 1; translate: 0 0; }
}

.hero .text-stack .title:nth-child(2) {
    translate: -100% 0; opacity: 0;
    animation: hero-text-stack-2-slide-in .4s cubic-bezier(0, 1, 1, 1) .2s forwards;
}
@keyframes hero-text-stack-3-slide-in {
    100% { opacity: 1; translate: 0 0; }
}

.hero .text-stack .title:nth-child(3) {
    translate: -100% 0; opacity: 0;
    animation: hero-text-stack-3-slide-in .4s cubic-bezier(0, 1, 1, 1) .4s forwards;
}
@keyframes hero-text-stack-1-slide-in {
    100% { opacity: 1; translate: 0 0; }
}

.hero h2 {
    translate: 100% 0; opacity: 0;
    animation: hero-h2-slide-in .4s cubic-bezier(0, 1, 1, 1) .8s forwards;
}
@keyframes hero-h2-slide-in {
    100% { opacity: 1; translate: 0 0; }
}

.hero h3 {
    translate: 100% 0; opacity: 0;
    animation: hero-h3-slide-in .4s cubic-bezier(0, 1, 1, 1) 1s forwards;
}
@keyframes hero-h3-slide-in {
    100% { opacity: 1; translate: 0 0; }
}


.student-two-col {
    padding: 2em 1.5em;
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
        max-width: calc(25% - 1rem);
    }
    .media {
    flex-grow: 1;
        max-width: calc(75% - 1rem);
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

.media h3.more {
margin-top: 2em;
    margin-bottom: 0;
    text-align: center;
}

/* BUTTONS */
.buttons {
    text-align: center;
}
.button {
    background-color: var(--bg-yellow);
    color: black;
    display: inline-block;
    padding: 1em 2em;
    border-radius: .5em;
    margin: .5em .5em .5em 0;
    text-decoration: none;
    text-transform: uppercase;
}
.button:hover {
    background-color: var(--bg-green);
    color: black;
}

/* SOCIAL ICONS */
.social-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    margin: 1.5em 0;
    }
.social-icon {
    display: block;
    width: 1.5em;
    height: 1.5em;
}
.social-icon span {
    display: none;}
.social-icon.instagram {
    background-image: url(img/icon-instagram.png);
    background-size: contain;
}
.social-icon.linkedin {
    background-image: url(img/icon-linkedin.png);
    background-size: contain;
}

.media__item,
.profile__image {
    border-radius: .5em;
    overflow: hidden;
}

.media__video {
    background-color: rgb(255 255 255 / .1);
    aspect-ratio: 16/9;
    width: 100%;
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

            <div class="student-two-col">
                <div class="profile">
                    <div>
                        <img class="profile__image" src="${student.image}" alt="${student.name}" height="500" width="500">
                    </div>
                    <h1>${student.name} ${student.lastName}</h1>
                    <p>${program}</p>
                    <!-- <div>
                        <a class="button" href="${student.portfolio}">Website</a>
                    </div> -->
                    <div class="social-icons">
                        ${student.social ? student.social.map(social => html`
                            <a class="social-icon ${social.label}" href="${social.url}"><span>${social.label}<span></a>
                        `).join('') : ''}
                    </div>
                </div>

                <div class="media">
                ${student.media.map(media => html`
                    <div class="media__item"> 
                    ${media.type === 'video' ? html`
                        <video class="media__video" poster="${media.poster}" controls height="1920" width="1080">
                            <source src="${media.src}" type="video/webm">
                            Your browser does not support the video tag.
                        </video>
                    ` : html`<img class="media__image" src="${media.src}" alt="${media.alt}" height="500" width="500">`}
                    </div>
                `).join('')}

                    <h3 class="more">Want to see more? </h3>
                    <div class="buttons">
                        <a class="button" href="${student.portfolio}">Visit ${student.name}'s Website</a>
                    </div>
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
