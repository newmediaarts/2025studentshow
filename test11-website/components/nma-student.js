import interfaceStudents from '../data/interface.js';
import animationStudents from '../data/animators.js';
import {css, html} from './templates.js';

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
            <h1 class="hide-visually">2025 Interface Designers</h1>

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

        <section class="studentbox" id="student1">
            <div>
            </div>
        </section>

`

    const styles = css`
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
