//selects the section part of the html and assigns it to section
const section = document.querySelector("section");

// selects the span on the html and assigns it to result
const result = document.querySelector("span");

//generate images and name of images in an array using an arrow function
//arrow function represents owner of function, so getData is the owner of the array function
const getData = () => [
    { imgSrc: "./images/caio.jpg", name: "caio puppies" },
    { imgSrc: "./images/huskies.jpg", name: "puppy huskies" },
    { imgSrc: "./images/puppies-in-basket.jpg", name: "puppies in a basket" },
    { imgSrc: "./images/puppies-in-truck.jpg", name: "puppies in a truck" },
    { imgSrc: "./images/puppy-with-ball.jpg", name: "puppy with ball" },
    { imgSrc: "./images/puppy-in-sunglasses.jpg", name: "puppy in sunglasses" },
    { imgSrc: "./images/puppy-in-tea-cup.jpg", name: "puppy in a tea cup" },
    { imgSrc: "./images/two-golden-retrievers.jpg", name: "two golden retriever puppies" },
    { imgSrc: "./images/caio.jpg", name: "caio puppies" },
    { imgSrc: "./images/huskies.jpg", name: "puppy huskies" },
    { imgSrc: "./images/puppies-in-basket.jpg", name: "puppies in a basket" },
    { imgSrc: "./images/puppies-in-truck.jpg", name: "puppies in a truck" },
    { imgSrc: "./images/puppy-with-ball.jpg", name: "puppy with ball" },
    { imgSrc: "./images/puppy-in-sunglasses.jpg", name: "puppy in sunglasses" },
    { imgSrc: "./images/puppy-in-tea-cup.jpg", name: "puppy in a tea cup" },
    { imgSrc: "./images/two-golden-retrievers.jpg", name: "two golden retriever puppies" },
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

    //console.log as undefined, why? Return cardData is  added to randomize variable function.
    // A return needs to be added because it runs and finishes but at the end it does not return anything, 
    // so return is needed for the cardGenerator function to work.
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
        const face = document.createElement("img");
        // this will create the back of the card
        const back = document.createElement("div");

        //add image source for the face of the card
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);
        //just needed to add the setAttribute to get the name of the image from the index file above. item.name allows the javascript to grab the name
        //from the item (image)

        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //.classList allowed a class to be given to each of the elements that were created just above it.
        // a loop needs to be added next becuase it is only generating one card

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        // appendChild is needed to attch the cards to the section so it appears the screen


        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            //created a class named toggleCard related to the function of when you click the image
            //it will "toggle" based on the discription in the css. Css uses the class that is assigned here. Because of the css, we can tranform 
            //(create a toggle) that flips the cards over, so you can see the image. 

            checkCards(e);
            //the checkCards function created below needs to be used within this function, because we want to check the cards every time it is clicked.
            //e is added so the event can be passed down.
        });
    });
}

//need to check cards to see if they match together. 
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCard = document.querySelectorAll(".flipped");
    //every time something is clicked, a flipped class is added to it

    //I know an if, else needed to be used in order to get the images to match. I was thinking of how if the statement is true it does this,
    //and if it is false, it does the else statement
    if (flippedCard.length === 2) {

        //had to be a complete equal to 2. I don't want the player being able to flip over more than 3 cards at once
        if (
            flippedCard[0].getAttribute("name") ===
            flippedCard[1].getAttribute("name"))
        //this checks the two cards that we filled to see if they match by checking the name element with the image
        {
            console.log("match");
            flippedCard.forEach(card => {
                //the class name flipped needs to be removed
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
        } else {
            //the else function is what the cards do if they do not match. 
            console.log("wrong");
            flippedCard.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
                //a timeout needed to be added so the cards stayed flipped over long enough so that the player can see what image they have flipped over.
                //a time out is like a pause function, and you can set how long you want the pause
            });

            //resultDisplay.textContent = cardsWon.length;
            //if(cardsWon.length === card.length/2) {
                //resultDisplay.textContent = 'Congrats! You found them all!'
            //}
        }
    }
};

const button = document.querySelector("button");
button.addEventListener('click', () => {
    //console.log("reset");
    let cardData = randomize();
    let faces = document.querySelectorAll(".faces");
    let cards = document.querySelectorAll(".card");
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        //A bug that resets the cards to the blank side but doesn't randomize or let the matched cards be selected again. 
        cards[index].classList.remove("flipped");
    });
});

//I got the reset button to work. Needed to move the script link in the html to the very bottom, which allowd the eventlistener to be recognized
//I had some typos, such as capital letters that shouldn't be there, which caused the code to not recognize variables


cardGenerator();





//https://www.youtube.com/watch?v=-tlb4tv4mC4 was used to help with functionality. Did a lot of research and note taking on certain things
//and why they were done a certain way. I did understand most of why certain things were picked.
//I knew before he did the if else statements, those were going to be needed to get the cards to match or not. They create true/false and then 
//say what to do next if the first statement is false. 

