/*add item */
function addItem(){
	
	//get the value of the input box
	var itemValue = $('#addItemValue').val();
	
	/*addItemValue validation*/
	if (itemValue.length === 0) {
        alert('you cant add nothing!!!')
    }
    else {	
		//dynamicaly create one row inside the shopping list 
		var row = $('<li><button class="checkbox">✓</button><span class="list">'+itemValue+'</span><button class="delete">x</button></li>');
		
		//add each row to the previous ones
		$('.shopping-list').append(row);
		
		//reset item value
		itemValue = $('#addItemValue').val('');	
	}
	
}
/*tick item */
function tickItem(){
	$(this).parent().toggleClass('ticked');
	
}
/*delete item */
function deleteItem(){
	$(this).parent().remove();
}
/*delete all */
function deleteAll(){
	$('.shopping-list').empty();
}

$(document).ready(function() {
	/*on click on the "#addItem" button then do addItem()*/
	$('#addItem').on('click', addItem);
	
	/*on click on the ".delete-all" button then do deleteAll()*/
	$('.delete-all').on('click', deleteAll);
	
});

/*add item on enter*/
$(document).on('keypress', function(key) {
        if (key.keyCode == 13) {
            addItem();
        }
	});

/*on click on the ".delete" button then do deleteItem()*/
$(document).on('click', '.delete', deleteItem);

/*on click on the ".checkbox" button then do tickItem()*/
$(document).on('click', '.checkbox', tickItem);