//Elements for event listeners.
var button = document.getElementById("addButton");

//Event Listeners
button.addEventListener('click', addItem, false);

//variable to store cart total.
var cartTotal = 0;

//Add Item Function
function addItem() {
  //Get Elements to Work With
  var itemToAdd = document.getElementById("addedItem"); //Element for user item name input
  var parentList = document.getElementById("parentList"); //Parent List to Append Item To
  var itemName = itemToAdd.value; //Value for user item input

  var itemSlot = document.createElement("LI");//New Li Element
  itemSlot.hasAttribute("class","removeMe");//Assign an id attribute to added Li.
  var itemTextNode = document.createTextNode(itemName);//New Text Element with item name.

  var itemCost = document.getElementById("itemPrice"); //Element for user input price.
  var priceList = document.getElementById("priceList");//Parent List to Append Item To.

  var priceSlot = document.createElement("LI"); //Create New Price Div.
  var priceValue = itemCost.value; //Value for price input.
  var priceTextNode = document.createTextNode(priceValue);//New text element with item price.

  var cart = document.getElementById("cartTotal"); //Element for cart total.

  cartTotal += Number(priceValue); //Addiiton assignment to increase total.
  cart.value = cartTotal; //assignment of value to DOM element for cart total


  itemSlot.appendChild(itemTextNode); //Append Item Text Node to Item LI
  priceSlot.appendChild(priceTextNode); //Append Price Text Node to Price List

  parentList.appendChild(itemSlot); //Append LI Node to Parent Node
  priceList.appendChild(priceSlot); //Append Price Node to Parent Node
}
