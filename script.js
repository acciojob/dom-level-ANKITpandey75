var element = document.getElementById("level");
var level = 1; 

while (element.parentElement) {
    element = element.parentElement;
    level++;
}

alert("The level of the element is: " + level);//your JS code here. If required.
