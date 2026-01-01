
// List of cars in our inventory.  A real site would pull this from an endpoint of course but ..
const carDB = [
    {
        manufacturer: 'Tesla',
        model: 'Model 3 (1)',
        bodyStyle: 'Saloon',
        colour: 'White',
        firstRegistered: 2022,
        wheelDrive: 'AWD',
        range: 'long',
        gallery: [
            './img/car-0.0-683x455.jpg',
            './img/car-0.1-683x455.jpg',
            './img/car-0.2-683x455.jpg',
            './img/car-0.3-683x455.jpg'
        ],
        description: [
            `Travis Cars is extremely proud to present for sale this stunning Tesla Model 3 Long Range AWD (MY22) Finished in the highly sought after Pearl White Metallic and equally gorgeous upgraded black "vegan leather" interior, this Model 3 is kitted out well with the all important heat pump & electric tailgate. Plus it's also been accessorised with an adjustable infotainment screen. Benefitting from the frankly ridiculous acceleration even from this model, this car will get you from 0-62mph in 4.6 seconds and rides on the visually enhancing aero 18"alloy wheels. The updated Long Range Model 3 has a WLTP-rated range of 360 miles from its 75kWh battery meaning even the longest of journeys can be tackled with no range anxiety. This is helped by access to the network of Tesla Superchargers which can provide charging speeds of up to 250kW. The Tesla really is at the cutting edge of the EV market, highlighted by the fact that asking the Google Maps-powered Sat-Nav to navigate to a charger will start to pre-condition the battery just before you arrive to ensure the highest possible charging speeds are achieved. What does this mean? Well, a 0-80% charge can be achieved in as little as 15-20mins. Keeping you entertained while the car is charging is also easy with the Tesla's suite of video content, games and music with access to YouTube, Netflix, Spotify etc The Tesla app gives you access to all aspects of the car, including pre-heating the car on frosty mornings, viewing live footage of the car's dash-cams from anywhere in the world with Sentry mode and setting timed charging schedules to benefit from off-peak electricity tariffs.`,
            'Having covered 81,000 miles in the possession of its 1 owner from new, this Model 3 has been well cared for with the black leather seats in excellent condition as well as the bodywork. ',
            'The car has a manufacturer warranty until 29/06/2030 or 120,000 miles'
        ],
        status: 'sold',
        price: 0,
        features: ''
    },
        {
        manufacturer: 'Tesla',
        model: 'Model 3 (2)',
        bodyStyle: 'Saloon',
        colour: 'White',
        firstRegistered: 2022,
        wheelDrive: 'AWD',
        range: 'long',
        gallery: [
            './img/car-0.0-683x455.jpg',
            './img/car-0.1-683x455.jpg',
            './img/car-0.2-683x455.jpg',
            './img/car-0.3-683x455.jpg'
        ],
        description: [
            `Travis Cars is extremely proud to present for sale this stunning Tesla Model 3 Long Range AWD (MY22) Finished in the highly sought after Pearl White Metallic and equally gorgeous upgraded black "vegan leather" interior, this Model 3 is kitted out well with the all important heat pump & electric tailgate. Plus it's also been accessorised with an adjustable infotainment screen. Benefitting from the frankly ridiculous acceleration even from this model, this car will get you from 0-62mph in 4.6 seconds and rides on the visually enhancing aero 18"alloy wheels. The updated Long Range Model 3 has a WLTP-rated range of 360 miles from its 75kWh battery meaning even the longest of journeys can be tackled with no range anxiety. This is helped by access to the network of Tesla Superchargers which can provide charging speeds of up to 250kW. The Tesla really is at the cutting edge of the EV market, highlighted by the fact that asking the Google Maps-powered Sat-Nav to navigate to a charger will start to pre-condition the battery just before you arrive to ensure the highest possible charging speeds are achieved. What does this mean? Well, a 0-80% charge can be achieved in as little as 15-20mins. Keeping you entertained while the car is charging is also easy with the Tesla's suite of video content, games and music with access to YouTube, Netflix, Spotify etc The Tesla app gives you access to all aspects of the car, including pre-heating the car on frosty mornings, viewing live footage of the car's dash-cams from anywhere in the world with Sentry mode and setting timed charging schedules to benefit from off-peak electricity tariffs.`,
            'Having covered 81,000 miles in the possession of its 1 owner from new, this Model 3 has been well cared for with the black leather seats in excellent condition as well as the bodywork. ',
            'The car has a manufacturer warranty until 29/06/2030 or 120,000 miles'
        ],
        status: 'sold',
        price: 0,
        features: ''
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3 (3)',
        bodyStyle: 'Saloon',
        colour: 'White',
        firstRegistered: 2022,
        wheelDrive: 'AWD',
        range: 'long',
        gallery: [
            './img/car-0.0-683x455.jpg',
            './img/car-0.1-683x455.jpg',
            './img/car-0.2-683x455.jpg',
            './img/car-0.3-683x455.jpg'
        ],
        description: [
            `Travis Cars is extremely proud to present for sale this stunning Tesla Model 3 Long Range AWD (MY22) Finished in the highly sought after Pearl White Metallic and equally gorgeous upgraded black "vegan leather" interior, this Model 3 is kitted out well with the all important heat pump & electric tailgate. Plus it's also been accessorised with an adjustable infotainment screen. Benefitting from the frankly ridiculous acceleration even from this model, this car will get you from 0-62mph in 4.6 seconds and rides on the visually enhancing aero 18"alloy wheels. The updated Long Range Model 3 has a WLTP-rated range of 360 miles from its 75kWh battery meaning even the longest of journeys can be tackled with no range anxiety. This is helped by access to the network of Tesla Superchargers which can provide charging speeds of up to 250kW. The Tesla really is at the cutting edge of the EV market, highlighted by the fact that asking the Google Maps-powered Sat-Nav to navigate to a charger will start to pre-condition the battery just before you arrive to ensure the highest possible charging speeds are achieved. What does this mean? Well, a 0-80% charge can be achieved in as little as 15-20mins. Keeping you entertained while the car is charging is also easy with the Tesla's suite of video content, games and music with access to YouTube, Netflix, Spotify etc The Tesla app gives you access to all aspects of the car, including pre-heating the car on frosty mornings, viewing live footage of the car's dash-cams from anywhere in the world with Sentry mode and setting timed charging schedules to benefit from off-peak electricity tariffs.`,
            'Having covered 81,000 miles in the possession of its 1 owner from new, this Model 3 has been well cared for with the black leather seats in excellent condition as well as the bodywork. ',
            'The car has a manufacturer warranty until 29/06/2030 or 120,000 miles'
        ],
        status: 'sold',
        price: 0,
        features: ''
    }

];


