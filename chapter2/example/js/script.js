var elList = document.getElementById('list');                       // Select the ul element by its ID 


// (1) Set a new element at the begin and at the end of the list

var startNewElement = document.createElement('li');                 // Create a new 'li' element to insert at the start of the list
var startNewText = document.createTextNode('Lemons');               // Create a new textNode
startNewElement.appendChild(startNewText);                          // Set the textNode to the 'li' created

var endNewElement = document.createElement('li');                   // Create a new 'li' to insert at the end of the list
var endNewText = document.createTextNode('Grapes');                 // Create a new textNode
endNewElement.appendChild(endNewText);                              // Set the textNode to the 'li' created


elList.insertBefore(startNewElement, elList.firstChild);              
elList.appendChild(endNewElement);


// (2) Set a new class attribute to all 'li' items 
var elItems = document.querySelectorAll('li');                      // Get all the 'li' items
if (elItems.length > 0) {                                           // Check if the list is empty
    for(var i = 0; (i+1) < (elItems.length - 1); i++) {
        elItems[i+1].className = 'cool';
    }
} else {    // If there is no element in the list

    var message = 'Your list is empty!';                            // Create a custom message

    var newEl = document.createElement('li');                       // Create a new 'li' element
    var newText = document.createTextNode(message);                 // Create a new textNode
    newEl.className = 'empty';                                      // Set the class 'empty' to the 'li' element
    newEl.appendChild(newText);                                     // Set the textNode to the 'li' element

    var position = document.getElementsByTagName('ul');             // Get all the 'ul' elements of the page
    if (position.length > 0) {                                      // Check if there is more than one 'ul'
        position[0].appendChild(newEl);                             // Set the new 'li' element to the first 'ul'
    }

    //window.alert(message);                                        // Prints the message in a alert    
}


// (3) Add the number of list items to the heading
var elNumberItem = document.getElementById('listNumber');           // Get the element to be updates

var elText = elNumberItem.firstChild.nodeValue;                     // Get the actual nodeValue to be updates
elText = elText.replace('0', String(elItems.length));               // Set the text that will be displayed (the size of the list)
elNumberItem.firstChild.nodeValue = elText;                         // Set the new text to the element
