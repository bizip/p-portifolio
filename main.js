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
  const languages = ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstraps'];
  const projectSection = [
    {
      id: 1,
      name: 'Tonic',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      image: './img/gh.svg',
      featured: ['CANOPY', 'Back End Dev', '2015'],
      linkToLive: 'https://bizip.github.io/p-portifolio/',
      linkToSource: 'https://github.com/bizip/p-portifolio',
      popupData: {
        languages: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstraps'],
      },
    },
    {
      id: 2,
      name: 'Multi-Post Stories',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      image: './img/pro.svg',
      featured: ['CANOPY', 'Back End Dev', '2015'],
      linkToLive: 'https://bizip.github.io/p-portifolio/',
      linkToSource: 'https://github.com/bizip/p-portifolio',
      popupData: {
        languages,
      },
    },
    {
      id: 3,
      name: 'Facebook 360',
      description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      image: './img/work_image.PNG',
      featured: ['Facebook', 'Full stack Dev', '2015'],
      linkToLive: 'https://bizip.github.io/p-portifolio/',
      linkToSource: 'https://github.com/bizip/p-portifolio',
      popupData: {
        languages,
      },
    },
    {
      id: 4,
      name: 'Uber Navigation',
      description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      image: './img/multpost.PNG',
      featured: ['Uber', 'Full stack Dev', '2015'],
      linkToLive: 'https://bizip.github.io/p-portifolio/',
      linkToSource: 'https://github.com/bizip/p-portifolio',
      popupData: {
        languages,
      },
    },
  ];
  const workCard = document.getElementById('work__card');
  workCard.innerHTML = projectSection.map((el, index) => `   <article class="single_work ${(index % 2 !== 0) ? 'zig-zag' : ''}">
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
        <button type="submit" data-id=${el.id} class="hoved dataTarget">See Project</button>
    </div>
  
  </article>`).join('');
};

window.onload = documentIsLoaded;