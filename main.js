import "./scss/main.scss";
import Swiper from "swiper";

import "swiper/css";
import "swiper/css/navigation";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".what-we-do-swiper", {
    loop: true,
    freeMode: true,
    spaceBetween: 30,
    slidesPerView: "auto",

    navigation: {
      nextEl: ".swiper-button-next-my",
      prevEl: ".swiper-button-prev-my",
    },
  });

  document
    .querySelector(".swiper-button-prev-my")
    .addEventListener("click", function () {
      swiper.slidePrev();
    });

  document
    .querySelector(".swiper-button-next-my")
    .addEventListener("click", function () {
      swiper.slideNext();
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".our-work-swiper", {
    loop: true,
    spaceBetween: 43,
    freeMode: true,
    slidesPerView: "auto",

    navigation: {
      nextEl: ".swiper-button-next-my-2",
      prevEl: ".swiper-button-prev-my-2",
    },
  });

  document
    .querySelector(".swiper-button-prev-my-2")
    .addEventListener("click", function () {
      swiper.slidePrev();
    });

  document
    .querySelector(".swiper-button-next-my-2")
    .addEventListener("click", function () {
      swiper.slideNext();
    });
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function handleSendButtonClick() {
  const emailInput = document.getElementById("email");
  const errorElement = document.querySelector(".error");

  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    errorElement.style.display = "none";
    console.log("Email is valid:", email);
  } else {
    errorElement.style.display = "block";
    console.log("Invalid email:", email);
  }
}

const sendBtn = document.querySelector(".footer-btn");
sendBtn.addEventListener("click", handleSendButtonClick);
