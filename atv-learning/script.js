console.log("hello world!")

const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const myItem = input.value
    input.value = "";

    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    listItem.appendChild(span);
    span.textContent = myItem;


    listItem.appendChild(btn);
    btn.textContent = "Delete";

    list.appendChild(listItem);

    btn.addEventListener("click", ()  => {
        list.removeChild(listItem);
    })

    input.focus();
});

