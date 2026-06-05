const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");

const dialogBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");
const closeButton = document.querySelector("#closeButton");

// show button event listener
openButton1.addEventListener("click", () => {
    dialogBoxText.innerHTML="An apple has 95 calories."
    dialogBox.showModal();
});

openButton2.addEventListener("click", () => {
    dialogBoxText.innerHTML = "An orange has 45 calories."
    dialogBox.showModal();
});

openButton3.addEventListener("click", () => {
    dialogBoxText.innerHTML = "A banana has 105 calories."
    dialogBox.showModal();
});


// close button event listener
closeButton.addEventListener("click", () => {
    dialogBox.close();
});
