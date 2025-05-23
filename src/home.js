import logoImage from "/image/Logo.png";
import maidGroupImage from "/image/maid-group.png";
import pekoraMaidImage from "/image/pekora-maid.png";
import mikoMaidImage from "/image/miko-maid.png";
import performanceImage from "/image/performances.png";

export function createHomePage(contentDiv) {
  const homePage = document.createElement('div');
  homePage.className = 'container';

 const logo = document.createElement('img');
 logo.src = logoImage;
 logo.alt = 'Logo';
 logo.className = 'logo';
logo.onclick = function() {
   window.location.href = '/'; // assuming your homepage is at the root URL
 };
 

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';
headerContainer.style.marginBottom = '20px'; // add margin bottom
homePage.appendChild(headerContainer);

const cafeName = document.createElement('h1');
cafeName.textContent = 'Usagi House';
cafeName.className = 'center-text usagi-house-title';
headerContainer.appendChild(cafeName);

const heading = document.createElement('h1');
heading.textContent = '🎀Welcome to Your Happy Place, Master & Princess!🎀';
heading.style.marginTop = '20px'; // add margin top
headerContainer.appendChild(heading);

const maidGroup = document.createElement('img');
maidGroup.src = maidGroupImage;
maidGroup.alt = 'Group of Japanese maids for a cafe';
maidGroup.className = 'full-width-image';
maidGroup.style.marginTop = '20px'; // add margin top
homePage.appendChild(maidGroup);

const description = document.createElement('p');
description.className = 'description-text';
description.innerHTML = '"Our adorable maids are ready to pamper you with tasty treats, fun games, and the cutest service in town!<br>Every visit is a special moment—so sit back, enjoy a fluffy pancake, and let us bring a little sparkle to your day!"';
description.style.marginTop = '20px'; // add margin top
description.style.textAlign = 'center'; // add text align
description.style.fontSize = '24px'; // add font size
homePage.appendChild(description);

const performanceText = document.createElement('h2');
performanceText.innerHTML = '<span class="performance-title">Live Performance Every Hour!</span>';
performanceText.style.marginTop = '40px'; // add margin top
homePage.appendChild(performanceText);

const performanceImg1 = document.createElement('img');
performanceImg1.src = performanceImage;
performanceImg1.alt = 'Performance Image';
performanceImg1.className = 'performance-image';
performanceImg1.style.marginTop = '20px'; // add margin top
homePage.appendChild(performanceImg1);

const hoursContainer = document.createElement('div');
hoursContainer.className = 'hours-container';
hoursContainer.style.marginTop = '40px'; // add margin top
homePage.appendChild(hoursContainer);

const hours = document.createElement('p');
hours.className = 'hours-text';
hours.innerHTML = '<span class="hours-container-header">Hours of Operation</span>';
hoursContainer.appendChild(hours);

const hoursList = document.createElement('ul');
hoursContainer.appendChild(hoursList);

const mondayThursday = document.createElement('li');
mondayThursday.textContent = 'Monday - Thursday: 11am - 10pm';
hoursList.appendChild(mondayThursday);

const fridaySaturday = document.createElement('li');
fridaySaturday.textContent = 'Friday - Saturday: 11am - 11pm';
hoursList.appendChild(fridaySaturday);

const sunday = document.createElement('li');
sunday.textContent = 'Sunday: 12pm - 9pm';
hoursList.appendChild(sunday);

const reservationButtonContainer = document.createElement('div');
reservationButtonContainer.className = 'reservation-button-container';
homePage.appendChild(reservationButtonContainer);

const reservationButton = document.createElement('button');
reservationButton.className = 'reservation-button';
reservationButton.textContent = 'Make a Reservation';
reservationButtonContainer.appendChild(reservationButton);

  const specialEvent = document.createElement('h2');
  specialEvent.innerHTML = '<span class="special-event-header">Special Event</span>';
  homePage.appendChild(specialEvent);

  const specialEventDescription = document.createElement('p');
  specialEventDescription.className = 'special-event-description';
  specialEventDescription.textContent = '"Hololive x Usagi House with guest maids Usada Pekora and Sakura Miko"';
  homePage.appendChild(specialEventDescription);

  const specialEventPictures = document.createElement('div');
  specialEventPictures.className = 'special-event-pictures';
  homePage.appendChild(specialEventPictures);

  const picture1Container = document.createElement('div');
  picture1Container.className = 'picture-container';
  specialEventPictures.appendChild(picture1Container);
  
  const picture1Name = document.createElement('p');
  picture1Name.textContent = 'Usada Pekora';
  picture1Name.className = 'picture-name';
  picture1Container.appendChild(picture1Name);
  
  const picture1 = document.createElement('img');
  picture1.src = pekoraMaidImage;
  picture1.alt = 'Usada Pekora as a maid';
  picture1Container.appendChild(picture1);
  
  const picture2Container = document.createElement('div');
  picture2Container.className = 'picture-container';
  specialEventPictures.appendChild(picture2Container);
  
  const picture2Name = document.createElement('p');
  picture2Name.textContent = 'Sakura Miko';
  picture2Name.className = 'picture-name';
  picture2Container.appendChild(picture2Name);
  
  const picture2 = document.createElement('img');
  picture2.src = mikoMaidImage;
  picture2.alt = 'Sakura Miko as a maid';
  picture2Container.appendChild(picture2);
  contentDiv.appendChild(homePage);
  
  const location = document.createElement('p');
  location.innerHTML = '<span class="location-header">Location</span>';
  location.className = 'location';
  location.style.fontSize = '24px';
  location.style.fontWeight = 'bold';
  homePage.appendChild(location);

  const map = document.createElement('div');
  map.className = 'map';
  homePage.appendChild(map);

  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.472111111111!2d-118.243822!3d34.055351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe2940bf76e21f7b!2s113%20San%20Pedro%20St%2C%20Los%20Angeles%2C%20CA%2090012!5e0!3m2!1sen!2sus!4v1643723401111!5m2!1sen!2sus';
  iframe.width = '600';
  iframe.height = '450';
  iframe.frameBorder = '0';
  iframe.style.border = '0';
  iframe.allowFullScreen = true;
  iframe.ariaHidden = false;
  iframe.tabIndex = '0';
  map.appendChild(iframe);

  contentDiv.appendChild(homePage);
}