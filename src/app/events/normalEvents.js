export function Clique_teclado_virtual(e) {
  if (e.target.matches("[data-key]")) {
    Botar_letra(e.target.dataset.key);
    return;
  }
  if (e.target.matches("[data-enter]")) {
    tentativa();
  }
  if (e.target.matches("[data-backspace]")) {
    backspace();
  } else {
    return;
  }
}



export function Botar_letra(e) {
    //Funcão que bota a letra no grid de tentativas onde não tem uma letra
  
    let grid = pegar_grid_tentativas()
    let lista_dos_selecionados = grid.querySelectorAll('[estado-atual="selecionado"]',);
    
  
    //  let lista_dos_selecionados = grid_tentativas.querySelectorAll('[estado-atual="selecionado"]')
  
    if (lista_dos_selecionados.length >= 5) return;
    //Busca pelo primeiro bloco onde não tem nenhuma propriedade chamada data letter
    const proximo_Bloco = grid.querySelector(":not([data-letter])");
  
    proximo_Bloco.setAttribute("data-letter", e);
    proximo_Bloco.innerHTML = e;
    proximo_Bloco.setAttribute("estado-atual", "selecionado");
  }
  
  function backspace() {
    let grid = pegar_grid_tentativas()
    let lista_dos_selecionados = grid.querySelectorAll(
      '[estado-atual="selecionado"]',
    );
    let ultimo_selecionado =
      lista_dos_selecionados[lista_dos_selecionados.length - 1];
    
    if (ultimo_selecionado === null) {
      return;
    }
  
    ultimo_selecionado.removeAttribute("data-letter");
    ultimo_selecionado.removeAttribute("estado-atual");
    ultimo_selecionado.innerHTML = "";
  }




export function tentativa() {
    let grid = pegar_grid_tentativas();
    const AllSelecionadas = grid.querySelectorAll(
      '[estado-atual="selecionado"]',
    );
  
    // const arrayInnerHTML = Array.from(AllSelecionadas, element => element.innerHTML);
    if (
      AllSelecionadas.length !== TAMANHO_PALAVRA &&
      AllSelecionadas.length > 0
    ) {
      ShowAlert(`So palavras com ${TAMANHO_PALAVRA} letras`);
      Shake(AllSelecionadas)
      // Fazer um Alert e da uma vibrada nas letras
      return;
    } else if (AllSelecionadas.length === 0) {
      //Shake()
      return;
    }
      else{
        var result = AddTextBox(palavra);
        if (result == true) {ParaTudo(count_erro)} else {
          count_erro += 1
          if (count_erro == 6) {ParaTudo(count_erro)}
        }
      }
  }
  
  