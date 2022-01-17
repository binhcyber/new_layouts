// ------------------------Light Dark Mode-----------------------------------
var dark = document.getElementById("dark");
var light = document.getElementById("light");
var header = document.querySelector(".header");
var carousel = document.querySelector(".carousel");
var carouselTitle = document.querySelector(".carousel__title");
var catagories = document.querySelector(".catagories");
var catagoriesItemsH5 = document.querySelectorAll(".catagories__items__h5");
var catagoriesTitleH1 = document.querySelector(".catagories__title__h1");
var carouselH2 = document.getElementById("carousel__h2");
var servicesItemsbBody = document.querySelectorAll(".services__items-body");
var experience = document.querySelector(".experience");
var experienceTitleH1 = document.querySelector(".experience__title__h1");
var information = document.querySelector(".information");
var product = document.querySelector(".product");
var footer = document.querySelector(".footer");
var footerDescH1 = document.querySelectorAll(".footer__desc__h1");
var servicesH5 = document.querySelectorAll(".services__h5");
var informationDetailH3 = document.querySelectorAll(".information__detail__h3");
var productDescH1 = document.querySelector(".product__desc__h1");

document.getElementById("dark").addEventListener("click", function () {
  dark.classList.add("d-none");
  light.classList.remove("d-none");
  header.style.backgroundColor = "#fdfffc";
  carousel.style.backgroundColor = "#fdfffc";
  carouselTitle.style.backgroundColor = "#fdfffc";
  carouselH2.style.color = "#222222";
  catagories.style.backgroundColor = "#fdfffc";
  catagoriesTitleH1.style.color = "#222222";
  experience.style.backgroundColor = "#fdfffc";
  experienceTitleH1.style.color = "#222222";
  information.style.backgroundColor = "#fdfffc";
  product.style.backgroundColor = "#fdfffc";
  productDescH1.style.color = "#222222";
  footer.style.backgroundColor = "#fdfffc";

  for (i = 0; i < servicesItemsbBody.length; i++) {
    servicesItemsbBody[i].style.backgroundColor = "#fdfffc";
  }
  for (i = 0; i < catagoriesItemsH5.length; i++) {
    catagoriesItemsH5[i].style.color = "#222222";
  }
  for (i = 0; i < servicesH5.length; i++) {
    servicesH5[i].style.color = "#222222";
  }
  for (i = 0; i < informationDetailH3.length; i++) {
    informationDetailH3[i].style.color = "#222222";
  }
  for (i = 0; i < footerDescH1.length; i++) {
    footerDescH1[i].style.color = "#222222";
  }
});
document.getElementById("light").addEventListener("click", function () {
  light.classList.add("d-none");
  dark.classList.remove("d-none");
  header.style.backgroundColor = "#222222";
  carousel.style.backgroundColor = "#222222";
  carouselTitle.style.backgroundColor = "#222222";
  carouselH2.style.color = "#fdfffc";
  catagories.style.backgroundColor = "#222222";
  catagoriesTitleH1.style.color = "#fdfffc";
  experience.style.backgroundColor = "#222222";
  experienceTitleH1.style.color = "#fdfffc";
  information.style.backgroundColor = "#222222";
  product.style.backgroundColor = "#222222";
  productDescH1.style.color = "#fdfffc";
  footer.style.backgroundColor = "#222222";

  for (i = 0; i < servicesItemsbBody.length; i++) {
    servicesItemsbBody[i].style.backgroundColor = "#222222";
  }
  for (i = 0; i < catagoriesItemsH5.length; i++) {
    catagoriesItemsH5[i].style.color = "#fdfffc";
  }
  for (i = 0; i < servicesH5.length; i++) {
    servicesH5[i].style.color = "#fdfffc";
  }
  for (i = 0; i < informationDetailH3.length; i++) {
    informationDetailH3[i].style.color = "#fdfffc";
  }
  for (i = 0; i < footerDescH1.length; i++) {
    footerDescH1[i].style.color = "#fdfffc";
  }
});
