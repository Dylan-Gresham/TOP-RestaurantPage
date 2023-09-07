// Imports
import SampleLogo from './Restaurant_Sample_Logo.jpg'
import InstagramIcon from './Instagram_Icon.png'
import FacebookIcon from './Facebook_Icon.png'

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

    // Append containers to content div
    content.append(navContainer, locationsContainer, footerContainer);
}

export {SampleLogo, initialize};