//selects the section part of the html and assigns it to section
const section = document.querySelector("section");

// selects the span on the html and assigns it to result
const result = document.querySelector("span");

//You get 12 chances to match up all the images
const matchingChances = 12;

//link text 'results' to matchingChances
result.textContent = matchingChances;

//generate images and name of images
const getData = () => [
    { imgSrc: "./images/AnemometerPic.jpeg", name: "anemometer picture" },
    { imgSrc: "./images/Anemometer.jpeg", name: "anemometer definition" },
    { imgSrc: "./images/Barometer.jpeg", name: "barometer definition" },
    { imgSrc: "./images/mercury-barometer-science-photo-library.jpeg", name: "barometer picture" },
    { imgSrc: "./images/Rain-gauge.jpeg", name: "rain gauge picture" },
    { imgSrc: "./images/rain-gauge.jpeg", name: "rain gauge defintion" },
    { imgSrc: "./images/thermometer.jpeg", name: "thermometer picture" },
    { imgSrc: "./images/Thermometer.jpeg", name: "thermometer defintion" },
    { imgSrc: "./images/blank-square.png", name: "blank square"},
]

//randomize cards
const randomize = () => {
    const cardData = getData();
   cardData.sort (() => Math.random () - 0.5);
   console.log(cardData);
}
randomize()