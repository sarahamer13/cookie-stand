'use strict';

// function to generate random number of customers per hour
// function to getRandomCust(min,max){
// return math.floor(math.random)() * (max- min)+ min )
 //   console.log (getRandomCust)
//} got this from MDN

let hours = ['6am', '7am', '8am','9pm','10am','11am','12pm','1pm','2pm', '3pm','4pm', '5pm','6pm','7pm'];
let CityLocation = ['Seattle','Tokyo','Dubai','Paris', 'Lima'];

// object literals 

let htmlSection = document.getElementById ('salesdata');
console.log(htmlSection);
let Seattle = {
  minCust: 23,
  maxCust:65,
  avgcookieSale: 6.3,
  custperHour : [],
  hourlySales: [],
  cookieBought:[],
  dailyTotal: 0,

  //The function uses a for loop to iterate over each hour in an array called this.hours. 
  //For each hour, the function generates a random number of customers using another function called randomNum
  //which takes two arguments: this.minCust (the minimum number of customers expected per hour) and this.maxCust (the maximum number of customers expected per hour).
  // The random number of customers generated for each hour is then pushed to an array called this.custperHour,
  //which will ultimately hold the total number of customers expected to visit the business during each hour of operation.
  getCustomers: function (){
    for (let i =0; i < hours.length; i++){
      this.custperHour.push (randomNum (this.minCust,this.maxCust));
    }
  },
// For each hour, the function calculates the hourly sales by multiplying the number of customers expected to visit during that hour 
//(which is stored in the custperHour array) by a random number between 0 and 1 (which is generated using the Math.floor and Math.random functions).
//This random number is used to simulate the fact that not all customers will necessarily make a purchase.
//The result of this calculation is then pushed to an array called hourlySales, which will ultimately hold the total sales expected for each hour of operation.

  gethourlySale: function (){
    for (let i =0; i <hours.length; i++){
      this.hourlySales.push (Math.floor (this.custperHour [i],this.maxCust));
    }
  },

  //For each hour, the function adds the corresponding hourly sales (which are stored in the hourlySales array) to a running total called dailyTotal.
  // By the end of the loop, dailyTotal will contain the total number of cookies expected to be sold over the entire day.

  getcookiesTotal: function (){
    for (let i = 0; i < hours.length;i++){
      this.dailyTotal += this.hourlySales[i];
    }
  },
  render: function (){
    this.getCustomers ();
    this.gethourlySale ();
    this.getcookiesTotal ();

    let articleElm = document.createElement ('article');
    htmlSection.appendChild(articleElm);

    let h3Elem =document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElm.appendChild(h3Elem);

    let ulElem = document.createElement ('ul');
    console.log (ulElem);
    console.log (htmlSection);
    articleElm.appendChild(ulElem);

    for (let i =0; i <hours.length;i++){
      let li = document.createElement ("li");
      li.textContent = `${hours [i]}; ${this.hourlySales[i]}cookies`;
      ulElem.appendChild (li);
    }

    let li = document.createElement ('li');
    li.textContent =`Total ${this.dailyTotal}`;
    ulElem.appendChild (li);
  }
};
function randomNum (min, max) {
  return Math.random() * (max - min) + min;
}
Seattle.render();

// The first line creates a new HTML element called "article" using the createElement 

// h 3 goes here, I will create it


//display the values of each array



// For each hour, the code creates a new HTML element called li. 
// The code then sets the textContent property of the li element to a string that contains information about the hour and the corresponding sales data
// temple literals that allow variables to be embedded directly within a string
// two interploated values 
//The first value is the hour of operation, which is obtained from the hours array using the current index of the loop (hours[i]).
//The second value is the corresponding number of cookies sold during that hour, which is obtained from the hourlySales array using the same index (this.hourlySales[i]).

// creates a new list item element, sets its text content to include a total value, and then adds it as a child to an unordered list element.


let Paris = {
  minCust: 20,
  maxCust:38,
  avgcookieSale: 2.3,
  custperHour : [],
  hourlySales: [],
  cookieBought:[],
  dailyTotal: 0,

  getCustomers: function (){
    for (let i =0; i < hours.length; i++){
      this.custperHour.push (randomNum (this.minCust,this.maxCust));
    }
  },
  gethourlySale: function (){
    for (let i =0; i <hours.length; i++){
      this.hourlySales.push (Math.floor (this.custperHour [i],this.maxCust));
    }
  },


  getcookiesTotal: function (){
    for (let i = 0; i < hours.length;i++){
      this.dailyTotal += this.hourlySales[i];
    }
  },
  render: function (){
    this.getCustomers ();
    this.gethourlySale ();
    this.getcookiesTotal ();

    let articleElm = document.createElement ('article');
    htmlSection.appendChild(articleElm);

    let h3Elem =document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElm.appendChild(h3Elem);

    let ulElem = document.createElement ('ul');
    console.log (ulElem);
    console.log (htmlSection);
    articleElm.appendChild(ulElem);

    for (let i =0; i <hours.length;i++){
      let li = document.createElement ("li");
      li.textContent = `${hours [i]}; ${this.hourlySales[i]}cookies`;
      ulElem.appendChild (li);
    }

    let li = document.createElement ('li');
    li.textContent =`Total ${this.dailyTotal}`;
    ulElem.appendChild (li);
  }
};
function randomNum (min, max) {
  return Math.random() * (max - min) + min;
}
Paris.render();

