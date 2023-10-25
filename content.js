let i = 0;
let limite = 2;
let intervalId;

function clickChildElement() {
  if (i <= limite) {
    console.log(i);
    document.getElementsByClassName("scaffold-layout__list-container")[0].children[i].children[0].children[0].click();
    i++;
  } else {
    clearInterval(intervalId); // Limpa o intervalo quando atinge o limite
    console.log("Chegou ao limite definido: " + limite);
  }
}

intervalId = setInterval(clickChildElement, 5000); // Inicia o intervalo
