//-----------------------Q#1-----------------------
function addNumberClosure(number)
 {
    return function(value) {
      return value + number;
    }
}
let AddFive = addNumberClosure(5)
console.log(AddFive(50)) // output should be 55

//-----------------------Q#2-----------------------
function searchArray(arr, val) {
    // Base case: If the array is empty, return false
    if (arr.length === 0) {
        return false;
    }
    // Base case: If the value is found, return true
    if (arr[0] === val) {
      return true;
    }
    // Recursive case: Call the function with the rest of the array
    return searchArray(arr.slice(1), val);
  }

  let myArray = [1, 2, 3, 4, 5];
console.log(searchArray(myArray, 1)); // true
console.log(searchArray(myArray, 8)); // false

//-----------------------Q#3-----------------------

function myFunction() {
  document.write("Hello World");
}


//-----------------------Q#4-----------------------
function addListItem(text) {
    // Find the ordered list element in the document
    let list = document.querySelector("#my-list");
  
    // Create a new list item element and set its text content
    let listItem = document.createElement("li");
    listItem.textContent = text;
  
    // Append the new list item to the ordered list
    list.appendChild(listItem);
  }
addListItem("item 3");
  

//-----------------------Q#5-----------------------
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  const myDiv = document.querySelector("#my-div");
  changeBackgroundColor(myDiv, "cyan");    

//-----------------------Q#6-----------------------
function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  let myObject = { name: "Mirza", age: 23 };
  saveObjectToLocalStorage('myKey', myObject);

  let storedObject = JSON.parse(localStorage.getItem('myKey'));
  console.log(storedObject); // { name: 'mirza', age: 23 }
  

//-----------------------Q#7-----------------------
function getObjectFromLocalStorage(key) {
    let storedObject = localStorage.getItem(key);
    return JSON.parse(storedObject);
  }
  let object = getObjectFromLocalStorage('myKey');
  console.log(object);
    

//-----------------------Q#8-----------------------
function saveObject() 
{
    return{
        Name: prompt("Enter Name"),
        Age: prompt("Enter Age"),
        City: prompt("Enter City"),
    };
}
let result =
[
    saveObject()
];
console.log(result);