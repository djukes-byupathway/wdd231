const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
// use the date object
function displayDates() {
const today = new Date();
currentyear.innerHTML = `©<span>${today.getFullYear()}</span>`;
lastModified.innerHTML = `Last Modification: <span>${document.lastModified}`;
};

export {currentyear, lastModified, displayDates};
