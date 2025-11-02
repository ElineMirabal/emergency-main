document
  .querySelector("#hotspotPanel")
  .addEventListener("mouseover", mouseOverHead);
document
  .querySelector("#hotspotPanel")
  .addEventListener("mouseout", mouseOutHead);

document.querySelector("#hotspotPanel").addEventListener("click", clickHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  document.querySelector("#hotspotPanel").style.fill = "purple";
}

function mouseOutHead() {
  console.log("mouseOutHead");
  document.querySelector("#hotspotPanel").style.fill = "green";
}

function clickHead() {
  console.log("clickHead");
  document.querySelector(".info-text > h2").textContent = "Fodpanel";
  document.querySelector(".placeholder").textContent = "bla bla bla";
  document.querySelector("#efficiency").innerHTML = `<h3>Eline</h3>
   <p> bla bla bla weekend</p>`;
}
