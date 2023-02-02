let menuToggle = document.querySelector(".menu");
let ul = document.querySelector("ul");
let openList = document.querySelector(".open-list");

console.log(menuToggle);
console.log(ul);
console.log(openList);



// Show Side Bar 
menuToggle.addEventListener("click", function () {
    ul.classList.toggle("active");
    openList.classList.toggle("fa-times");
    menuToggle.style.cssText = "z-index: 120";
});