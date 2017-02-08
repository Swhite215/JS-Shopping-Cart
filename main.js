// var shopArray = [
//
// ]
//
// var item = function(name, price) {
//   this.name = name;
//   this.price = price;
// }
//
// var apple = new item("Apple", 3.16);
// var potato = new item("Potato", 1.28);
// var cherries = new item("Cherry", 4.05);
// var lettuce = new item("Lettuce", 1.47);
// var tomato = new item("Tomato", 1.49);
// var banana = new item("Banana", 1.19);
//
// shopArray.push(apple);
// shopArray.push(potato);
// shopArray.push(cherries);
// shopArray.push(lettuce);
// shopArray.push(tomato);
// shopArray.push(banana);
//
// console.log(shopArray);
//
// var total = 0;
// for (var i = 0; i < shopArray.length; i++) {
//   console.log(shopArray[i].name + "'s costs " + shopArray[i].price + ".");
//   total += shopArray[i].price;
// }
//
// console.log(total);

//Elements for event listeners.
var button = document.getElementById("addButton");
// var listItemToRemove = document.getElementsByClassName("removeMe");

//Event Listeners
button.addEventListener('click', addItem, false);
// listItemToRemove.addEventListener('click', removeItem, false);

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

  var cart = document.getElementById("cartTotal");

  cartTotal += Number(priceValue);
  cart.value = cartTotal;


  itemSlot.appendChild(itemTextNode); //Append Item Text Node to Item LI
  priceSlot.appendChild(priceTextNode); //Append Price Text Node to Price List

  parentList.appendChild(itemSlot); //Append LI Node to Parent Node
  priceList.appendChild(priceSlot); //Append Price Node to Parent Node
}

function removeItem() {
  var container = listItemToRemove.parentNode;
  container.removeChild(listItemToRemove);
}
