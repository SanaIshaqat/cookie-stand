"use strict";
let cookieSales =document.getElementById('cookieSales');
let wrokingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
const seattle = {
    location: 'Seattle',
    costumerHour: 0,
    avgCookiesCustomer: 6.3,
    finalRes: [],
    max: 65,
    min: 23,
    total: 0,

    getCustomer: function (min, max) {
        this.costumerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return this.costumerHour;
    },
    cookieHour: function () {
        for (let i = 0; i < wrokingHours.length; i++) {
            let cookieHourNo = Math.floor(this.avgCookiesCustomer * this.getCustomer());
            // this.total= cookieHour()+ this.total;
            this.finalRes.push(cookieHourNo);
        }


        return this.finalRes;
    },
    render:function(){

        let divElement=document.createElement('div');
        cookieSales.appendChild(divElement)


        let h2Element = document.createElement('h2');
        h2Element.textContent= this.location;
        divElement.appendChild(h2Element);
        
        let ulElement=document.createElement('ul');
        divElement.appendChild(ulElement);

        for(let i=0;i<this.finalRes.length;i++){
            let liElement=document.createElement('li');
            liElement.textContent=wrokingHours[i]+ ': ' +this.finalRes[i]+' Cookies Per Hour';
            ulElement.appendChild(liElement);
        }
        

    }
}



const tokyo = {
    location: 'Tokyo',
    costumerHour: 0,
    avgCookiesCustomer: 1.2,
    finalRes: [],
    max: 24,
    min: 3,
    total: 0,

    getCustomer: function (min, max) {
        this.costumerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return this.costumerHour;
    },
    cookieHour: function () {
        for (let i = 0; i < wrokingHours.length; i++) {
            let cookieHourNo = Math.floor(this.avgCookiesCustomer * this.getCustomer());
            // this.total= cookieHour()+ this.total;
            this.finalRes.push(cookieHourNo);
        }


        return this.finalRes;
    },
    render:function(){

        let divElement=document.createElement('div');
        cookieSales.appendChild(divElement)


        let h2Element = document.createElement('h2');
        h2Element.textContent= this.location;
        divElement.appendChild(h2Element);
        
        let ulElement=document.createElement('ul');
        divElement.appendChild(ulElement);

        for(let i=0;i<this.finalRes.length;i++){
            let liElement=document.createElement('li');
            liElement.textContent=wrokingHours[i]+ ': ' +this.finalRes[i]+' Cookies Per Hour';
            ulElement.appendChild(liElement);
        }
        

    }
}

const dubai = {
    location: 'Dubai',
    costumerHour: 0,
    avgCookiesCustomer: 3.7,
    finalRes: [],
    max: 38,
    min: 11,
    total: 0,

    getCustomer: function (min, max) {
        this.costumerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return this.costumerHour;
    },
    cookieHour: function () {
        for (let i = 0; i < wrokingHours.length; i++) {
            let cookieHourNo = Math.floor(this.avgCookiesCustomer * this.getCustomer());
            // this.total= cookieHour()+ this.total;
            this.finalRes.push(cookieHourNo);
        }


        return this.finalRes;
    },
    render:function(){

        let divElement=document.createElement('div');
        cookieSales.appendChild(divElement)


        let h2Element = document.createElement('h2');
        h2Element.textContent= this.location;
        divElement.appendChild(h2Element);
        
        let ulElement=document.createElement('ul');
        divElement.appendChild(ulElement);

        for(let i=0;i<this.finalRes.length;i++){
            let liElement=document.createElement('li');
            liElement.textContent=wrokingHours[i]+ ': ' +this.finalRes[i]+' Cookies Per Hour';
            ulElement.appendChild(liElement);
        }
        

    }
}

const paris = {
    location: 'Paris',
    costumerHour: 0,
    avgCookiePerHour:0,
    avgCookiesCustomer: 2.3,
    finalRes: [],
    max: 38,
    min: 20,
    total: 0,

    getCustomer: function (min, max) {
        this.costumerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return this.costumerHour;
    },
    cookieHour: function () {
        for (let i = 0; i < wrokingHours.length; i++) {
            let cookieHourNo = Math.floor(this.avgCookiesCustomer * this.getCustomer());
            // this.total= cookieHour()+ this.total;
            this.finalRes.push(cookieHourNo);
        }


        return this.finalRes;
    },
    render:function(){

        let divElement=document.createElement('div');
        cookieSales.appendChild(divElement)


        let h2Element = document.createElement('h2');
        h2Element.textContent= this.location;
        divElement.appendChild(h2Element);
        
        let ulElement=document.createElement('ul');
        divElement.appendChild(ulElement);

        for(let i=0;i<this.finalRes.length;i++){
            let liElement=document.createElement('li');
            liElement.textContent=wrokingHours[i]+ ': ' +this.finalRes[i]+' Cookies Per Hour';
            ulElement.appendChild(liElement);
        }
        

    }
}

const lima = {
    location: 'Lima',
    costumerHour: 0,
    avgCookiesCustomer: 4.6,
    finalRes: [],
    max: 16,
    min: 2,
    total: 0,

    getCustomer: function (min, max) {
        this.costumerHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return this.costumerHour;
    },
    cookieHour: function () {
        for (let i = 0; i < wrokingHours.length; i++) {
            let cookieHourNo = Math.floor(this.avgCookiesCustomer * this.getCustomer());
            // this.total= cookieHour()+ this.total;
            this.finalRes.push(cookieHourNo);
            
        }


        return this.finalRes;
    },
    render:function(){

        let divElement=document.createElement('div');
        cookieSales.appendChild(divElement)


        let h2Element = document.createElement('h2');
        h2Element.textContent= this.location;
        divElement.appendChild(h2Element);
        
        let ulElement=document.createElement('ul');
        divElement.appendChild(ulElement);

        for(let i=0;i<this.finalRes.length;i++){
            let liElement=document.createElement('li');
            liElement.textContent=wrokingHours[i]+ ': ' +this.finalRes[i]+' Cookies Per Hour';
            ulElement.appendChild(liElement);
        }
        

    }
}

console.log(seattle)
console.log(seattle.cookieHour())
console.log(seattle.finalRes)


console.log(tokyo)
console.log(tokyo.cookieHour())
console.log(tokyo.finalRes)

console.log(dubai)
console.log(dubai.cookieHour())
console.log(dubai.finalRes)

console.log(paris)
console.log(paris.cookieHour())
console.log(paris.finalRes)


console.log(lima)
console.log(lima.cookieHour())
console.log(lima.finalRes)

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();