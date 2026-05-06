const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// use the date object
const today = new Date();

currentyear.innerHTML = `©<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `Last Modification: <span>${document.lastModified}`;