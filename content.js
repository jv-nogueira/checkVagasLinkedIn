document.addEventListener("keydown", function(event) {

  if (event.keyCode === 113) {
    var question = confirm("Deseja começar a percorrer?");
    if (question) {
      var i = 0;
      function loopLista() {
        var indexLista = document.querySelectorAll('.scaffold-layout__list-container')[0].children[i];
        indexLista.scrollIntoView(); // Este método rola a página para que o elemento fique vísivel 

        if (indexLista) {
          var salaryTrue = indexLista.children[0].children[0].children[0].children[0].children[1].children[3];
          var indexURL = indexLista.querySelector('a').href; 
          if(salaryTrue != undefined){
            window.open(indexURL)
          }
          i++; 
          var indexURL = indexLista.querySelector('a').href; // busca diretamente o link
          console.log(indexURL);
          i++; // incrementa o índice para o próximo item

          // Aguarda 1 segundo antes de continuar para evitar loop rápido demais
          setTimeout(loopLista, 1000);
        } else {
          console.log("Todos os elementos foram percorridos ou elemento não encontrado.");
        }
      }

      loopLista(); // Inicia o loop
    }
  }
});
