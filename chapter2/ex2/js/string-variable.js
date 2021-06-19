var message;
var username;

var inStock = true;
var shipping = false;

username = 'Rafael';
message = 'See our upcoming range!';

var elName = document.getElementById('name');
elName.textContent = username;

var elNote = document.getElementById('note');
elNote.textContent = message;



var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;

//---------------------------------------------------------//
function sayHello() {
    document.write('Hello!');
}

sayHello();

//---------------------------------------------------------//

function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}

var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];

//------------- Function declaration ---------------------//

function area(width, height) {
    return width * height;
};

var size = area(3, 4);

//------------- Function expression (anonymous functions) ---------------------//
// Function expressions: is a function that it is used in a expression
// Anonymous Functions: Functions that has no name. Anonymous functions its 
// common used in function expressions.


var area = function(width, height) {
    return width * height;
};

var size = area(3, 4);

//------------- Immediately Invoked Function Expressions (IIFE) ---------------------//
// they are executed once as the interpreter comes acrros them

var area = (function(){
    var width = 3;
    var height = 2;
    return width * height;
}());

// ---------------- object hotel --------------------//
// Literal way of c reating an object in JavaScript

var hotel = {
    name: 'Seres Hotel',
    rooms: 40,
    booked: 25,
    gym:true,
    roomTypes: ['twin', 'double', 'suite'],

    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRoms = document.getElementById('rooms');

elRoms.textContent = hotel.checkAvailability();


//----- Creating objects using the constructor sintax -----////

/* creates an empty object called hotel*/
var hotel = new Object();

/* assign three properties and one method to the object created*/
hotel.name = 'Karto Hotel';
hotel.rooms = 120;
hotel.booked = 77;

hotel.checkAvailability = function(){
    return this.rooms - this.booked;
}

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');

elRoms.textContent = hotel.checkAvailability();

//----- Creating objects using the constructor notation -----////
    // --------- Multiple objects ---------- //

function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function () {
        return this.rooms - this.booked;
    } 
} 


var kartoHotel = new Hotel('Karto Hotel', 33, 12);

var sevenHotel = new Hotel('Seven Hotel', 117, 42);

var details1 = kartoHotel.name + ' rooms: ';
    details1 += kartoHotel.checkAvailability();

var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;


var details2 = sevenHotel.name + ' rooms: ';
    details2 += sevenHotel.checkAvailability();

var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

//----------------------------------------------------//
//----- Using the BROWSER OBJECT MODEL -----////

var msg = '<h4>browser window</h4><p>width: ' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';

msg += '<h4>history</h4><p>items: ' + window.history.length + '</p>';
msg += '<h4>screen</h4><p>width: '+ window.screen.width +'</p>';
msg += '<p>height: ' + window.screen.height + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;
//alert('Current page: ' + window.location);

//----------------------------------------------------//
//----- Using the DOCUMENT OBJECT MODEL (DOM) -------//
var msg = '<p><b>page title: </b>' + document.title + '<br/>';
msg += '<b>page address: </b>' + document.URL + '<br />';
msg += '<b>last modified: </b>' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;


//----------------------------------------------------//
//----- Working with strings -----////
var saying = 'Home sweet home';
var msg = '<h4>length</h4><p>' + saying.lenght + '</p>';

msg += '<h4>uppercase</h4><p>' + saying.toLocaleUpperCase() + '</p>';
msg += '<h4>lowercase</h4><p>' + saying.toLowerCase() + '</p>';
msg += '<h4>character index: 12</h4><p>' + saying.charAt(12) + '</p>';
msg += '<h4>first ee</h4><p>' + saying.indexOf('ee') + '</p>';
msg += '<h4>last e</h4><p>' + saying.lastIndexOf('e') + '</p>';
msg += '<h4>character index: 8-14</h4><p>' + saying.substring(8, 14) + '</p>';
msg += '<h4>replace</h4><p>' + saying.replace('me', 'w') + '</p>';

var el = document.getElementById('info-2');
el.innerHTML = msg;


//----------------------------------------------------//
//----- Working with decimal numbers -----////
var originalNumber = 10.23456;

var msg = '<h4>original number</h4><p>' + originalNumber + '</p>';
msg += '<h4>3 decicmal places</h4><p>' + originalNumber.toFixed(3) + '</p>';
msg += '<h4>3 digits</h4><p>' + originalNumber.toPrecision(3) + '</p>';

var el = document.getElementById('info-3');
el.innerHTML = msg;


//----------------------------------------------------//
//----- Working with ramdom numbers -----////
var randomNum = Math.random();
var randomNumRange = randomNum * 10;
var randomNumRangeTen = randomNumRange + 1;
var randomNumRoundDown = Math.floor(randomNumRangeTen);

var msg = '<h4>random number</h4><p>' + randomNum + '</p>';
msg += '<h4>random number * 10</h4><p>' + randomNumRange + '</p>';
msg += '<h4>(random number * 10) + 1</h4><p>' + randomNumRangeTen + '</p>';
msg += '<h4>random number round</h4><p>' + randomNumRoundDown + '</p>';


var el = document.getElementById('info-4');
el.innerHTML = msg ;

//----------------------------------------------------//
//-------------- Creating Date object --------------//

var dob = new Date(1994, 3, 20, 13, 45, 55);
var dob2 = new Date('Apr 20, 1994 13:45:55');
var dob3 = new Date(1994, 3, 20);

var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('date');
el.innerHTML = '<p>Copyright &copy;' + year +'</p> <p>' + dob + '</p> <p>' + dob2 + '</p><p>'+dob3+'</p>';

//----------------------------------------------------//
//-------------- Working with dates --------------//
var today2 = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55');
var difference = today.getTime() - est.getTime();
difference = (difference/31556900000);

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';