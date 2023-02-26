'use strict';

function randomNum (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//} got this from MDN

// CONSTRUCTOR FUNCTIONS //

function allStores(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.dailyTotal= 0;
  this.custperHour = [];
  this.HourlySales= [];

}

allStores.prototype.getCustmers = function(){
  for (let i= 0; i < hours.length;i++){
    this.custperHour.push (randomNum (this.minCust, this.maxCust));
  }
};

allStores.prototype.avgCookiePerHour = function (){
  this.getCustmers ();
  for (let i = 0; i < hours.length; i ++){
    this.HourlySales.push (Math.floor(this.custperHour [i] * this.avgCookie));
  }
};

// object literals // 
let Seattle = new allStores ('Seattle', 23, 65, 6.3);
let Paris = new allStores ('Paris', 20, 38, 2.3);
let Tokyo = new allStores ('Tokyo', 3, 24, 1.2);
let Lima = new allStores ('Lima', 2, 16, 4.6);
let Dubai = new allStores ('Dubai', 11, 38, 3.7);
let StoreLocations = [ Seattle, Paris, Tokyo, Lima, Dubai];


// Globals //

let hours = ['6am', '7am', '8am','9pm','10am','11am','12pm','1pm','2pm', '3pm','4pm', '5pm','6pm','7pm'];
let htmlSection = document.getElementById ('salesdata');
console.log(htmlSection);


// Table //

let table = document.getElementById ('table');
let tbody = document.createElement ('tbody');
table.appendChild (tbody);

function headerRender (){
  let trElem = document.createElement ('tr');
  let thElem = document.createElement ('th');
  thElem.textContent = 'Locations';
  trElem.appendChild (thElem);

  for (let i = 0; i < hours.length; i++){
    let thElem = document.createElement('th');
    thElem.textContent = hours[i];
    trElem.appendChild (thElem);
  }

  thElem = document.createElement ('th');
  thElem.textContent = 'Total';
  trElem.appendChild (thElem);
  tbody.appendChild (trElem);
}

allStores.prototype.locationRender = function (){
  this.avgCookiePerHour();
  let trElem= document.createElement ('tr');
  let tdElem = document.createElement ('td');
  tdElem.textContent = this.name;
  trElem.appendChild (tdElem);

  for (let i = 0; i < hours.length; i ++){
    let tdElemSale = document.createElement ('td');
    tdElemSale.textContent = this.HourlySales [i];
    trElem.appendChild (tdElemSale);
    this.dailyTotal += this.HourlySales [i];
  }

  let dailyTotalTD = document.createElement ('td');
  dailyTotalTD.textContent = this.dailyTotal;
  trElem.appendChild(dailyTotalTD);
  table.appendChild (trElem);
  console.log(this.HourlySales);
};


headerRender ();
Seattle.locationRender ();
Paris.locationRender ();
Tokyo.locationRender ();
Lima.locationRender();
Dubai.locationRender ();








// let Seattle = {
//   city: 'Seattle',
//   minCust: 23,
//   maxCust:65,
//   avgcookieSale: 6.3,
//   custperHour : [],
//   hourlySales: [],
//   cookieBought:[],
//   dailyTotal: 0,

//   getCustomers: function (){
//     for (let i =0; i < hours.length; i++){
//       this.custperHour.push (Math.floor (randomNum (this.minCust,this.maxCust)* this.avgcookieSale));
//     }
//   },

//   getcookiesTotal: function (){
//     for (let i = 0; i < hours.length;i++){
//       this.dailyTotal += this.custperHour[i];
//     }
//   },
//   render: function (){
//     this.getCustomers ();
//     this.getcookiesTotal ();

//     let articleElm = document.createElement ('article');
//     htmlSection.appendChild(articleElm);

//     let h3Elem =document.createElement('h3');
//     h3Elem.textContent = this.city;
//     articleElm.appendChild(h3Elem);

//     let ulElem = document.createElement ('ul');
//     console.log (ulElem);
//     console.log (htmlSection);
//     articleElm.appendChild(ulElem);

//     for (let i =0; i <hours.length;i++){
//       let li = document.createElement ("li");
//       li.textContent = `${hours [i]}; ${this.custperHour[i]}cookies`;
//       ulElem.appendChild (li);
//     }

//     let li = document.createElement ('li');
//     li.textContent =`Total ${this.dailyTotal}`;
//     ulElem.appendChild (li);
//   }
// };

// Seattle.render();

// let Paris = {
//   city:'Paris',
//   minCust: 20,
//   maxCust:38,
//   avgcookieSale: 2.3,
//   custperHour : [],
//   hourlySales: [],
//   cookieBought:[],
//   dailyTotal: 0,

//   getCustomers: function (){
//     for (let i =0; i < hours.length; i++){
//       this.custperHour.push (Math.floor (randomNum (this.minCust,this.maxCust)* this.avgcookieSale));
//     }
//   },

//   getcookiesTotal: function (){
//     for (let i = 0; i < hours.length;i++){
//       this.dailyTotal += this.custperHour[i];
//     }
//   },
//   render: function (){
//     this.getCustomers ();
//     this.getcookiesTotal ();

//     let articleElm = document.createElement ('article');
//     htmlSection.appendChild(articleElm);

//     let h3Elem =document.createElement('h3');
//     h3Elem.textContent = this.city;
//     articleElm.appendChild(h3Elem);

//     let ulElem = document.createElement ('ul');
//     console.log (ulElem);
//     console.log (htmlSection);
//     articleElm.appendChild(ulElem);

//     for (let i =0; i <hours.length;i++){
//       let li = document.createElement ("li");
//       li.textContent = `${hours [i]}; ${this.custperHour[i]}cookies`;
//       ulElem.appendChild (li);
//     }

//     let li = document.createElement ('li');
//     li.textContent =`Total ${this.dailyTotal}`;
//     ulElem.appendChild (li);
//   }
// };

// Paris.render();

// let Tokyo = {
//   city:'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgcookieSale: 1.2,
//   custperHour : [],
//   hourlySales: [],
//   cookieBought:[],
//   dailyTotal: 0,

//   getCustomers: function (){
//     for (let i =0; i < hours.length; i++){
//       this.custperHour.push (Math.floor (randomNum (this.minCust,this.maxCust)* this.avgcookieSale));
//     }
//   },

//   getcookiesTotal: function (){
//     for (let i = 0; i < hours.length;i++){
//       this.dailyTotal += this.custperHour[i];
//     }
//   },
//   render: function (){
//     this.getCustomers ();
//     this.getcookiesTotal ();

//     let articleElm = document.createElement ('article');
//     htmlSection.appendChild(articleElm);

//     let h3Elem =document.createElement('h3');
//     h3Elem.textContent = this.city;
//     articleElm.appendChild(h3Elem);

//     let ulElem = document.createElement ('ul');
//     console.log (ulElem);
//     console.log (htmlSection);
//     articleElm.appendChild(ulElem);

//     for (let i =0; i <hours.length;i++){
//       let li = document.createElement ("li");
//       li.textContent = `${hours [i]}; ${this.custperHour[i]}cookies`;
//       ulElem.appendChild (li);
//     }

//     let li = document.createElement ('li');
//     li.textContent =`Total ${this.dailyTotal}`;
//     ulElem.appendChild (li);
//   }
// };

// Tokyo.render();

  
// let Lima = {
//   city:'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgcookieSale: 4.6,
//   custperHour : [],
//   hourlySales: [],
//   cookieBought:[],
//   dailyTotal: 0,

//   getCustomers: function (){
//     for (let i =0; i < hours.length; i++){
//       this.custperHour.push (Math.floor (randomNum (this.minCust,this.maxCust)* this.avgcookieSale));
//     }
//   },

//   getcookiesTotal: function (){
//     for (let i = 0; i < hours.length;i++){
//       this.dailyTotal += this.custperHour[i];
//     }
//   },
//   render: function (){
//     this.getCustomers ();
//     this.getcookiesTotal ();

//     let articleElm = document.createElement ('article');
//     htmlSection.appendChild(articleElm);

//     let h3Elem =document.createElement('h3');
//     h3Elem.textContent = this.city;
//     articleElm.appendChild(h3Elem);

//     let ulElem = document.createElement ('ul');
//     console.log (ulElem);
//     console.log (htmlSection);
//     articleElm.appendChild(ulElem);

//     for (let i =0; i <hours.length;i++){
//       let li = document.createElement ("li");
//       li.textContent = `${hours [i]}; ${this.custperHour[i]}cookies`;
//       ulElem.appendChild (li);
//     }

//     let li = document.createElement ('li');
//     li.textContent =`Total ${this.dailyTotal}`;
//     ulElem.appendChild (li);
//   }
// };

// Lima.render ();


// let Dubai= {
//   city:'Dubai',
//   minCust: 11,
//   maxCust:38,
//   avgcookieSale: 3.7,
//   custperHour : [],
//   hourlySales: [],
//   cookieBought:[],
//   dailyTotal: 0,


//   getCustomers: function (){
//     for (let i =0; i < hours.length; i++){
//       this.custperHour.push (Math.floor (randomNum (this.minCust,this.maxCust)* this.avgcookieSale));
//     }
//   },

//   getcookiesTotal: function (){
//     for (let i = 0; i < hours.length;i++){
//       this.dailyTotal += this.custperHour[i];
//     }
//   },
//   render: function (){
//     this.getCustomers ();
//     this.getcookiesTotal ();

//     let articleElm = document.createElement ('article');
//     htmlSection.appendChild(articleElm);

//     let h3Elem =document.createElement('h3');
//     h3Elem.textContent = this.city;
//     articleElm.appendChild(h3Elem);

//     let ulElem = document.createElement ('ul');
//     console.log (ulElem);
//     console.log (htmlSection);
//     articleElm.appendChild(ulElem);

//     for (let i =0; i <hours.length;i++){
//       let li = document.createElement ("li");
//       li.textContent = `${hours [i]}; ${this.custperHour[i]}cookies`;
//       ulElem.appendChild (li);
//     }

//     let li = document.createElement ('li');
//     li.textContent =`Total ${this.dailyTotal}`;
//     ulElem.appendChild (li);
//   }
// };

// Dubai.render ();




