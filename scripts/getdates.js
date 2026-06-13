const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const dtMsg = document.querySelector("#date-msg");

// use the date object
const msToDays = 86400000;
const today = new Date();
currentyear.innerHTML = `©<span>${today.getFullYear()}</span>`;
lastModified.innerHTML = `Last Modification: <span>${document.lastModified}`;


function setdtMsgElements() {
    const newPara = document.createElement('p');
    const lastvisit = new Date(localStorage.getItem("lastvist"));

    if (lastvisit.getTime() == 0) {
        newPara.innerHTML = "Back so soon! Awesome!";
    } else {
        let days = (today.getTime() - lastvisit.getTime()) / msToDays;
        if (days < 1) {
            newPara.innerHTML = "Back so soon! Awesome!";
        } else {
            newPara.innerHTML = `You last visited ${days} days ago.`;
        }
    }

    dtMsg.appendChild(newPara);


    //adds date to local storage
    localStorage.setItem("lastvisit", today);
};
