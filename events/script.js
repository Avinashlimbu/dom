const btn = document.querySelector("#btn");

btn.addEventListener("click", function(e){
    e.target.style.background = "blue";
})




/*

//Method #2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

//Method #3
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World");
});


function alertFunction() {
    alert("hello world via a function");
}

//Method #2
const functionBtn = document.querySelector("#functionBtn");
functionBtn.onclick = alertFunction;

//Method #3
const functionBtn2 = document.querySelector("#functionBtn2");
functionBtn2.addEventListener("click", alertFunction);

*/