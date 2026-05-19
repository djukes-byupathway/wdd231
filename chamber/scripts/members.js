
const url = 'https://djukes-byupathway.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');
const gridbutton = document.querySelector("#btnGrid")
const listbutton = document.querySelector("#btnList")

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members); // temporary testing of data response
    displayMembers(data.members);
} // end member data

getMemberData();

gridbutton.addEventListener("click", () => {
    // example using arrow function
    cards.classList.add("grid");
    cards.classList.remove("list");
});


listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    cards.classList.add("list");
    cards.classList.remove("grid");
}


const displayMembers = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');
        let company = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');

        let web = document.createElement('a');

        let txtAddress = member.address;
        let txtPhone = member.phone;
        let txtWebsite = member.url;


        //
        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', member.company);
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');
        //
        company.innerHTML = member.company;
        //
        address.innerHTML = txtAddress;
        phone.innerHTML = txtPhone

        web.setAttribute('href', `${txtWebsite}`);
        web.textContent = txtWebsite;

    
        //
        card.appendChild(logo);
        card.appendChild(company);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(web);

        //
        cards.appendChild(card);
    });
} // end display members

