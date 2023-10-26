let i = 0;
let limite = 100;

clickChildElement() 

function clickChildElement() {
  setTimeout(() => {
        if ( document.getElementById("job-details").innerText.includes("CRM") == true ){
          setTimeout(() => {
        // Para encontrar o link de cada vaga e abrir em uma nova guia
        window.open(document.getElementsByClassName("scaffold-layout__list-container")[0].children[i].children[0].children[0].children[0].children[1].children[0].children[0].href)
        console.log("Aberto janela do indice "+ i)
        addListNumber()
      },2000);
        } else if (i <= limite) {
          addListNumber()
  }else {
    console.log("Chegou ao limite definido: " + limite);
  }
},2000);
}

function addListNumber() {
  if (i <= limite) {
    setTimeout(() => {
      i++
      console.log(i);
document.getElementsByClassName("scaffold-layout__list-container")[0].children[i].children[0].children[0].click();
clickChildElement()
},5000); 
}
}


// Atenção, verifique se não há ad blocks ou bloqueadores de pop-up pois podem interferir no funcionamento

// O bot irá verificar o primeiro da lista somente se o mesmo estiver selecionado. O restante segue normalmente.

// Para que o bot verifique toda a lista, é preciso que desça a barra de rolagem até o final





