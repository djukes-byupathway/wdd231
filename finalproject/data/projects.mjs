const projects = [
    {
        name: "Dave Stinks at Painting Minis",
        target_release: "Winter 2026",
        system: "DnD",
        status: "In Development",
        description: "Series of short videos of Dave trying to figure out what the hell is going wrong with the paint, brush, or design of minis that stop him from wanted to finish."
    }, {
        name: "Valeigh",
        target_release: "Winter/Spring 2027",
        system: "DnD",
        status: "In Development",
        description: "Valeigh is a world of dichotomies. The hellish environment of decaying inner cities in magically industrialized states juxtaposes with the lush green jungles and the happy folk who populate them. Will you bring these new lands to heel and spread the corruption of your home state, or will you embrace the lifestyle of the savages? "
    }, {
        name: "Dark World",
        target_release: "2028",
        system: "DnD",
        status: "Conceptual Development",
        description: "This world is vile, and an affront to true creation! An affront I say. THe Holy Council declares is so, Praise Remin, it does! We are not the childre of this world, we are the cure of the gods. The forces of evil created this vile orb, they broke the ruiles of eternity. Evil CREATED! This is the affront, my flock, this IS the affront! Praise Remin who found this abomination. Praise Dumul, praise Bengarl, praise Ebul, Praise Delriene, Praise Fossergrim, Praise Maygone. Praise all of the Holy Council of Gods for bringing us to this world to cure it. Raise your weapons, Raise your Cure!"
    }, {
        name: "Planet of the Orc",
        target_release: "2029",
        system: "DnD",
        status: "Planned",
        description: "Spoof off of the Planet of the Apes series of movies, only this time the setting is planing hopping adventurers are dropped into a world where Orc thanes lead northern European style civilizations against the Goblin Empire led by the Bugbear senators, expanded by hobgoblin centurians, supplied through citizen goblins whose industry is propped up by slave labor of the lower races, the elf, the dwarf, and the short lived, halflings and humans. Across the sea a grand civilization blossoms in the arid environment, Kobalds magically weaving together cities, pyramids, and massive monuments through their innate connection to aether."
    }, {
        name: "Seekers",
        target_release: "Spring 2030",
        system: "DnD",
        status: "Planned",
        description: "Plucked from your world by a mad wizard, given a simple ultimatum, find some esoteric artifact within 90 days, or die. Your party must band together, avoid deadly flora and fauna, make friends, and get your hands on that artifact! This one can be great fun for DMs who want to poke at murder hobo parties, a little Suicide Squad action."
    }
];

function displayProducts(projects) {
    const projectContainer = document.querySelector("#projects");

    projects.forEach(element => {
        // card element
        const theCard = document.createElement('div');
        theCard.classList.add("card");

        // title element
        const theTitle = document.createElement('h3');
        theTitle.innerText = element.name;
        theCard.appendChild(theTitle);

        //release
        const targetRelease = document.createElement('span');
        targetRelease.innerText = element.system;
        targetRelease.classList.add = "release";
        theCard.appendChild(targetRelease);

        //game system
        const theSystem = document.createElement('span');
        theSystem.innerText = element.system;
        theSystem.classList.add = "system";
        theCard.appendChild(theSystem);

        //status
        const theStatus = document.createElement('span');
        theStatus.innerText = element.status;
        theStatus.classList.add = "status";
        theCard.appendChild(theStatus);

        //description
        const theDesc = document.createElement('p');
        theDesc.innerText = element.description;
        theCard.appendChild(theDesc);

        projectContainer.appendChild(theCard);

    }

    );
}

export { projects, displayProducts };

