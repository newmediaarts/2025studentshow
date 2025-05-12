import interfaceStudents from '../data/interface.js';
import animationStudents from '../data/animators.js';
import {css, html} from './templates.js';

class NMAStudentGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    let students = [...interfaceStudents, ...animationStudents];

    const category = this.getAttribute('category');
    const omit = this.getAttribute('omit');

    // Render the students based on the category
    if (category === 'interface') {
      students = interfaceStudents;
    }

    if (category === 'animators') {
      students = animationStudents;
    }

    // Sort the students by name alphabetically
    students =  students.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    })

    // Filter out the student with the url that matches the omit attribute
    if(omit) {
      students = students.filter(student => {
        return student.url !== omit;
      });
    }



    const markup = html`<ul class="students">
    ${students.map(student => html`
    <li>
      <a class="student" href="${student.url}" >
        <div class="student__name">${student.name} ${student.lastName}</div>
        <div class="student__image">
          <img class="student_image__hover-image" src="${student.hoverImage}" alt="${student.name}" height="1500" width="1000">
          <img class="student_image__image" src="${student.image}" alt="${student.name}" height="1500" width="1000">
        </div>
        </a>
    </li>
`).join('')}
    </ul>`

    const styles = css`
  .students {
    list-style: none;
    padding-inline: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10vw, 350px));
    grid-gap: 1rem;
    justify-content: center;
    max-width: clamp(300px, 100vw - 2rem, 1200px);
    margin-inline: auto; 
  }

  .student {
    aspect-ratio: 2 / 3;
    display: block;
    position: relative;
    color: inherit;
    border-radius: 10px;
    overflow: hidden;
    }

  .student__name {
    position: absolute;
    top: 1em;
    left: 50%;
    transform: translateX(-50%) rotate(-15deg);
    font-size: clamp(1.5rem, 2vw + 1rem, 2rem);
  }

  .student__image {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .student__image img {
    width: 100%;
    height: 100%;
    opacity: var(--image-opacity);
    grid-column: 1;
    grid-row: 1;
    display: block;
    object-fit: cover;
  }

  .student__image:hover {
    .student_image__image {
    --image-opacity: 0;
    transition: opacity 0.5s; 
  }
}


`

    const templateEl = document.createElement('template');
    const styleEl = document.createElement('style');



    styleEl.textContent = styles;
    templateEl.innerHTML = markup;



    this.shadowRoot.appendChild(styleEl);
    this.shadowRoot.appendChild(templateEl.content.cloneNode(true));
  }

}

customElements.define('nma-student-grid', NMAStudentGrid);
