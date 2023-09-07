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
    const locationsContainer = document.createElement('div');
    locationsContainer.id = 'locationsContainer';
    const footerContainer = document.createElement('div');
    footerContainer.id = 'footerContainer';

    // Begin Create nav bar
    const nav = document.createElement('nav');
    nav.id = 'nav';

    // Create and Add logo
    const logoImg = new Image();
    logoImg.src = SampleLogo;
    logoImg.id = 'logoImg';
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

    // Begin Locations box
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
    locationBoxes.forEach( (location) => {
        let idIndex = '';
        if(i === 1) {
            idIndex = 'One';
        } else if(i === 2) {
            idIndex = 'Two';
        } else if(i === 3) {
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
    locationsContainer.append(locationOne, locationTwo, locationThree, locationFour);
    // End Locations Box

    // Append containers to content div
    content.append(navContainer, locationsContainer, footerContainer);
}

export {SampleLogo, initialize};