let heading1 = document.querySelector("h1");

function changeText(element, text) {
  element.innerText = text;
}

setTimeout(() => {
  changeText(heading1, "Javascript");
}, 1000);
