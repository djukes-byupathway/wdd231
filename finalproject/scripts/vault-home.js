import { currentyear, lastModified, displayDates } from '../scripts/getdates.mjs';

displayDates();

   

const modal = document.getElementById('formSignup');
const openBtn = document.getElementById('openSignUp');
const myClose = document.querySelector("#dialogClose");
const namesForm = document.getElementById('namesForm');

namesForm.addEventListener('submit', () => { fetchNames(event) });

myClose.addEventListener("click", () => modal.close());

// Open the modal when the trigger button is clicked
openBtn.addEventListener('click', () => {
    modal.showModal();
});

async function fetchNames(event) {
    event.preventDefault();
    console.log("debuging this.")
    const formData = new FormData(event.target)
    console.log(formData.get('gender'));
    console.log(formData.get('country'));
    console.log(formData.get('numNames'));

    const urlName = `https://api.parser.name/?api_key=14d2dccb4e74d7440696f5d8451b1f23&endpoint=generate&gender=${formData.get('gender')}&results=${formData.get('numNames')}&country_code=${formData.get('country')}`;
    console.log(urlName);

    try {
        let response = await fetch(urlName);
        if (response.ok) {
            let data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
            //
            // return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    
};
