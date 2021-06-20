//-----------------------------------------------------//
var el = document.getElementById('second-list_one');    //  gets the element with the id 'second-list_one'
el.className = 'cool';      // change the value of theclass attribute       

//-----------------------------------------------------//
// Item method to get one element of a list
var elements = document.getElementsByClassName('hot');  //creates an array with all elements that has class 'hot'
if (elements.length >= 1) {             // verify if the array 'elements' is not empty
    var firstItem = elements.item(0);   // select the first item of the list using the 'item()' method
}

//-----------------------------------------------------//
// Array sintax to get an element out
var elements2 = document.getElementsByClassName('hot');
if (elements2.length >= 1) {
    var firstItem2 = elements2[0];  // access the array using the array syntax
}

//-----------------------------------------------------//
var elements3 = document.getElementsByClassName('third_hot');   // Find 'third_hot' items and save in an array
if (elements3.length > 2) {         // If 3 or more are found
    var el3 = elements3[2];     // Select the third one from the NodeList
    el3.className = 'cool';     // Change the value if its class attribute
}

//-----------------------------------------------------//
var elements4 = document.getElementsByTagName('li');    // gets all the 'li' elements and put in an array
if (elements4.length > 0) {
    var el4 = elements4[12];    // select the 13th element of the array and puts in a variable
    el4.className = 'cool';     // change the class of the selected element
}

//-----------------------------------------------------//
// querySelector() only returns the first match
var el5 = document.querySelector('li.fifth_hot');       // saves the first match in a variable
el5.className = 'cool';

//-----------------------------------------------------//
// querySelectorAll returns a NodeList
// The second matching element (the third list item) is selected and changed
var els = document.querySelectorAll('li.fifth_hot');    // selects all elements matching the property
els[1].className = 'cool';      // change the second element


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

prevItem.className = 'complete';
nextItem.className = 'cool';


//-----------------------------------------------------//
var startItem8 = document.getElementsByTagName('ul')[7];
var firstItem = startItem8.firstChild;
var lastItem = startItem8.lastChild;

firstItem.nextSibling.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');

//-----------------------------------------------------//
var listNumber = document.querySelectorAll('li.zero');

if (listNumber.length >= 1) {

    for (var i = 0; i < listNumber.length; i++ ) {
        var elText = listNumber[i].firstChild.nodeValue;
        //window.alert(elText);
        var elText = elText.replace('List one', 'List ' + (i+1));
        listNumber[i].firstChild.nodeValue = elText;
    }    
}


//-----------------------------------------------------//
var elElement9 = document.getElementById('nineth-list_one');

var elNinethText = elElement9.firstChild.firstChild.nodeValue;  // Access an element that has its own child

elNinethText = elNinethText.replace('fresh', 'very fresh');     // Change the text that will be replaced
elElement9.firstChild.firstChild.nodeValue = elNinethText;      // Replace the text in the page

//-----------------------------------------------------//
var elElementTen = document.getElementById('tenth-list_one');   // Find the first list item
elElementTen.setAttribute('class', 'cool');                     // Set the class for the first itemfound

var showTextContent = elElementTen.textContent;                 // Get the value of textContent
var showInnerText = elElementTen.innerText;                     // Get

// Show the content of these two properties at the end of the list
var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';

    var elMessage = document.getElementById('results');
    elMessage.innerHTML = msg;

    elElementTen.textContent = 'sourdough bread';