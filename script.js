let disco = document.getElementById("ball");
let background = document.querySelector("body");

background.style.backgroundColor = "blue";

disco.onclick = function() {
    if (background.style.backgroundColor == "blue") {
        background.style.backgroundColor = "red";
    }
    else if (background.style.backgroundColor == "red") {
            background.style.backgroundColor = "yellow";
    } else {
        background.style.backgroundColor = "blue";
    }
}