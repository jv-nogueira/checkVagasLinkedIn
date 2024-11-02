document.addEventListener("keydown", function(event) {
  if (event.keyCode === 113) {
    var question1 = prompt("Quantos segundos para percorrer cada vaga?")
    if (question1 > 0) {
      var index1 = 0;
      
      function loopLista1() {
        var listaElementos = document.querySelectorAll('.scaffold-layout__list-container')[0].children;
        if (index1 < listaElementos.length) {
          var indexLista = listaElementos[index1];
          indexLista.scrollIntoView(); // Rola a página para o elemento ficar visível

          var salaryTrue = indexLista?.children[0]?.children[0]?.children[0]?.children[0]?.children[1]?.children[3];
          var indexURL = indexLista.querySelector('a')?.href;
          
          if (salaryTrue && indexURL) {
            window.open(indexURL);
          }

          index1++; // Incrementa o índice para o próximo item
          setTimeout(loopLista1, question1*1000); // Aguarde cada segundo para percorrer o próximo item
        } else {
          loopLista2(); // Todos os elementos foram percorridos; chama o loop de paginação
        }
      }

      function loopLista2() {
        var listaHorizontal = document.querySelector(".artdeco-pagination__pages--number")?.children;
        if (listaHorizontal && listaHorizontal.length > 0) {
          var indexButton = Array.from(listaHorizontal).findIndex(button => button.children[0].getAttribute("aria-current") === "true");
          
          if (indexButton >= 0 && indexButton + 1 < listaHorizontal.length) {
            listaHorizontal[indexButton + 1].children[0].click(); // Clica no próximo botão de paginação
            index1 = 0; // Reinicia o índice para percorrer a nova página
            setTimeout(loopLista1, 2000); // Aguarda um tempo antes de iniciar novamente o loop
          } else {
            console.log("Fim da navegação ou botão de próxima página não encontrado.");
          }
        } else {
          console.log("Elemento de paginação não encontrado.");
        }
      }

      loopLista1(); // Inicia o loop
    }
  }
});
