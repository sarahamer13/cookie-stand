'use strict';

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//} got this from MDN

// CONSTRUCTOR FUNCTIONS //

let dailyStoreTotal = [];

function allStores(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.dailyTotal = 0;
  this.custperHour = [];
  this.HourlySales = [];
  dailyStoreTotal.push(this);
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

// object literals // 
let Seattle = new allStores('Seattle', 23, 65, 6.3);
let Paris = new allStores('Paris', 20, 38, 2.3);
let Tokyo = new allStores('Tokyo', 3, 24, 1.2);
let Lima = new allStores('Lima', 2, 16, 4.6);
let Dubai = new allStores('Dubai', 11, 38, 3.7);
let StoreLocations = [Seattle, Paris, Tokyo, Lima, Dubai];


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
// Create a footer row for hourly totals


function footerRender() {

  let tfootElem = document.createElement('tfoot');
  let tfootrow = document.createElement ('tr');
  
  tfootElem.appendChild (tfootrow);
  let footerTitleElem = document.createElement('td');
  footerTitleElem.textContent = 'Totals';
  tfootrow.appendChild(footerTitleElem);

  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlySum = 0;
    for (let j = 0; j < StoreLocations.length; j++) {
      hourlySum += StoreLocations[j].HourlySales[i];
      grandTotal+= StoreLocations[j].HourlySales[i];
      console.log (hourlySum);
    }
    let thfooter = document.createElement ('td');
    thfooter.textContent = hourlySum;
    tfootrow.appendChild(thfooter);
    console.log (StoreLocations [i]);
  }
  let thTotal= document.createElement ('td');
  thTotal.textContent = grandTotal;
  tfootrow.appendChild (thTotal);
  table.appendChild (tfootElem);
  console.log (StoreLocations);

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


Seattle.locationRender();
Paris.locationRender();
Tokyo.locationRender();
Lima.locationRender();
Dubai.locationRender();
headerRender();
footerRender();
