/**
 * Copyright (C) 2021 Luis Linares - Todos los derechos reservados
 *
 * Este código está licenciado bajo la licencia MIT (ver LICENSE.txt para más detalles)
 *
 * Este archivo contiene la lógica del almacenamiento local de para el control de artículos
 * del carrito de compra.
 *
 * @summary Código JS para el control de artículos en el carrito de compras.
 * @author Luis Linares <luis_linares75@hotmail.com>
 *
 * Created at     : 2021-02-19 20:31:26 
 * Last modified  : 2021-02-19 20:32:16
 */

//add new key=>value to the HTML5 storage
function SaveItem() {

	var name = document.forms.ShoppingList.name.value;
	var data = document.forms.ShoppingList.data.value;
	if (!validateItem(name, data)) { return; }
	localStorage.setItem(name, data);
	doShowAll();

}
//------------------------------------------------------------------------------
//validate a key value pair before HTML5 storage
function validateItem(name, data) {
	if (name == '') {
		alert('No se ha seleccionado ning\u00FAn art\u00EDculo');
		return false;
	}
	if (isNaN(data) || data <= 0) {
		alert('La cantidad del art\u00EDculo seleccionado debe ser mayor a cero.');
		return false;
	}

	return true;
}
//------------------------------------------------------------------------------
//change an existing key=>value in the HTML5 storage
function ModifyItem() {
	var name1 = document.forms.ShoppingList.name.value;
	var data1 = document.forms.ShoppingList.data.value;
	if(!validateItem(name1, data1)){ return; }
	//check if name1 is already exists
	
	//check if key exists
	if (localStorage.getItem(name1) != null) {
		//update
		localStorage.setItem(name1, data1);
		document.forms.ShoppingList.data.value = localStorage.getItem(name1);
	}


	doShowAll();
}
//-------------------------------------------------------------------------
//delete an existing key=>value from the HTML5 storage
function RemoveItem() {
	var name = document.forms.ShoppingList.name.value;
	document.forms.ShoppingList.data.value = localStorage.removeItem(name);
	doShowAll();
}
//-------------------------------------------------------------------------------------
//restart the local storage
function ClearAll() {
	localStorage.clear();
	doShowAll();
}
//--------------------------------------------------------------------------------------
// dynamically populate the table with shopping list items
//below step can be done via PHP and AJAX too. 
function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Item</th><th>Value</th></tr>\n";
		var i = 0;
		//for more advance feature, you can set cap on max items in the cart
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
				+ localStorage.getItem(key) + "</td></tr>\n";
		}
		//if no item exists in the cart
		if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		//bind the data to html table
		//you can use jQuery too....
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot save shopping list as your browser does not support HTML 5');
	}
}

/*
 =====> Checking the browser support
 //this step may not be required as most of modern browsers do support HTML5
 */
//below function may be redundant
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
		return false;
	}
}
//-------------------------------------------------
/*
You can extend this script by inserting data to database or adding payment processing API to shopping cart..
*/