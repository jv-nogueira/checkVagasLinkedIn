
addListNumber()
 

function addListNumber() {
  

  // Abaixo está o laço de repetição que encontra qual elemento da lista de vagas está selecionado
  let limite = document.querySelectorAll('.scaffold-layout__list-container')[0].children.length;

for (var indice = 0; indice < limite; indice++) {
  let selectElement = 'job-card-container relative job-card-list\n        job-card-container--clickable\n        \n        job-card-list--underline-title-on-hover jobs-search-results-list__list-item--active jobs-search-two-pane__job-card-container--viewport-tracking-'+indice+' ';

    if (document.querySelectorAll('.scaffold-layout__list-container')[0].children[indice].children[0].children[0].className === selectElement) {
        console.log('Índice do elemento selecionado:', indice);   
        break;  
    } else {
      console.log('não encontrado') // Não usar o método 'break' pois o laço de repetição irá percorrer um único ciclo
        }
}

clickChildElement()

function clickChildList() {

  setTimeout(() => {
    indice++
    console.log(indice)
    let listJobs = document.getElementsByClassName("scaffold-layout__list-container")[0].children[indice].children[0].children[0];
listJobs.scrollIntoView() // Este método rola a página para que o elemento fique vísivel      
listJobs.click();
clickChildElement()
},3000); 

}

function clickChildElement() {
  setTimeout(() => {
        if ( document.getElementById("job-details").innerText.includes("@") == true ){
         
        // Para encontrar o link de cada vaga e abrir em uma nova guia
        window.open(document.getElementsByClassName("scaffold-layout__list-container")[0].children[indice].children[0].children[0].children[0].children[1].children[0].children[0].href)
        console.log("Aberto janela do indice "+ indice)
        clickChildList()
        } else {
          clickChildList()
        }
      },1500); 

}

}


// Atenção, verifique se não há ad blocks ou bloqueadores de pop-up pois podem interferir no funcionamento

// O bot irá verificar o primeiro da lista somente se o mesmo estiver selecionado. O restante segue normalmente.

// Encontrar soluçção: Para que o bot verifique toda a lista, é preciso que desça a barra de rolagem até o final

// Implementar para que o script clique para seguir na próxima lista e assim por diante

// Principais palavras-chaves que eu particularmente tenho procurado: PJ, @, 


/*
Sequencia:

0) Identificar qual indice da lista de vagas está selecionado

1) Percorrer a descrição, caso seja verdadeira a palavra então abrir a vaga em uma nova guia
2) Setar a functon para adicionar +1 ao indice
3) Clicar no próximo indice do elemento
4) Setar a function para o laço de repetição percorrer

*/






