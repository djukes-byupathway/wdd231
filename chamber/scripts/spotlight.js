
const url = 'https://djukes-byupathway.github.io/wdd231/chamber/data/members.json';

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members); // temporary testing of data response
    
    //filter members to just level 1 and level 2
    const spotlight = data.members.filter(member => member.memberlevel >1);
    
    displayMembers(spotlight);
} // end member data

getMemberData();

function showList() {
    cards.classList.add("list");
    cards.classList.remove("grid");
}

const displaySpotlight = (members) => {
   
    // shuffle the deck so to speak
    const mixedup = members.sort(() => Math.random - 0.5);
    const spotlightMembers = mixedup.slice(0, Math.min(3, member.length));
    /*
 
 <div id="spotlight" class="spotlight">
             <h2>
                 member highlight
             </h2>
             <div class="spot">
                 <div>
                     <h3>Business Name</h3>
                     <p>Business Tag Line</p>
                 </div>
                 <div class="spot-details">
                     <img src="https://djukes-byupathway.github.io/wdd231/chamber/images/missingpiecesagency_logo.jpeg"
                         alt="Missing Pieces Agency">
                     <p class="email">Email: info@gmail.com</p>
                     <p class="phone">Phone: 800-867-5309</p>
                     <p class="website">url: mybusiness.com</p>
                 </div>
             </div>
             <div class="spot">
                 <div>
                     <h3>Business Name</h3>
                     <p>Business Tag Line</p>
                 </div>
                 <div class="spot-details">
                     <img src="https://djukes-byupathway.github.io/wdd231/chamber/images/missingpiecesagency_logo.jpeg"
                         alt="Missing Pieces Agency">
                     <p class="email">Email: info@gmail.com</p>
                     <p class="phone">Phone: 800-867-5309</p>
                     <p class="website">url: mybusiness.com</p>
                 </div>
             </div>
             <div class="spot">
                 <div>
                     <h3>Business Name</h3>
                     <p>Business Tag Line</p>
                 </div>
                 <div class="spot-details">
                     <img src="https://djukes-byupathway.github.io/wdd231/chamber/images/missingpiecesagency_logo.jpeg"
                         alt="Missing Pieces Agency">
                     <p class="email">Email: info@gmail.com</p>
                     <p class="phone">Phone: 800-867-5309</p>
                     <p class="website">url: mybusiness.com</p>
                 </div>
             </div>
 
         </div>
 
 
 
 
 
 
  */
   
   
   
    spotlightMembers.forEach((member) => {

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

