let x = document.querySelector("#fixed");
function hamburger() {
    // let ham = document.getElementById("#hamburger");
    if (x.style.display == "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block"; 
    }
}