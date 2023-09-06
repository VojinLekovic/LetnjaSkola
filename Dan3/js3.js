let list = document.getElementById("items");
console.log(list)
console.log(document.title);

var array = [1, 2, 3];

for (x of array){
    console.log(x);
}

var items = list.getElementsByClassName("list-group-items");
console.log(items);

// for (y of items){
    // y.setAttribute("style", "background-color: blue");
    // y.style.color = "white"
// }