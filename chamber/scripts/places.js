import { places } from '../data/discovery.mjs'
console.log(places);

const placesContainer = document.querySelector("#places");
displayItems(places);

function displayItems(places) {

    places.forEach(element => {
        console.log(element);
        // card element
        const theCard = document.createElement('div');
        //photo element
        const thePhoto = document.createElement('img');
        // thePhoto.src = `images\${element.imgurl)}`
        thePhoto.src = `images/${element.image}`;
        thePhoto.alt = element.name;
        theCard.appendChild(thePhoto);
        // title element
        const theTitle = document.createElement('h2');
        theTitle.innerText = element.name;
        theCard.appendChild(theTitle);
        //address
        const theAddress = document.createElement('address');
        theAddress.innerText = element.address;

        theCard.appendChild(theAddress);
        //description
        const theDesc = document.createElement('p');
        theDesc.innerText = element.description
        theCard.appendChild(theDesc);

        placesContainer.appendChild(theCard);

    }
    );







}