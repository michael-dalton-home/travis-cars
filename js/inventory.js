
// List of cars in our inventory.  A real site would pull this from an endpoint of course but ..
const carDB = [
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        bodyStyle: 'Saloon',
        colour: 'White',
        firstRegistered: 'Jun 29, 2022',
        wheelDrive: 'AWD',
        range: 'Long',
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
        mileage: 81000,
        specifics: {
            soh: '',
            owners: 1,
            batteryKw: 75,
            ratedRange: 360,
            MaxChargeRateKw: 250,
            WarrantyTil: 'Jun 29, 2030',
            features: [ 'Excellent Black interior', 'Excellent Bodywork' ],
        }
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        bodyStyle: 'Saloon',
        colour: 'Grey',
        firstRegistered: '2021',
        wheelDrive: 'AWD',
        range: 'Long',
        gallery: [
            './img/car-1.0-683x455.jpg',
            './img/car-1.1-683x455.jpg',
            './img/car-1.2-683x455.jpg',
            './img/car-1.3-683x455.jpg'
        ],
        description: [
            `Travis Cars is extremely proud to present for sale this stunning Tesla Model 3 Long Range AWD (MY21) Finished in Midnight Silver Metallic (Grey) and equally gorgeous upgraded black "vegan leather" interior, this Model 3 is kitted out well with the all important heat pump & electric tailgate. Plus it's also been accessorised with an adjustable infotainment screen. Benefitting from the frankly ridiculous acceleration even from this model, this car will get you from 0-62mph in 4.6 seconds and rides on the visually enhancing aero 18"alloy wheels. The updated Long Range Model 3 has a WLTP-rated range of 360 miles from its 75kWh battery meaning even the longest of journeys can be tackled with no range anxiety. This is helped by access to the network of Tesla Superchargers which can provide charging speeds of up to 250kW. The Tesla really is at the cutting edge of the EV market, highlighted by the fact that asking the Google Maps-powered Sat-Nav to navigate to a charger will start to pre-condition the battery just before you arrive to ensure the highest possible charging speeds are achieved. What does this mean? Well, a 0-80% charge can be achieved in as little as 15-20mins. Keeping you entertained while the car is charging is also easy with the Tesla's suite of video content, games and music with access to YouTube, Netflix, Spotify etc The Tesla app gives you access to all aspects of the car, including pre-heating the car on frosty mornings, viewing live footage of the car's dash-cams from anywhere in the world with Sentry mode and setting timed charging schedules to benefit from off-peak electricity tariffs. `,
            'Having covered 116,000 miles in the possession of its 1 owner from new, this Model 3 has been well cared for with the black leather seats in excellent condition as well as the bodywork. ',
            'The car has a manufacturer warranty until 15/12/2030 or 120,000'
        ],
        status: 'onsale',
        price: 13695,
        mileage: 116000,
        specifics: {
            soh: '',
            owners: 1,
            batteryKw: 75,
            ratedRange: 360,
            MaxChargeRateKw: 250,
            WarrantyTil: 'Dec 15, 2029',
            features: [ 'Excellent Black interior', 'Excellent Bodywork' ],
        }
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        bodyStyle: 'Saloon',
        colour: 'Blue',
        firstRegistered: 'Sep 08, 2021',
        wheelDrive: 'AWD',
        range: 'Long',
        gallery: [
            './img/car-2.0-683x455.jpg',
            './img/car-2.1-683x455.jpg',
            './img/car-2.2-683x455.jpg',
            './img/car-2.3-683x455.jpg'
        ],
        description: [
            `Travis Cars is extremely proud to present for sale this stunning Tesla Model 3 Long Range AWD (MY21) Finished in the highly sought after Deep Blue Metallic  and equally gorgeous upgraded White "leather" interior, this Model 3 is kitted out well with the all important heat pump & electric tailgate. Plus it's also been accessorised with an adjustable infotainment screen. Benefitting from the frankly ridiculous acceleration even from this model, this car will get you from 0-62mph in 4.6 seconds and rides on the visually enhancing aero 18"alloy wheels. The updated Long Range Model 3 has a WLTP-rated range of 360 miles from its 75kWh battery meaning even the longest of journeys can be tackled with no range anxiety. This is helped by access to the network of Tesla Superchargers which can provide charging speeds of up to 250kW. The Tesla really is at the cutting edge of the EV market, highlighted by the fact that asking the Google Maps-powered Sat-Nav to navigate to a charger will start to pre-condition the battery just before you arrive to ensure the highest possible charging speeds are achieved. What does this mean? Well, a 0-80% charge can be achieved in as little as 15-20mins. Keeping you entertained while the car is charging is also easy with the Tesla's suite of video content, games and music with access to YouTube, Netflix, Spotify etc The Tesla app gives you access to all aspects of the car, including pre-heating the car on frosty mornings, viewing live footage of the car's dash-cams from anywhere in the world with Sentry mode and setting timed charging schedules to benefit from off-peak electricity tariffs. Having only covered 72,000 miles in the possession of its 1 owner from new, this Model 3 has been well cared for with the black leather seats in excellent condition as well as the bodywork.`,
            'For more information or to book a viewing please call us or you can drop me an email via the links attached. ',
            'The car has a manufacturer warranty until 08/09/2029 or 120,000 miles whichever comes first. '
        ],
        status: 'sold',
        price: 17980,
        mileage: 72000,
        specifics: {
            soh: '94%',
            owners: 1,
            batteryKw: 75,
            ratedRange: 360,
            MaxChargeRateKw: 250,
            WarrantyTil: 'Sep 08, 2029',
            features: [ 'heatpump', 'electric tailgate', 'Black interior' ],
        }
    }
];


