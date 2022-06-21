//selects the section part of the html and assigns it to section
const section = document.querySelector("section");

// selects the span on the html and assigns it to result
const result = document.querySelector("span");

//You get 12 chances to match up all the images
const matchingChances = 12;

//link text 'results' to matchingChances
result.textContent = matchingChances;

//generate images and name of images in an array using an arrow function
//arrow function represents owner of function, so getData is the owner of the array function
const getData = () => [
    { imgSrc: "./images/AnemometerPic.jpeg", name: "anemometer picture" },
    { imgSrc: "./images/Anemometer.jpeg", name: "anemometer definition" },
    { imgSrc: "./images/Barometer.jpeg", name: "barometer definition" },
    { imgSrc: "./images/mercury-barometer-science-photo-library.jpeg", name: "barometer picture" },
    { imgSrc: "./images/Rain-gauge.jpeg", name: "rain gauge picture" },
    { imgSrc: "./images/rain-gauge.jpeg", name: "rain gauge defintion" },
    { imgSrc: "./images/thermometer.jpeg", name: "thermometer picture" },
    { imgSrc: "./images/Thermometer.jpeg", name: "thermometer defintion" },
    { imgSrc: "./images/blank-square.png", name: "blank square" },
]

//randomize cards: use an arrow function that is owned by randomize
//https://www.w3schools.com/js/js_arrow_function.asp helped to better understand how arrow functions
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    //Math.random function is owned by cardData.sort and is used to randomize the arrary. 
    // https://www.w3schools.com/js/default.asp was used to help randomize the arrary.
    //console.log(cardData);
}

//cardGenerator is assigned the function of card data being randomize.
//cardData can be assigned as a variable in many ways as long as it stays in the function.
//cardData is not in the global part of the javascript document
const cardGenerator = () => {
    const cardData = randomize();
    console.log(cardData);
};

cardGenerator();

//console.log as undefined