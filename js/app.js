/* How to write JS apps

Milestone one: create the basic structure
- first define the main parts of the JS code
- inside of each of them describe in plain english what you are going to do
- create the functions with names but no content
- create the connection between the functions and the html buttons which are activating them


Milestone two: start complete the functions definitions and test them line by line
- inside each functions write in plain english what are the steps to follow
- complete one step at a time and test it
*/



/* Debugging strategies

debugging level 1 => check if JS syntax is correct (check console in Web Dev )
debugging level 2 => check if the targeting is working (check the connection between the HTML element and equivalent JS functionality ==> alert("here"); inside the function)
debugging level 3 => check if the logic makes sense (check if the JS functionality returns what we expect ==> alert(VALUE-NAME); inside the function)
*/



/*******************************************
STEP 1
before document ready we are defining all the functions and we explain what they should be doing when used
********************************************/

/* function for adding items to the shopping list using the add to list button and enter key */
function addItem() {
    //check if the targeting is working
    //alert("I've just activated the addItem() function");

    //get the value of the input box
    var itemValue = $('#addItemValue').val();

    //check if the logic makes sense -> make sure that you get the value you are adding in the html
    //alert(itemValue);

    //validate input
    if (itemValue.length === 0) {
        alert('You have to add something!!!');
    }

    //if the input is valid ....
    else {
        //dynamicaly create one row inside the shopping list
        var row = $('<li><button class="checkbox">✓</button><span class="list">' + itemValue + '</span><button class="delete">x</button></li>');

        //add each row to the previous ones
        $('.shopping-list').append(row);

        //empty the input box after submit by resetting the value
        $('#addItemValue').val('');
    }
}

/*function to select an item to cross out
    Note: create the 'ticked' class in CSS file first! You don't need to use it in the index.html because the JS will be adding it automatically to the index
*/
function tickItem() {
    //check if the targeting is working
    //alert("I've just activated the tickItem() function");

    //$(this) means that on WHATEVER you just clicked (the checkbox button), go to the parent of it (in our case the LI above the it) and add / remove the "ticked" class to it
    $(this).parent().toggleClass('ticked');
}

/*function to remove an item from the list clicking on the 'x' */
function deleteItem() {
    //check if the targeting is working
    //alert("I've just activated the deleteItem() function");

    //$(this) means that on WHATEVER you just clicked (the delete one item button), go to the parent of it (in our case the LI above it) and remove the parent and everything inside it
    $(this).parent().remove();
}

/*function to reset and clear the list */
function deleteAll() {
    //check if the targeting is working
    //alert("I've just activated the deleteAll() function");

    //find the UL container (in our case having the class shopping-list) which contains all the LIs and delete all the children inside it
    $('.shopping-list').empty();
}




/********************************************
STEP 2
Inside document ready we are calling all the functions (we used them) and connect them with the containers in HTML (for example the #add-button from HTML will be connected with the addItem function)
********************************************/

/*the following 2 function calls should be INSIDE the $(document).ready(function() because the targeted containers were created WHEN the page was loaded*/
$(document).ready(function () {

    /*on click on the "#addItem" button activate function called addItem()*/

    $('#addItem').on('click', function () {
        addItem();
    });

    /*on click on the ".delete-all" activate function called deleteAll()*/

    $('.delete-all').on('click', function () {
        deleteAll();
    });

    //close document ready
});



/*the following 3 function calls should be OUTSIDE the $(document).ready(function() because the targeted containers were created AFTER the page was loaded*/

/*on click on the ".delete" button activate function called deleteItem()*/
$(document).on('click', '.delete', deleteItem);

/*on click on the ".checkbox" button activate function called tickItem()*/
$(document).on('click', '.checkbox', tickItem);



/*key press event handlers for extra functionality */

/*add item on enter*/
$(document).on('keypress', function (key) {
    //keyCode == 13 is the ENTER key
    if (key.keyCode == 13) {
        addItem();
    }
});

/*clear list on delete*/
$(document).on('keypress', function (key) {
    //keyCode == 46 is the DELETE key
    if (key.keyCode == 46) {
        deleteAll();
    }
});

/*clear list on backspace*/
$(document).on('keypress', function (key) {
    //keyCode == 8 is the BACKSPACE key
    if (key.keyCode == 8) {
        deleteAll();
    }
});
