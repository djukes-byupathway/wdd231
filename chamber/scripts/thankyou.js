// const myInfo = new URLSearchParams(getString);
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

const rawTimestamp = myInfo.get('ts');
let dateObject;
if (rawTimestamp) {
    
    
    if (!isNaN(rawTimestamp)) {
        
        dateObject = new Date(Number(rawTimestamp));
    } else {
        
        dateObject = new Date(rawTimestamp);
    }
    
    if (!isNaN(dateObject.getTime())) {
        console.log("Valid JavaScript Date Object:", dateObject);
        console.log("Formatted Date:", dateObject.toLocaleString());
    } else {
        console.error("The extracted parameter is not a valid timestamp.");
    }
} else {
    console.log("No timestamp parameter found in the URL.");
}



document.querySelector('#results').innerHTML = `
<p>${myInfo.get('first')} ${myInfo.get('last')} , Thank you for your interest in becoming a member of the McKinney Chamber of Commerce. </p>
<p>We have created a ticket for ${myInfo.get('org')} on ${dateObject.toLocaleString() }.</p>
<p>Someone from the Chamber will contact you shortly about your request.
    We will contact you either by phone, ${myInfo.get('phone')}, or by email ${myInfo.get('email')} </p>
`;