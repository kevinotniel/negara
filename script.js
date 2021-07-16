'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, classname = '', dataGeo) {
  const html = `
      <article class="country ${classname}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${dataGeo}, ${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[0].nativeName
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].code
            }</p>
          </div>
      </article>
   `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJson = (url, errorMsg = 'Something went wrong') => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }

    return response.json();
  });
};

// const getCountry = country => {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);

//     const [neighbour] = data.borders;
//     console.log(neighbour);

//     if (!neighbour) return;

//  const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountry('indonesia');
// getCountry('usa')

//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

// const getFetchCountry = function (country){
//    fetch(`https://restcountries.eu/rest/v2/name/${country}`).
//    then(function(response){
//       console.log(response);
//       return response.json()
//    }).then(function(data){
//       renderCountry(data[0])
//       console.log(data);
//    })
// }

// const getFetchCountry = country => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Something went wrong (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // console.log(data);
//       const neighbour = data[0].borders[1];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//  .then(response =>{
//    if(!response.ok){
//       throw new Error(`country not found ${response.status}`)
//    }

//    response.json()
//  })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => renderError(`something went wrong ${err.message}. Try again`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getFetchCountry('indonesia');
// });
// getFetchCountry('dsadasdasd');

/*
/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

*/

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then(pos => console.log(pos));
/*
const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);
*/
// console.log('Test Start');
// setTimeout(()=> console.log('0 sec timer '), 0)
// Promise.resolve('Resolve promise 1').then(res => console.log(res))
// console.log('Test End');

// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log('lottery draw');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('you Win');
//     } else {
//       reject('you lose');
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed callback hell');
//   setTimeout(() => {
//     console.log('2 seconds passed callback hell');
//     setTimeout(() => {
//       console.log('3 second passed callback hell');
//       setTimeout(() => {
//         console.log('4 second passed callback hell');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise.resolve('abc').then(x => console.log(x))
// Promise.reject(new Error).catch(x => console.error(x))

// Build the image loading functionality that I just showed you on the screen.
// Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
// PART 1
// 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
// If this part is too tricky for you, just watch the first part of the solution.
// PART 2
// 2. Comsume the promise using .then and also add an error handler;
// 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
// 4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
// 5. After the second image has loaded, pause execution for 2 seconds again;
// 6. After the 2 seconds have passed, hide the current image.

// TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
/*
const wait = second => {
  return new Promise(resolve => {
    setTimeout(resolve, second * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = imagePath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imagePath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg')
  }).then(img => {
     currentImg = img
     console.log('image 3 loaded');
     return wait(2)
  }).then(() => {
     currentImg.style.display = 'none'
  })
  .catch(err => console.error(err));
*/
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getFetchCountry = country => {
  getJson(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(data => {
      // console.log(data);
      const neighbour = data[0].borders[1];

      if (!neighbour) throw new Error('No neighbour found!');

      return getJson(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(data => renderCountry(data, 'neighbour', 'kuala lumpur'))
    .catch(err => renderError(`something went wrong ${err.message}. Try again`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const whereAmI = async () => {
  // Geolocation
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geolocation
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    //  console.log(resGeo);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // country data
    // return fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => res.json()).then(data => renderCountry(data[0]))
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    //  console.log(res);
    if (!res.ok) throw new Error('Problem getting country data');

    const data = await res.json();
    //  console.log(data);
    renderCountry(data[0], '', dataGeo.city);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`error catch ${err.masage}`);
  }
};

// console.log('first');
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally('2: second');
// console.log('third');

btn.addEventListener('click', async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(`${err.message}`);
  }

  getFetchCountry('indonesia');
  setTimeout((btn.style.display = 'none'), 2000);
});

// const getCountries = async function (c1, c2, c3) {
//   try {
//   const [data1] = await getJson(
//    `https://restcountries.eu/rest/v2/name/${c1}`)
//   const [data2] = await getJson(
//    `https://restcountries.eu/rest/v2/name/${c2}`)
//   const [data3] = await getJson(
//    `https://restcountries.eu/rest/v2/name/${c3}`)
//    console.log([data1.capital], [data2.capital] ,[data3.capital]);

//     const data = await Promise.all([
//       getJson(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJson(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJson(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);
//     console.log(data);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(`${err.message}`);
//   }
//   console.log('third');
// };

// getCountries('indonesia', 'portugal', 'canada')
