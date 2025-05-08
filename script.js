
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const paragraphText = document.createElement("p");
paragraphText.textContent = "Hey I'm red!";
container.appendChild(paragraphText);

const h3Text = document.createElement("h3");
h3Text.textContent= "I'm a blueH3!";
container.appendChild(h3Text);

const subContent = document.createElement("div");
subContent.classList.add("subContent");
container.appendChild(subContent);

const h1Text = document.createElement("h1");
h1Text.textContent = "I'm in a div";
const paragraph = document.createElement("p");
paragraph.textContent = "I'm in a div too, but as a paragraph";

subContent.append(h1Text, paragraph);
