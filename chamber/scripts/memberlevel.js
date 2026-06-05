
const url = 'https://djukes-byupathway.github.io/wdd231/chamber/data/memberlevel.json';


const cards = document.querySelector('#cardcontainer');

async function getMemberLevels() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members); // temporary testing of data response
    displayLevels(data.levels);
} // end member data

getMemberLevels();

const displayLevels = (levels) => {
    levels.forEach((level) => {

        /* 
        <div class="card">
                    <h3> Non Profit Membership </h3>
                    <button>Learn More</button>
                </div>
        */
        const card = document.createElement('div');
        card.classList.add('card');

        const cardHeading = document.createElement('h3');
        cardHeading.innerHTML = level.name;
        card.appendChild(cardHeading);
        const btnDetails = document.createElement('button');
        btnDetails.addEventListener('click', () => showDialog(level));
        card.appendChild(btnDetails);
  
        //
        cards.appendChild(card);
    });
} // end display members