let Tokyo = {
  minCust: 3,
  maxCust: 24,
  avgcookieSale: 1.2,
  custperHour : [],
  hourlySales: [],
  cookieBought:[],
  dailyTotal: 0,

  getCustomers: function (){
    for (let i =0; i < hours.length; i++){
      this.custperHour.push (randomNum (this.minCust,this.maxCust));
    }
  },
  gethourlySale: function (){
    for (let i =0; i <hours.length; i++){
      this.hourlySales.push (Math.floor (this.custperHour [i],this.maxCust));
    }
  },


  getcookiesTotal: function (){
    for (let i = 0; i < hours.length;i++){
      this.dailyTotal += this.hourlySales[i];
    }
  },
  render: function (){
    this.getCustomers ();
    this.gethourlySale ();
    this.getcookiesTotal ();

    let articleElm = document.createElement ('article');
    htmlSection.appendChild(articleElm);

    let h3Elem =document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElm.appendChild(h3Elem);

    let ulElem = document.createElement ('ul');
    console.log (ulElem);
    console.log (htmlSection);
    articleElm.appendChild(ulElem);

    for (let i =0; i <hours.length;i++){
      let li = document.createElement ("li");
      li.textContent = `${hours [i]}; ${this.hourlySales[i]}cookies`;
      ulElem.appendChild (li);
    }

    let li = document.createElement ('li');
    li.textContent =`Total ${this.dailyTotal}`;
    ulElem.appendChild (li);
  }
};
function randomNum (min, max) {
  return Math.random() * (max - min) + min;
}
Tokyo.render();

  
let Lima = {
  minCust: 2,
  maxCust: 16,
  avgcookieSale: 4.6,
  custperHour : [],
  hourlySales: [],
  cookieBought:[],
  dailyTotal: 0,

  getCustomers: function (){
    for (let i =0; i < hours.length; i++){
      this.custperHour.push (randomNum (this.minCust,this.maxCust));
    }
  },
  gethourlySale: function (){
    for (let i =0; i <hours.length; i++){
      this.hourlySales.push (Math.floor (this.custperHour [i],this.maxCust));
    }
  },


  getcookiesTotal: function (){
    for (let i = 0; i < hours.length;i++){
      this.dailyTotal += this.hourlySales[i];
    }
  },
  render: function (){
    this.getCustomers ();
    this.gethourlySale ();
    this.getcookiesTotal ();

    let articleElm = document.createElement ('article');
    htmlSection.appendChild(articleElm);

    let h3Elem =document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElm.appendChild(h3Elem);

    let ulElem = document.createElement ('ul');
    console.log (ulElem);
    console.log (htmlSection);
    articleElm.appendChild(ulElem);

    for (let i =0; i <hours.length;i++){
      let li = document.createElement ("li");
      li.textContent = `${hours [i]}; ${this.hourlySales[i]}cookies`;
      ulElem.appendChild (li);
    }

    let li = document.createElement ('li');
    li.textContent =`Total ${this.dailyTotal}`;
    ulElem.appendChild (li);
  }
};
function randomNum (min, max) {
  return Math.random() * (max - min) + min;
}
Lima.render ();


let Dubai= {
  minCust: 11,
  maxCust:38,
  avgcookieSale: 3.7,
  custperHour : [],
  hourlySales: [],
  cookieBought:[],
  dailyTotal: 0,


  getCustomers: function (){
    for (let i =0; i < hours.length; i++){
      this.custperHour.push (randomNum (this.minCust,this.maxCust));
    }
  },
  gethourlySale: function (){
    for (let i =0; i <hours.length; i++){
      this.hourlySales.push (Math.floor (this.custperHour [i],this.maxCust));
    }
  },

  getcookiesTotal: function (){
    for (let i = 0; i < hours.length;i++){
      this.dailyTotal += this.hourlySales[i];
    }
  },
  render: function (){
    this.getCustomers ();
    this.gethourlySale ();
    this.getcookiesTotal ();

    let articleElm = document.createElement ('article');
    htmlSection.appendChild(articleElm);

    let h3Elem =document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElm.appendChild(h3Elem);

    let ulElem = document.createElement ('ul');
    console.log (ulElem);
    console.log (htmlSection);
    articleElm.appendChild(ulElem);

    for (let i =0; i <hours.length;i++){
      let li = document.createElement ("li");
      li.textContent = `${hours [i]}; ${this.hourlySales[i]}cookies`;
      ulElem.appendChild (li);
    }
  
    let li = document.createElement ('li');
    li.textContent =`Total ${this.dailyTotal}`;
    ulElem.appendChild (li);
  }
};
function randomNum (min, max) {
  return Math.random() * (max - min) + min;
}
Dubai.render ();
  





