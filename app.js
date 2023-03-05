'use strict';

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//} got this from MDN

// CONSTRUCTOR FUNCTIONS //

let dailyStoreTotal = [];
let allLocations = [];

function allStores(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.dailyTotal = 0;
  this.custperHour = [];
  this.HourlySales = [];
  allLocations.push(this);
}

allStores.prototype.getCustmers = function () {
  for (let i = 0; i < hours.length; i++) {
    this.custperHour.push(randomNum(this.minCust, this.maxCust));
  }
};

allStores.prototype.avgCookiePerHour = function () {
  this.getCustmers();
  for (let i = 0; i < hours.length; i++) {
    this.HourlySales.push(Math.floor(this.custperHour[i] * this.avgCookie));
  }
};



// Globals //

let hours = ['6am', '7am', '8am', '9pm', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let htmlSection = document.getElementById('salesdata');
console.log(htmlSection);

// Table //

let table = document.getElementById('table');
let tbody = document.createElement('tbody');
table.appendChild(tbody);

function headerRender() {
  let thElem = document.createElement('th');
  let trElem = document.createElement('tr');
  thElem.textContent = 'Locations';
  trElem.appendChild(thElem);

  for (let i = 0; i < hours.length; i++) {
    let thElem = document.createElement('th');
    thElem.textContent = hours[i];
    trElem.appendChild(thElem);
  }

  thElem = document.createElement('th');
  thElem.textContent = 'Daily Total';
  trElem.appendChild(thElem);
  tbody.appendChild(trElem);
}
new allStores('Seattle', 23, 65, 6.3);
new allStores('Paris', 20, 38, 2.3);
new allStores('Tokyo', 3, 24, 1.2);
new allStores('Lima', 2, 16, 4.6);
new allStores('Dubai', 11, 38, 3.7);


function footerRender() {
  let tfootElem = document.createElement('tfoot');
  let tfootrow = document.createElement('tr');

  let footerTitleElem = document.createElement('th');
  footerTitleElem.textContent = 'Totals';
  tfootrow.appendChild(footerTitleElem);

  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlySum = 0;
    for (let j = 0; j < allLocations.length; j++) {
      hourlySum += allLocations[j].HourlySales[i];
    }
    grandTotal += hourlySum;

    let thfooter = document.createElement('td');
    thfooter.textContent = hourlySum;
    tfootrow.appendChild(thfooter);
  }

  let thTotal = document.createElement('td');
  thTotal.textContent = grandTotal;
  tfootrow.appendChild(thTotal);

  tfootElem.appendChild(tfootrow);
  table.appendChild(tfootElem);
}


allStores.prototype.locationRender = function () {
  this.avgCookiePerHour();
  let trElem = document.createElement('tr');
  let tdElem = document.createElement('td');
  tdElem.textContent = this.name;
  trElem.appendChild(tdElem);

  for (let i = 0; i < hours.length; i++) {
    let tdElemSale = document.createElement('td');
    tdElemSale.textContent = this.HourlySales[i];
    trElem.appendChild(tdElemSale);
    this.dailyTotal += this.HourlySales[i];
  }
  let dailyTotalTD = document.createElement('td');
  dailyTotalTD.textContent = this.dailyTotal;
  trElem.appendChild(dailyTotalTD);
  table.appendChild(trElem);
};

allStores.prototype.render = function(){
  this.locationRender();
};

let cookiesForm = document.getElementById ('cookiesForm');
cookiesForm.addEventListener('submit',function(event){
  event.preventDefault();


  let {location, minCust, maxCust, avgCookies} = event.target;
  console.log (location.value,minCust.value, maxCust.value,avgCookies.value);
  let inputStore = new allStores(location.value,parseInt(minCust.value),parseInt(maxCust.value),parseInt(avgCookies.value));

  allLocations.push(inputStore);
  inputStore.render();
  event.target.reset();

  // Clear the form inputs by setting their values to an empty string
  location.value = '';
  minCust.value = '';
  maxCust.value = '';
  avgCookies.value = '';
  let table = document.querySelector ('table');
  table.deleteTFoot ();
});

allLocations [0].render ();
allLocations [1].render ();
allLocations[2].render ();
allLocations [3].render ();
allLocations [4].render ();
footerRender();
headerRender();





