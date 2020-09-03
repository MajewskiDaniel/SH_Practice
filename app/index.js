/**
 * Application entry point
 */

// Load application styles
import "../assets/styles/index.scss";
// ================================
// START YOUR APP HERE
// ================================

const features = [
  {
    title: `Hot desk booking.
            Like a pro.`,
    text:
      "Find hot desks in a breeze. Book any workplace at your office locations around the world. Do you need a parking space? Just a few clicks and its done.",
    url: `url("/assets/images/Layer\ 78.png")`,
    screen: 'url("/assets/images/screen1.jpg")',
  },
  {
    title: `Room booking with 
            Internet of Things.`,
    text:
      "Your meeting ended earlier and you had reservations for a few hours ahead? Maybe you booked the room but your client dismiss meeting? IoT sensor will detect that conference room is empty and will ask you to shorten or cancel the meeting. Just approve. Nothing more.",
    url: `url(/assets/images/mac1984.jpg)`,
    screen: 'url("/assets/images/screen2.jpg")',
  },
  {
    title: `Employee finder 
            and attendance 
            list.`,
    text:
      "We know how difficult it is to find the right person in big organizations. Thanks to the Zonifero you can reach every person in a few seconds, and you can also send a notification Hey, I am looking for you.",
    url: `url(/assets/images/atari.jpg)`,
    screen: 'url("/assets/images/screen1.jpg")',
  },
];

const featuresArowBack = document.querySelector(".features__nav .nav__arrow--back");
const featuresArowFront = document.querySelector(".features__nav .nav__arrow--front");
const featuresHeader = document.querySelector(".features__header-big");
const featuresText = document.querySelector(".features__text");
const featuresBcg = document.querySelector(".features__bcg");
let featuresScreenBack = document.querySelector(".screen__back");
let featuresScreenFront = document.querySelector(".screen__front");

let index = 0;

const fadeOut = () => {
  featuresHeader.style.transition = "0s";
  featuresText.style.transition = "0s";
  //   featuresBcg.style.transition = ".3s";
  featuresHeader.style.opacity = 0;
  featuresText.style.opacity = 0;
  //   featuresBcg.style.opacity = 0;
};

const fadeIn = () => {
  featuresHeader.style.transition = ".5s";
  featuresText.style.transition = "1.2s";
  //   featuresBcg.style.transition = ".3s";
  featuresHeader.style.opacity = 1;
  featuresText.style.opacity = 1;
  //   featuresBcg.style.opacity = 1;
};

featuresArowBack.addEventListener("click", () => {
  index--;
  if (index < 0) index = features.length - 1;
  featuresBcg.style.backgroundImage = features[index].url;
  featuresScreenBack.style.transform = "translateX(0px)";
  fadeOut();
  setTimeout(() => {
    featuresHeader.innerText = features[index].title;
    featuresText.innerText = features[index].text;
  }, 300);
  setTimeout(fadeIn, 300);
});

featuresArowFront.addEventListener("click", () => {
  index++;
  if (index > features.length - 1) index = 0;
  featuresBcg.style.backgroundImage = features[index].url;
  featuresScreenBack.style.transform = "translateX(0px)";
  featuresScreenFront = featuresScreenBack;
  //   featuresScreenBack.style.transform = "translateX(246px)";
  featuresScreenBack = features[index].screen;
  fadeOut();
  setTimeout(() => {
    featuresHeader.innerText = features[index].title;
    featuresText.innerText = features[index].text;
  }, 300);
  setTimeout(fadeIn, 300);
});
