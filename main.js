const popupPage = document.querySelector('.popup-page');
const humbergur = document.querySelector('.pophumbergur');
const popupLinks = document.querySelectorAll('.page-popup__link');
const closeButton = document.querySelector('.popup-page__icon');
function myToggler() {
  if (popupPage.classList.contains('pop-menu')) {
    popupPage.classList.remove('pop-menu');
    humbergur.style.display = 'block';
    popupPage.style.display = 'none';
    closeButton.style.display = 'none';
    document.body.style.overflow = 'auto';
  } else {
    popupPage.classList.add('pop-menu');
    humbergur.style.display = 'none';
    popupPage.style.display = 'block';
    closeButton.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}
humbergur.addEventListener('click', myToggler);
closeButton.addEventListener('click', myToggler);
popupLinks.forEach((popupPage) => {
  popupPage.addEventListener('click', myToggler);
});

// script for popup
const documentIsLoaded = () => {
  const languages = [
    'html',
    'css',
    'javaScript',
    'github',
    'Ruby',
    'Bootstraps',
  ];
  const projectSection = [
    {
      id: 1,
      name: 'Scratch Day',
      description:
        'Hosting grobal scratch day event with features speakers',
      image: './img/project1.PNG',
      featured: ['SCRATCH', 'Front End Dev', '2022'],
      linkToLive: 'https://bizip.github.io/Scratch-day/',
      linkToSource: 'https://github.com/bizip/Scratch-day',
      popupData: {
        languages: [
          'html',
          'css',
          'javaScript',
          'github',
          'Ruby',
          'Bootstraps',
        ],
      },
    },
    {
      id: 2,
      name: 'Tv maze',
      description:
        'Movies website that keep you updated with the top rated and most popular movies I have contributed in a team of two.',
      image: './img/maze.PNG',
      featured: ['Movies', 'Front End Dev', '2022'],
      linkToLive: 'https://unrivaled-alfajores-11e018.netlify.app/',
      linkToSource: 'https://github.com/yosefHesham/TvMaze-Capstone',
      popupData: {
        languages,
      },
    },
    {
      id: 3,
      name: 'Todo List',
      description:
        'Planning your daily activities, and make life easier in the process of achieving your goal',
      image: './img/todo.PNG',
      featured: ['Facebook', 'Front End Dev', '2022'],
      linkToLive: 'https://bizip.github.io/todo-list/',
      linkToSource: 'https://github.com/bizip/todo-list',
      popupData: {
        languages,
      },
    },
    {
      id: 4,
      name: 'Book store',
      description:
        'It is called bookstore and it is going to display a lisk of books from store and a user will be able to add new book and even choose its corresponding category. Build with (React/Redux).',
      image: './img/book.PNG',
      featured: ['Personal', 'Full stack Dev', '2022'],
      linkToLive: 'https://github.com/bizip/book-store',
      linkToSource: 'https://github.com/bizip/book-store',
      popupData: {
        languages,
      },
    },
  ];
  const workCard = document.getElementById('work__card');
  workCard.innerHTML = projectSection
    .map(
      (el, index) => `   <article class="single_work ${index % 2 !== 0 ? 'zig-zag' : ''
        }">
    <img src="${el.image}" class="card-image" alt="TONIC services" />
    <div class="single_work_details">
        <h3>${el.name}</h3>
        <div class="single_work_specific">
        
            <h6>${el.featured[0]}</h6>
            <p>${el.featured[1]}</p>
            <p>${el.featured[2]}</p>
        </div>
        <p>${el.description}</p>
        <ul class="single_work_stack">
            <li>${el.popupData.languages[0]}</li>
            <li>${el.popupData.languages[1]}</li>
            <li>${el.popupData.languages[2]}</li>
        </ul>
        <button type="submit" data-id=${el.id
        } class="hoved dataTarget">See Project</button>
    </div>
  
  </article>`,
    )
    .join('');
  const singlePopupSection = document.querySelector('.popup-window');
  const popupBtn = document.querySelectorAll('.dataTarget');
  popupBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
      const search = projectSection.find(
        (id) => id.id === +e.target.dataset.id,
      );
      singlePopupSection.style.display = 'block';
      document.body.style.overflowY = 'hidden';
      singlePopupSection.innerHTML = `
      <div class="for-popup">
          <div class="Popup-window__header">
              <h3>${search.name}</h3>
              <h3 class="toggle-h3" id="toggle-h3">X</h3>
          </div class="popup-scrolly">
          <div class="single_work_specific">
              <h6>${search.featured[0]}</h6>
              <p>${search.featured[1]}</p>
              <p>${search.featured[2]}</p>
          </div>
       <div>
       <img src="${search.image}" class="popup-window__mult-post" alt="Mult post">
       <div class="popup__container">
           <div class="popup-details">
               <p>${search.description}</p>
           </div>
           <div class="popup__buttons">
               <ul class="single_work_stack">
                   <li>${search.popupData.languages[0]}</li>
                   <li>${search.popupData.languages[1]}</li>
                   <li>${search.popupData.languages[2]}</li>
               </ul>
               <ul class="single_work_stack">
               <li>${search.popupData.languages[3]}</li>
               <li>${search.popupData.languages[4]}</li>
               <li>${search.popupData.languages[5]}</li>
               </ul>
               <ul class="popup-links">
               <form action="${search.linkToLive}">
                   <li>
                       <button type="submit" class="hoved btn-mobile">See Live <span><img src="./img/Icon.svg" alt="Live project link"></span> </button>
                   </li>
               </form>
                   <form action="${search.linkToSource}">
                   <li>
                       <button type="submit" class="hoved btn-mobile">See source <span><img src="./img/githubIcon.svg" alt="Source code link"></span></button>
                   </li>
                </form>
               </ul>
           </div>
     </div>
       </div>
      </div>
      `;
      singlePopupSection.addEventListener('click', () => {
        singlePopupSection.style.display = 'none';
        document.body.style.overflowY = 'auto';
      });
    });
  });

  // form validation
  const formInput = document.getElementById('contact-form');
  const formEmail = document.getElementById('email');
  const displayMessage = document.querySelector('.message');
  const messageContent = document.getElementById('message');

  const hasUpperCase = (input) => input.toLowerCase() !== input;
  formInput.addEventListener('submit', (e) => {
    e.preventDefault();
    if (hasUpperCase(formEmail.value)) {
      displayMessage.style.display = 'flex';
      messageContent.style.color = 'red';
      messageContent.textContent = 'Try again, an email should be only lower case letter.';
      setTimeout(() => {
        displayMessage.style.display = 'none';
      }, 3000);
    } else {
      displayMessage.style.display = 'flex';
      messageContent.style.color = '#6070ff';
      messageContent.textContent = 'Success, I will get back to you soon.';
      setTimeout(() => {
        formInput.reset();
        displayMessage.style.display = 'none';
      }, 3000);
    }
  });
};

window.onload = documentIsLoaded;
