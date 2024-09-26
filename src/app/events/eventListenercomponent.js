import { useEffect } from 'react';
//import { Clique_teclado } from '../../Vanilla-old/main.js';
import  AddTextBox from '@/app/model/text_box.js';
import { Palavras_Reais } from '@/app/model/dicio.js';


let Chave_valor_realWords = Object.entries(Palavras_Reais);
const index = Math.floor(Math.random() * (2143 - 0) + 0)
const Array_Palavra_desejada = Chave_valor_realWords[index];
const Palavra_Comparacao = Array_Palavra_desejada[0];
function getAllBlocos(){
  return document.querySelectorAll(".bloco")
}
export function getTArrayWord(){
 return Array_Palavra_desejada
}

export function getTodayWord(){
 return Palavra_Comparacao
}
let palavra = getTodayWord()

const TAMANHO_PALAVRA = 5;

function pegar_grid_tentativas() {
    return document.querySelector('.gridTentativas');
}





const EventListenerComponent = () => {
    useEffect(() => {
        const handleKeyDown = (e) => {
           
                if (e.key === "Enter") {
                  tentativa();
                }
                if (e.key === "Backspace" || e.key === "Delete") {
                  backspace();
                }
                if (e.key.match(/^[a-z]$/)) {
                  Botar_letra(e.key);
                } else if (e.key.match(/^[A-Z]$/)) {
                  let letra_minuscula = e.key.toLowerCase();
                  Botar_letra(letra_minuscula);
                }
              
              ;
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return null;
};


function Botar_letra(e) {
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

function tentativa() {
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

export default EventListenerComponent;