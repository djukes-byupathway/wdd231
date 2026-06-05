
const url = 'https://djukes-byupathway.github.io/wdd231/chamber/data/memberlevel.json';
const cards = document.querySelector('#cardcontainer');

//dialog elements
const mydialog = document.querySelector("#memberLevel");
const myClose = document.querySelector("#dialogClose");
const myTitle = document.querySelector("#myTitle");
const priceP = document.querySelector("#priceP");
const beneTitle = document.querySelector("#memberLevel h3");
const beneList = document.querySelector("#memberLevel ul");


async function getMemberLevels() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members); // temporary testing of data response
    displayLevels(data.levels);
} // end member data

getMemberLevels();
mydialog.close();

myClose.addEventListener("click", () => mydialog.close());

const displayLevels = (levels) => {
    levels.forEach((level) => {

        const card = document.createElement('div');
        card.classList.add('card');

        let cardHeading = document.createElement('h3');
        cardHeading.innerHTML = level.name;

        let btnDetails = document.createElement('button');
        btnDetails.textContent = 'View Details';
        btnDetails.addEventListener('click', () => showDialog(level));

        card.appendChild(cardHeading);
        card.appendChild(btnDetails);
        cards.appendChild(card);
    });
} // end display members


function showDialog(level) {
    //set values of existing elements
    myTitle.innerHTML = level.name;
    priceP.innerHTML = `Annual Price(USD): ${level.price}`;
    // add benefits from json
    beneList.replaceChildren();
    level.benefits.forEach(benefit => {
        let beneLI = document.createElement('li');
        beneLI.innerHTML = benefit;
        beneList.appendChild(beneLI);
    });
   
    mydialog.showModal();
}
