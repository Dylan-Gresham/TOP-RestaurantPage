// Imports
import SampleLogo from './images/Restaurant_Sample_Logo.jpg'
import InstagramIcon from './images/Instagram_Icon.png'
import FacebookIcon from './images/Facebook_Icon.png'
import LocationImgOne from './images/McDonald\'s_Logo.svg'
import LocationImgTwo from './images/Chick-fil-A_Logo.svg'
import LocationImgThree from './images/Wendy\'s_Logo.svg'
import LocationImgFour from './images/KFC_Logo.svg'

function initialize(content) {
    // Create the main containers
    const navContainer = document.createElement('div');
    navContainer.id = 'navContainer';
    const mainContainer = document.createElement('div');
    mainContainer.id = 'mainContainer';
    const footerContainer = document.createElement('div');
    footerContainer.id = 'footerContainer';

    // Begin Create nav bar
    const nav = document.createElement('nav');
    nav.id = 'nav';

    // Create and Add logo
    const logoImg = new Image();
    logoImg.src = SampleLogo;
    logoImg.id = 'logoImg';
    logoImg.addEventListener('click', (event) => {
        makeLocationsContainer(mainContainer);

        event.stopPropagation();
    });
    nav.appendChild(logoImg);

    // Create and Add Links
    const linksDiv = document.createElement('div');
    linksDiv.id = 'navLinksDiv';

    const leftLinksDiv = document.createElement('div');
    leftLinksDiv.id = 'navLinksLeft';

    const linkOne = document.createElement('a'); // Locations
    linkOne.id = 'locationsLink';
    linkOne.classList.add('textLink');
    linkOne.textContent = 'Locations';
    const linkTwo = document.createElement('a'); // Menu
    linkTwo.id = 'menuLink';
    linkTwo.classList.add('textLink');
    linkTwo.textContent = 'Menu';
    const linkThree = document.createElement('a'); // About
    linkThree.id = 'aboutLink';
    linkThree.classList.add('textLink');
    linkThree.textContent = 'About';
    leftLinksDiv.append(linkOne, linkTwo, linkThree);

    const rightLinksDiv = document.createElement('div');
    rightLinksDiv.id = 'navLinksRight';

    const socialOne = document.createElement('a');
    socialOne.id = 'igLink';
    const igIcon = new Image();
    igIcon.src = InstagramIcon;
    igIcon.classList.add('socialIcons');
    socialOne.appendChild(igIcon);
    const socialTwo = document.createElement('a');
    socialTwo.id = 'fbLink';
    const fbIcon = new Image();
    fbIcon.src = FacebookIcon;
    fbIcon.classList.add('socialIcons');
    socialTwo.appendChild(fbIcon);
    rightLinksDiv.append(socialOne, socialTwo);
    linksDiv.append(leftLinksDiv, rightLinksDiv);
    nav.appendChild(linksDiv);

    navContainer.appendChild(nav);
    // Finish Create nav bar

    // Begin Create content section
    makeLocationsContainer(mainContainer);
    // Finish Create content section

    // Begin Create footer
    const footerLink = document.createElement('a');
    footerLink.id = 'footerLink';
    footerLink.setAttribute('href', 'https://github.com/Dylan-Gresham/TOP-RestaurantPage');
    footerLink.setAttribute('target', '_blank');
    footerLink.textContent = 'GitHub';

    footerContainer.appendChild(footerLink);
    // Finish Create footer

    // Add button listeners
    linkOne.addEventListener('click', (event) => {
        makeLocationsContainer(mainContainer);

        event.stopPropagation();
    });

    linkTwo.addEventListener('click', (event) => {
        makeMenuContainer(mainContainer);

        event.stopPropagation();
    });

    linkThree.addEventListener('click', (event) => {
        makeAboutContainer(mainContainer);

        event.stopPropagation();
    });

    // Append containers to content div
    content.append(navContainer, mainContainer, footerContainer);
}

function emptyElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function makeLocationsContainer(container) {
    container.id = 'locationsContainer';
    // Empty the container
    emptyElement(container);

    // Create the contents
    const locationOne = document.createElement('div');
    locationOne.classList.add('locationBox');
    locationOne.id = 'locationBoxOne';
    const locationTwo = document.createElement('div');
    locationTwo.classList.add('locationBox');
    locationTwo.id = 'locationBoxTwo';
    const locationThree = document.createElement('div');
    locationThree.classList.add('locationBox');
    locationThree.id = 'locationBoxThree';
    const locationFour = document.createElement('div');
    locationFour.classList.add('locationBox');
    locationFour.id = 'locationBoxFour';

    const locationBoxes = [locationOne, locationTwo, locationThree, locationFour];
    const locationImgs = [LocationImgOne, LocationImgTwo, LocationImgThree, LocationImgFour];
    let i = 1;
    locationBoxes.forEach((location) => {
        let idIndex;
        if (i === 1) {
            idIndex = 'One';
        } else if (i === 2) {
            idIndex = 'Two';
        } else if (i === 3) {
            idIndex = 'Three';
        } else {
            idIndex = 'Four';
        }

        const locationImg = new Image();
        locationImg.src = locationImgs[i - 1];
        locationImg.id = `locationImg${idIndex}`;
        locationImg.classList.add('locationImg');

        const locationNameContainer = document.createElement('div');
        locationNameContainer.classList.add('locationNameContainer');
        locationNameContainer.id = `locationNameContainer${idIndex}`;

        const locationName = document.createElement('p');
        locationName.id = `locationName${idIndex}`;
        locationName.classList.add('locationName');
        locationName.textContent = 'City, State';
        locationNameContainer.appendChild(locationName);

        location.append(locationImg, locationNameContainer);

        i++;
    });
    container.append(locationOne, locationTwo, locationThree, locationFour);
}

function makeMenuContainer(container) {
    container.id = 'menuContainer';
    // Empty the container
    emptyElement(container);

    // Create the content containers
    const appetizers = document.createElement('div');
    const entrees = document.createElement('div');
    const desserts = document.createElement('div');
    const drinks = document.createElement('div');

    // Create the information for the different containers

    // Create info for appetizers
    const appetizersHeader = document.createElement('h2');
    appetizersHeader.textContent = 'Appetizers';
    appetizersHeader.classList.add('menuHeader');
    appetizersHeader.id = 'appetizersHeader';
    appetizers.appendChild(appetizersHeader);

    for (let i = 0; i < 5; i++) {
        const appetizer = document.createElement('p');
        appetizer.classList.add('menuItem');
        appetizer.textContent = `Insert appetizer ${i + 1} here...`;
        appetizers.appendChild(appetizer);
    }

    // Create info for entrées
    const entreesHeader = document.createElement('h2');
    entreesHeader.textContent = 'Entrees';
    entreesHeader.classList.add('menuHeader');
    entreesHeader.id = 'entreesHeader';
    entrees.appendChild(entreesHeader);

    for (let i = 0; i < 10; i++) {
        const entree = document.createElement('p');
        entree.classList.add('menuItem');
        entree.textContent = `Insert entree ${i + 1} here...`;
        entrees.appendChild(entree);
    }

    // Create info for desserts
    const dessertsHeader = document.createElement('h2');
    dessertsHeader.textContent = 'Desserts';
    dessertsHeader.classList.add('menuHeader');
    dessertsHeader.id = 'dessertsHeader';
    desserts.appendChild(dessertsHeader);

    for (let i = 0; i < 5; i++) {
        const dessert = document.createElement('p');
        dessert.classList.add('menuItem');
        dessert.textContent = `Insert dessert ${i + 1} here...`;
        desserts.appendChild(dessert);
    }

    // Create info for drinks
    const drinksHeader = document.createElement('h2');
    drinksHeader.textContent = 'Drinks';
    drinksHeader.classList.add('menuHeader');
    drinksHeader.id = 'drinksHeader';
    drinks.appendChild(drinksHeader);

    for (let i = 0; i < 10; i++) {
        const drink = document.createElement('p');
        drink.classList.add('menuItem');
        drink.textContent = `Insert dessert ${i + 1} here...`;
        drinks.appendChild(drink);
    }

    // Add elements to container
    container.append(appetizers, entrees, desserts, drinks);
}

function makeAboutContainer(container) {
    container.id = 'aboutContainer';
    // Empty the container
    emptyElement(container);

    // Create content
    const descriptionContainer = document.createElement('div');
    const descriptionHeader = document.createElement('h1');
    descriptionHeader.id = 'descriptionHeader';
    descriptionHeader.textContent = 'RESTAURANT NAME';

    const description = document.createElement('p');
    description.id = 'description';
    description.textContent = 'Insert description of restaurant here';
    descriptionContainer.append(descriptionHeader, description);

    const historyContainer = document.createElement('div');
    const historyHeader = document.createElement('h2');
    historyHeader.id = 'historyHeader';
    historyHeader.textContent = 'HISTORY';

    const history = document.createElement('p');
    history.id = 'history';
    history.textContent = 'Insert history of restaurant here';
    historyContainer.append(historyHeader, history);

    const futureContainer = document.createElement('div');
    const futureHeader = document.createElement('h2');
    futureHeader.id = 'futureHeader';
    futureHeader.textContent = 'FUTURE PLANS';

    const future = document.createElement('p');
    future.id = 'future';
    future.textContent = 'Insert plans for the future of the restaurant here.'
    futureContainer.append(futureHeader, future);

    container.append(descriptionContainer, historyContainer, futureContainer);
}

export {SampleLogo, initialize};