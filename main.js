let popupPage = document.querySelector(".popup-page");
let popupLinks = document.querySelectorAll(".page-popup__link");
let humbergur = document.querySelector(".pophumbergur");
let closeButton = document.querySelector(".popup-page__icon");
function myToggler() {
  if (popupPage.classList.contains("pop-menu")) {
    popupPage.classList.remove("pop-menu");
    humbergur.style.display = "block";
    popupLinks.style.display = "none";
    popupPage.style.display = "none";
    closeButton.style.display = "none";
  } else {
    popupPage.classList.add("pop-menu");
    humbergur.style.display = "none";
    popupLinks.style.display = "block";
    popupPage.style.display = "block";
    closeButton.style.display = "block";
  }
}
humbergur.addEventListener("click", myToggler);
closeButton.addEventListener("click", myToggler);
popupLinks.forEach((popupPage) => {
  popupLinks.addEventListener("click", myToggler);
});
