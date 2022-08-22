let Generate = document.querySelector(".GeneratorBtn");

Generate.addEventListener("click", function () {
  let FormNumber = document.querySelector(".fromNum").value;
  let toNumber = document.querySelector(".toNum").value;
  randomNumber = Math.floor(Math.random() * parseInt(toNumber));
  if (randomNumber >= parseInt(FormNumber)) {
    let randomNumberE1= document.querySelector(".RandomNumberE1")
    randomNumberE1.innerHTML=randomNumber;
  }
});
