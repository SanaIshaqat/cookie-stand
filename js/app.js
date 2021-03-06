"use strict";

let cookieSales = document.getElementById('cookieSales');

let divElement = document.createElement('div');
    cookieSales.appendChild(divElement)

    let tableEle = document.createElement('table');
    cookieSales.appendChild(tableEle);


let wrokingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let allRes = [];
function CookieStand(location, avgCookiesCustomer, max, min) {

    this.location = location;
    this.costumerHour = 0;
    this.avgCookiesCustomer = avgCookiesCustomer;
    this.finalRes = [];
    this.max = max;
    this.min = min;
    this.total = 0;
    allRes.push(this);
};

CookieStand.prototype.getCustomer = function () {
    this.costumerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
    return this.costumerHour;
};

CookieStand.prototype.cookieHour = function () {
    for (let i = 0; i < wrokingHours.length; i++) {
        let cookieHourNo = Math.floor(this.avgCookiesCustomer * this.getCustomer());
        this.finalRes.push(cookieHourNo);
        this.total += cookieHourNo;
        
    } return this.finalRes;
};

CookieStand.prototype.render = function () {


    let tr2 = document.createElement('tr');
    tableEle.appendChild(tr2);

    let th2 = document.createElement('th');
    th2.textContent = `${this.location}`;
    tr2.appendChild(th2);

    for (let i = 0; i < wrokingHours.length; i++) {
        let td2 = document.createElement('td');
        td2.textContent = `${this.finalRes[i]}`;
        tr2.appendChild(td2)
    }
    let td3 = document.createElement('td');
    td3.textContent = `${this.total}`;
    tr2.appendChild(td3);
};

tableHead();

let seattle = new CookieStand('Seattle', 6.3, 65, 23);
seattle.getCustomer();
seattle.cookieHour();
seattle.render();
let tokyo = new CookieStand('Tokyo', 1.2, 24, 3);
tokyo.getCustomer();
tokyo.cookieHour();
tokyo.render();
let dubai = new CookieStand('Dubai', 3.7, 38, 11);
dubai.getCustomer();
dubai.cookieHour();
dubai.render();
let paris = new CookieStand('paris', 2.3, 38, 20);
paris.getCustomer();
paris.cookieHour();
paris.render();
let lima = new CookieStand('Lima', 4.6, 16, 2);
lima.getCustomer();
lima.cookieHour();
lima.render();
tableFooter();


function tableHead() {

    let tr1 = document.createElement('tr');
    tableEle.appendChild(tr1);

    let th0 = document.createElement('th');
    th0.textContent = `Location`;
    tr1.appendChild(th0);

    for (let i = 0; i < wrokingHours.length; i++) {
        let th1 = document.createElement('th');
        th1.textContent = `${wrokingHours[i]}`;
        tr1.appendChild(th1);
    }

    let th3 = document.createElement('th');
    th3.textContent = `Daily Location Total`;
    tr1.appendChild(th3);
}

function tableFooter() {

    let tr3 = document.createElement('tr');
    tableEle.appendChild(tr3);

    let th3 = document.createElement('th');
    th3.textContent = 'Total';
    tr3.appendChild(th3);

    for (let i = 0; i < wrokingHours.length; i++) {
        let dailyTotal = 0;
        for (let j = 0; j < allRes.length; j++) {
            dailyTotal += allRes[j].finalRes[i]
        }
        let th4 = document.createElement('th');
        th4.textContent = dailyTotal;
        tr3.appendChild(th4);
    }
    let hourlyTotal=0;
    for (let j=0; j<allRes.length;j++){
        hourlyTotal+=allRes[j].total;
    }
    let th5=document.createElement('th');
    th5.textContent=hourlyTotal;
    tr3.appendChild(th5);
}

let salesForm=document.getElementById('salesForm')

console.log(salesForm);salesForm.addEventListener('submit',submitFunc);
function submitFunc(event){
    event.preventDefault();
    let locationName=event.target.locationName.value;
    let avgCookiesPerPerson=event.target.avgCookiesPerPerson.value;
    let maxNoPerCustomer=event.target.maxNoPerCustomer.value;
    let minNoPerCustomer=event.target.minNoPerCustomer.value;

    let newSales=new CookieStand(locationName,avgCookiesPerPerson,maxNoPerCustomer,minNoPerCustomer);
   
    let y=tableEle.rows.length
    tableEle.deleteRow(y-1)

    newSales.getCustomer();
    newSales.cookieHour();
    newSales.render();
    console.log(newSales);
    salesForm.reset();

    tableFooter();   
}