function buildCard(carRecord) {
    /* Create elements for Bootstrap card */
    const card = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardText = document.createElement('p');
    const cardBody = document.createElement('div');

    /* Add appropriate classes to our elements */
    card.classList.add('card');
    card.classList.add('col-md-5');
    cardBody.classList.add('card-body');
    cardTitle.classList.add('card-title');
    cardText.classList.add('card-text');

    /* Add hierarchy to form our card */
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    /* Add in data from our param object */
    cardTitle.textContent = `${carRecord.manufacturer} ${carRecord.model}`;

    /* Encourage description to only display a few lines by default, with an ellipsis */
    cardText.style.whiteSpace = 'pre-wrap';     // Allow each new description to start on a new line
    cardText.style.display = '-webkit-box';
    cardText.style.webkitBoxOrient = 'vertical';// Deprecated but still necessary apparently */
    cardText.style.overflow = 'hidden';
    cardText.style.webkitLineClamp = 6;         // Only display six lines */

    /* Add all the descriptions to the card */
    carRecord.description.forEach((element,index) => {
        cardText.textContent += element;

        if (index < carRecord.description.length-1) { cardText.textContent += '\n'; };
    });

    return card;
}


//
// GLOBAL MAIN CODE
//
{
    const cardContainer = document.getElementById('card-container');

    carDB.forEach(element => {
        const newCard = buildCard(element);
        cardContainer.appendChild(newCard);
    });
}