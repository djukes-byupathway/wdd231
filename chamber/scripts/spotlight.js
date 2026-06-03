
const url = 'https://djukes-byupathway.github.io/wdd231/chamber/data/members.json';

const cards = document.querySelector('#spotlight');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members); // temporary testing of data response

    //filter members to just level 1 and level 2
    const spotlight = data.members.filter(member => member.memberlevel > 1);

    displaySpotlight(spotlight);
} // end member data

getMemberData();

const displaySpotlight = (members) => {

    // shuffle the deck so to speak
    const mixedup = members.sort(() => Math.random - 0.5);
    const spotlightMembers = mixedup.slice(0, Math.min(3, members.length));


    spotlightMembers.forEach((member) => {
        //create card
        let card = document.createElement('div');
        card.classList.add("spot");
        // create card header
        let cardtitle = document.createElement('div');
        cardtitle.classList.add("spotheading");

        let company = document.createElement('h3');
        company.innerHTML = member.company;
        let tagline = document.createElement('p');
        tagline.innerHTML = member.about;

        cardtitle.appendChild(company);
        cardtitle.appendChild(tagline);
        card.appendChild(cardtitle);

        //create details
        let carddeets = document.createElement('div');
        carddeets.classList.add("spot-details");

        let logo = document.createElement('img');
        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', member.company);
        carddeets.appendChild(logo);

        let email = document.createElement('p');
        let txtemail = member.email;
        email.innerHTML = `Email: ${txtemail}`;
        carddeets.appendChild(email);

        let phone = document.createElement('p');
        let txtPhone = member.phone;
        phone.innerHTML = `Phone: ${txtPhone}`;
        carddeets.appendChild(phone);

        let web = document.createElement('p');
        let txtWebsite = member.url;
        web.innerHTML = `URL: <a href = "${txtWebsite}" >${txtWebsite}</a>`;
        carddeets.appendChild(web);

        card.appendChild(carddeets);


        //
        cards.appendChild(card);
    });
} // end display members

