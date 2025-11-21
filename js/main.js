const panel = document.querySelector("#hotspotPanel");

panel.addEventListener("mouseover", mouseOverHead);
panel.addEventListener("mouseout", mouseOutHead);
panel.addEventListener("click", clickHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  panel.style.fill = "#9d6fa0";
}

function mouseOutHead() {
  console.log("mouseOutHead");
  panel.style.fill = "#a31c16";
}

/********************hotspot panel ***********************/
function clickHead() {
  console.log("clickHead");
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");

  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#requirement").addEventListener("animationend", cleanup);

  document.querySelector(".info-text > h2").textContent = "Er du forberedt på ikke at brænde dig på varm mad?";
  document.querySelector(".placeholder").textContent = "Hav altid gode grydelapper klar!";
  document.querySelector("#requirement").innerHTML = `<p> Du kan købe det du mangler i vores shop.</p>`;
  document.querySelector("#efficiency").innerHTML = `<h3>Huskeregl nr. 1</h3>
   <p> Hvis du har gode grydelapper klar når du tager noget ud af ovnen, undgår du at brænde dig og tabe din mad på gulvet!</p>
    <img src="img/grydelapper.svg" alt="grydelapper" />`;
}

/***************clean up ************************/
function cleanup() {
  console.log("cleanup");
  document.querySelector("#requirement").removeEventListener("animationend", cleanup);

  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
/***************hotspot tearte ********************/

const tearte = document.querySelector("#hotspotTearte");

tearte.addEventListener("mouseover", mouseOverTearte);
tearte.addEventListener("mouseout", mouseOutTearte);
tearte.addEventListener("click", clickTearte);

function clickTearte() {
  console.log("clickTearte");
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");

  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#requirement").addEventListener("animationend", cleanup);

  document.querySelector(".info-text > h2").textContent = "Har du backup mad klar?";
  document.querySelector(".placeholder").textContent = "Sørg for at have fyldte pasta i køleskabet!";
  document.querySelector("#requirement").innerHTML = `<p> Du kan købe det du mangler i vores shop.</p>`;
  document.querySelector("#efficiency").innerHTML = `<h3>Huskeregl nr. 2</h3>
   <p> Hvis du altid har pasta klar i køleskabet er du sikret en nem backup!</p>
   <img src="img/pasta.svg" alt="pasta"/>`;
}

function mouseOverTearte() {
  console.log("mouseOverTearte");
  tearte.style.fill = "#9d6fa0";
}

function mouseOutTearte() {
  console.log("mouseOutTearte");
  tearte.style.fill = "#a31c16";
}

/**************hotspot fod *********************/

const fod = document.querySelector("#hotspotFod");

fod.addEventListener("mouseover", mouseOverfod);
fod.addEventListener("mouseout", mouseOutfod);
fod.addEventListener("click", clickfod);

function mouseOverfod() {
  console.log("mouseOverfod");
  fod.style.fill = "#9d6fa0";
}

function mouseOutfod() {
  console.log("mouseOutfod");
  fod.style.fill = "#a31c16";
}

function clickfod() {
  console.log("clickFod");
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");

  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document.querySelector("#requirement").addEventListener("animationend", cleanup);

  document.querySelector(".info-text > h2").textContent = "Hvor lang tid er der gået?";
  document.querySelector(".placeholder").textContent = "5 sek. reglen!";
  document.querySelector("#requirement").innerHTML = `<p> Du kan købe det du mangler i vores shop.</p>`;
  document.querySelector("#efficiency").innerHTML = `<h3>Huskeregl nr. 3</h3>
   <p> Vi kender alle sammen den gode regel, nemlig 5 sek reglen. Men hav dog lige i mente hvor længe det er siden du har støvsuget dit gulv.</p>
   <img src="img/5sek.svg" alt="5sek" />`;
}
