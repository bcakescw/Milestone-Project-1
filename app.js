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
    { imgSrc: "./images/AnemometerPic.jpg", name: "anemometer picture" },
    { imgSrc: "./images/Anemometer.jpeg", name: "anemometer definition" },
    { imgSrc: "./images/Barometer.jpeg", name: "barometer definition" },
    { imgSrc: "./images/mercury-barometer-science-photo-library.jpeg", name: "barometer picture" },
    { imgSrc: "./images/Rain-gauge.jpeg", name: "rain gauge picture" },
    { imgSrc: "./images/rain-gauge.jpeg", name: "rain gauge defintion" },
    { imgSrc: "./images/thermometer.jpeg", name: "thermometer picture" },
    { imgSrc: "./images/Thermometer.jpeg", name: "thermometer defintion" },
    { imgSrc: "./images/blank-square.png", name: "blank square" },
    //not all images are working, why?
]

//randomize cards: use an arrow function that is owned by randomize
//https://www.w3schools.com/js/js_arrow_function.asp helped to better understand how arrow functions
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
    //Math.random function is owned by cardData.sort and is used to randomize the arrary. 
    // https://www.w3schools.com/js/default.asp was used to help randomize the arrary.
    //console.log(cardData);
}

//cardGenerator is assigned the function of card data being randomize.
//cardData can be assigned as a variable in many ways as long as it stays in the function.
//cardData is not in the global part of the javascript document
const cardGenerator = () => {
    const cardData = randomize();
    //console.log(cardData);
    //generate the html
    cardData.forEach((item) => {
        //forEach was used to loop through each of the items in the array above

        //this will be the section of the html document the images will appear on
        const card = document.createElement("div");
        // this one will have the picture to it
        const face = document.createElement("img")
        // this will create the back of the card
        const back = document.createElement("div")

        face.src = item.imgSrc;

        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //.classList allowed a class to be given to each of the elements that were created just above it.
        // a loop needs to be added next becuase it is only generating one card

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        // appendChild is needed to attch the cards to the section so it appears the screen
    });
};

cardGenerator();

//console.log as undefined, why? Return cardData is  added to randomize variable function.
// A return needs to be added because it runs and finishes but at the end it does not return anything, 
// so return is needed for the cardGenerator function to work.

