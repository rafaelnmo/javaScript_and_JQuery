var el = document.getElementById('second-list_one');
el.className = 'cool';


// Item method to get one element of a list
var elements = document.getElementsByClassName('hot');  //creates an array with all elements that has class 'hot'
if (elements.length >= 1) {             // verify if the array 'elements' is not empty
    var firstItem = elements.item(0);   // select the first item of the list using the 'item()' method
}

// Array sintax to get an element out
var elements2 = document.getElementsByClassName('hot');
if (elements2.length >= 1) {
    var firstItem2 = elements2[0];  // access the array using the array syntax
}

var elements3 = document.getElementsByClassName('third_hot');   // Find 'third_hot' items and save in an array
if (elements3.length > 2) {         // If 3 or more are found
    var el3 = elements3[2];     // Select the third one from the NodeList
    el3.className = 'cool';     // Change the value if its class attribute
}

var elements4 = document.getElementsByTagName('li');
if (elements4.length > 0) {
    var el4 = elements4[12];
    el4.className = 'cool';
}

// querySelector() only returns the first match
var el5 = document.querySelector('li.fifth_hot');
el5.className = 'cool';

// querySelectorAll returns a NodeList
// The second matching element (the third list item) is selected and changed
var els = document.querySelectorAll('li.fifth_hot');
els[1].className = 'cool';


//-------------------------------------------------------//
var hotItems = document.querySelectorAll('li.sixth_hot');    // Store NodeList in array
if (hotItems.length > 0) {                      // If it contains items

    for (var i=0; i < hotItems.length; i++) {   // runs for all elements of the hotItems array
        hotItems[i].className = 'cool';         // changes the class name
    }
}

//-----------------------------------------------------//
// Select the starting point and find its siblings
var startItem = document.getElementById('seventh-list_two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// Change the values of the siblings' class attributes
prevItem.className = 'complete';
prevItem.className = 'cool';


