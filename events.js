const changeBGColorStatic = () => {
  let btn = document.getElementsByClassName("bg-color-change-btn");
  document.body.classList.add("bg-color-grey");
};

const fetchResults = () => {
  let para = document.getElementById("results");
  let result = document.createElement("i");
  result.innerHTML = "Won <br/>";
  para.append(result);
  document.getElementById("check").setAttribute("disabled", true);
};

document
  .getElementById("section-2")
  .addEventListener("mouseenter", () =>
    document.getElementById("section-2").classList.add("bg-color-red")
  );

document
  .getElementById("section-2")
  .addEventListener("mouseleave", () =>
    document.getElementById("section-2").classList.remove("bg-color-red")
  );

document
  .getElementById("inputA")
  .addEventListener("input", (e) => console.log(e.target.value));
