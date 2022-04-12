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
  } else {
    popupPage.classList.add('pop-menu');
    humbergur.style.display = 'none';
    popupPage.style.display = 'block';
    closeButton.style.display = 'flex';
  }
}
humbergur.addEventListener('click', myToggler);
closeButton.addEventListener('click', myToggler);
popupLinks.forEach((popupPage) => {
  popupPage.addEventListener('click', myToggler);
});