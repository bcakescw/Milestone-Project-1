//selects the section part of the html and assigns it to section
const section = document.querySelector("section");

// selects the span on the html and assigns it to result
const result = document.querySelector("span");

//generate images and name of images in an array using an arrow function
//arrow function represents owner of function, so getData is the owner of the array function
const getData = () => [
    { imgSrc: "./images/AnemometerPic.jpeg", name: "anemometer picture" },
    { imgSrc: "./images/Anemometer.jpg", name: "anemometer definition" },
    { imgSrc: "./images/Barometer.jpg", name: "barometer definition" },
    { imgSrc: "./images/mercury-barometer-science-photo-library.jpeg", name: "barometer picture" },
    { imgSrc: "./images/Rain-gauge.jpeg", name: "rain gauge picture" },
    { imgSrc: "./images/rain-gauge.jpg", name: "rain gauge defintion" },
    { imgSrc: "./images/thermometer.jpeg", name: "thermometer picture" },
    { imgSrc: "./images/Thermometer.jpg", name: "thermometer defintion" },
    { imgSrc: "./images/weather-icon.png", name: "weather icon" },
    //not all images are working, why? simple fix, needed to make sure the .jpg or .jpeg matched with the appropriate image. 
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

        //add image source for the face of the card
        face.src = item.imgSrc;

        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //.classList allowed a class to be given to each of the elements that were created just above it.
        // a loop needs to be added next becuase it is only generating one card

        grid.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        // appendChild is needed to attch the cards to the section so it appears the screen

        //add an evenlistener that when card is clicked it flips it. 
        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
            // e connects to the function down below where e is targeted
        });
    });
};

//need to check cards to see if they match together. 
const checkCards = (e) => {
    const clickedCard = e.target;
    console.log(clickedCard);
}
cardGenerator();

//console.log as undefined, why? Return cardData is  added to randomize variable function.
// A return needs to be added because it runs and finishes but at the end it does not return anything, 
// so return is needed for the cardGenerator function to work.