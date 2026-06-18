const myInfo = new URLSearchParams(window.location.search);



function displayResults(myInfo) {
    //console.log(myInfo);
    document.querySelector('#results').innerHTML = `
        <p>${myInfo.get('first')} ${myInfo.get('last')} , Thank you for your interest in Vault Of Jukes. </p>
        <p>We have added you to our mailing list with the following email: ${myInfo.get('email')}
        <br>
        <br>
        Interests:<br>
        Role Playing Games: ${myInfo.get('rpg') ?? "No"}<br>
        Collectible Card Game: ${myInfo.get('ccg') ?? "No"}<br>
        Board Games: ${myInfo.get('bg') ?? "No"}<br>
        TT Mini Skirmish Games: ${myInfo.get('skirmish') ?? "No"}<br>
        TT Mini War Games: ${myInfo.get('war') ?? "No"}<br>
        <br>
        <br>
        Feedback:<br>
        ${myInfo.get('desc')}

        </p >
    `;
}

export { myInfo, displayResults };