var headOne = document.querySelector("#one")
var headTwo = document.querySelector("#two")
var headThree  =document.querySelector("#three")

//test
console.log("Connected!")

//ad event listner
headOne.addEventListener("mouseover", function(){
    headOne.textContent="Mouse Currently Over";
    headOne.style.color="red";
})

headOne.addEventListener("mouseout", function(){
    headOne.textContent="HOVER OVER ME!";
    headOne.style.color="black";
})

headTwo.addEventListener("click",function(){
    headTwo.textContent="CLICKED ON";
    headTwo.style.color="blue";
})

headThree.addEventListener("dblclick", function(){
    headThree.textContent="IWAS DOUBLE CLICKED!";
    headThree.style.color="black";
})