function buildPill(pillTxt, clss) {
    const newPill = document.createElement('span');
    const classes = 'badge '+clss;

    newPill.textContent = pillTxt;
    newPill.classList.value = classes;

    return newPill;
}

function buildCard(carRecord) {
    /* Create elements for Bootstrap card */
    const card = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardText = document.createElement('p');
    const cardBody = document.createElement('div');
    const cardCarou = document.createElement('div');
    const cardCInner = document.createElement('div');
    const titleBox = document.createElement('div');

    /* Add appropriate classes to our elements */
    card.classList.value = 'card col-md-5 shadow';
    if (carRecord.status === 'sold') card.classList.add('car-is-sold');
    cardBody.classList.add('card-body');
    cardTitle.classList.value = 'card-title m-0 py-1';
    cardText.classList.add('card-text');
    cardCInner.classList.add('carousel-inner');
    cardCarou.classList.value = 'carousel slide pt-2';
    titleBox.classList.value = 'd-flex gap-2 py-1 w-100';

    /* Setup carousel */    
    carRecord.gallery.forEach((el, ind) => {
        const cDiv = document.createElement('div');
        const cImg = document.createElement('img');

        cDiv.classList.add('carousel-item');
        cImg.classList.add('d-block');
        cImg.classList.add('w-100');

        if (ind === 0) {
            cDiv.classList.add('active');

            if (carRecord.status === 'sold')
                cImg.classList.add('to-grey-scale');
        }

        cImg.src = el;

        cDiv.appendChild(cImg);
        cardCInner.appendChild(cDiv);
    });

    /* Add hierarchy to form our card */
    card.appendChild(cardCarou);
    card.appendChild(cardBody);
    titleBox.appendChild(cardTitle);
    cardBody.appendChild(titleBox);
    cardBody.appendChild(cardText);
    cardCarou.appendChild(cardCInner);

    /* Add in data from our param object */
    cardTitle.textContent = `${carRecord.manufacturer} ${carRecord.model}`;

    if (carRecord.status === 'sold') {
        const sold = buildPill(`SOLD`, 'bg-primary');
        sold.classList.add('fs-5');
        titleBox.appendChild(sold);
    } else {
        const cardPrice = document.createElement('h4');
        titleBox.classList.value += ' justify-content-between';
        cardPrice.classList.add('card-title');
        cardPrice.textContent = `£ ${carRecord.price}`;
        titleBox.appendChild(cardPrice);

    }

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

    /* Add controls to our carousel */
    if (carRecord.status !== 'sold') {
        cardCarou.id = `a${Math.random().toString(36).substring(2)}`;
        cardCarou.dataset.bsInterval="false";       // Don't automatically slide the carousel
        const ctlPrev = document.createElement('button');
        const prevSpan = document.createElement('span');
        ctlPrev.classList.add('carousel-control-prev');
        ctlPrev.type = 'button';
        ctlPrev.dataset.bsTarget = `#${cardCarou.id}`;
        ctlPrev.dataset.bsSlide = 'prev';
        prevSpan.classList.add('carousel-control-prev-icon');
        ctlPrev.appendChild(prevSpan);
        
        const ctlNext = document.createElement('button');
        const nextSpan = document.createElement('span');
        ctlNext.classList.add('carousel-control-next');
        ctlNext.type = 'button';
        ctlNext.dataset.bsTarget = `#${cardCarou.id}`;
        ctlNext.dataset.bsSlide = 'next';
        nextSpan.classList.add('carousel-control-next-icon');
        ctlNext.appendChild(nextSpan);

        cardCarou.appendChild(ctlNext);
        cardCarou.appendChild(ctlPrev);
    }

    /* Add sub title info */
    const subTitle = document.createElement('p');
    subTitle.textContent = `${carRecord.wheelDrive} powered, ${carRecord.range} range ${carRecord.bodyStyle}`;
    subTitle.classList.value = 'fs-6 fw-normal pt-1 mb-1 ps-1';
    titleBox.after(subTitle);

    /* Add basic info using pill badges */
    const pillBox = document.createElement('div');
    const carReg = new Date(carRecord.firstRegistered);
    pillBox.classList.value = 'd-flex gap-1 ps-1';
    pillBox.appendChild( buildPill(`${carRecord.mileage} miles`, 'bg-secondary') );
    pillBox.appendChild( buildPill(`${carRecord.specifics.owners} owner`, 'bg-secondary') );
    pillBox.appendChild( buildPill(`${carReg.getFullYear()}`, 'bg-secondary') );
    titleBox.after(pillBox);

    
    return card;
}

function handleSwitchChange(event) {

    const container = document.querySelector('#card-container');

    container.classList.toggle('hide-sold', event.target.checked);
    // toggle.addEventListener('change', (event) => {
        const isEnabled = event.target.checked;
    // document.body.classList.toggle('grayscale-mode', toggle.checked);
        console.log("Sold switch changed to " + isEnabled);
    // });
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

    const mySwitch = document.querySelector('#hideSoldSwitch');
    mySwitch.addEventListener('change', handleSwitchChange);
}