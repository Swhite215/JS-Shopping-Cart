// The below code is exempt of DOM manipulation for the purpose of preparing for the task.

//Declare an array to store each item.
var shopArray = [];

//Create an object constructor for adding items.
var item = function(name, price) {
  this.name = name;
  this.price = price;
}

//practice creating a variety of item objects.
var apple = new item("Apple", 3.16);
var potato = new item("Potato", 1.28);
var cherries = new item("Cherry", 4.05);
var lettuce = new item("Lettuce", 1.47);
var tomato = new item("Tomato", 1.49);
var banana = new item("Banana", 1.19);

//practice pushing these items to the array.
shopArray.push(apple);
shopArray.push(potato);
shopArray.push(cherries);
shopArray.push(lettuce);
shopArray.push(tomato);
shopArray.push(banana);

//confirmation items have been stored in the array.
console.log(shopArray);

//practice calcuating total of cart based on iterating through array.
var total = 0;
for (var i = 0; i < shopArray.length; i++) {
  console.log(shopArray[i].name + "'s costs " + shopArray[i].price + ".");
  total += shopArray[i].price;
}

//print the total to the screen.
console.log(total);

// Growth Goal
function removeItem() {
  var container = listItemToRemove.parentNode;
  container.removeChild(listItemToRemove);
}
