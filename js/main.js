document
  .querySelector("#hotspotPanel")
  .addEventListener("mouseover", mouseOverHead);
document
  .querySelector("#hotspotPanel")
  .addEventListener("mouseout", mouseOutHead);

document.querySelector("#hotspotPanel").addEventListener("click", clickHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  document.querySelector("#hotspotPanel").style.fill = "#9d6fa0";
}

function mouseOutHead() {
  console.log("mouseOutHead");
  document.querySelector("#hotspotPanel").style.fill = "#a31c16";
}

function clickHead() {
  console.log("clickHead");
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");

  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document
    .querySelector("#requirement")
    .addEventListener("animationend", cleanup);

  document.querySelector(".info-text > h2").textContent = "Fodpanel";
  document.querySelector(".placeholder").textContent =
    "Hav altid gode grydelapper klar!";
  document.querySelector("#efficiency").innerHTML = `<h3>Huskeregl nr.1</h3>
   <p> Hvis du har gode grydelapper klar når du tager noget ud af ovnen, undgår du at brænde dig og tabe din mad på gulvet!</p>`;
}

function cleanup() {
  console.log("cleanup");
  document
    .querySelector("#requirement")
    .removeEventListener("animationend", cleanup);

  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
