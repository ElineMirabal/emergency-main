/******************cta button1*****************/
const btn_open = document.querySelector("#cta_open1");
const btn_close = document.querySelector("#close_btn");

console.log(btn_open);
btn_open.addEventListener("click", openModal);
btn_close.addEventListener("click", closeModal);

/***********test til at se om det fungerer**********/
function openModal() {
  console.log("openmodal");
  document.querySelector("#dialog1").showModal();
  document.querySelector("#dialog1").classList.add("fadeIn");
}

function closeModal() {
  document.querySelector("#dialog1").close();
}
