const url = 'https://github.com/djukes-byupathway/wdd231/blob/main/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    prophets.forEach((member) => {
        //create card element 
        let card = document.createElement('section');
        // let logo = document.createElement('img');
        let company = document.createElement('h2');
        let addr = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

/* 
        // create logo image element
        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Logo for ${member.company} `);
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440'); */
        
        //h2
        company.innerHTML = `${company}`;

        //create address element
        addr.innerHTML = `${address}`;
        // create phone number element
        addr.innerHTML = `${phone}`;
        //create  url element
        addr.innerHTML = `${url}`;

        // Append the section(card) with the created elements
        card.appendChild(company);
        card.appendChild(addr);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

