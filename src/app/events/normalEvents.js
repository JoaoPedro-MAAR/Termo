//import {Clique_teclado, Clique_teclado_virtual , Botar_letra , tentativa, backspace} from '@app/events/normalEvents.js'
import Home ,{AttBloco} from '@/app/page.js'
import {AddTextBox} from '@/app/model/text_box.js'
import {getWord} from '@/app/events/word.js'
import { pegar_selecionados, pegar_grid_tentativas, getAllBlocos } from './eventListenercomponent';
import { ShowAlert, Shake } from '@/app/events/visualEvents.js';
import { Palavras_Reais } from '@/app/model/dicio';
import { MakeDictionary } from './para_banco_dados';
import { Vitoria_false, Vitoria_true } from '@/app/page.js';



export function Quit(){
  localStorage.removeItem('usuario')
  window.location.reload()
}

const TAMANHO_PALAVRA = 5;
let keyBloco = 0

function getKeyBloco(){
  return keyBloco
}


function IncrementKeyBloco(){
  keyBloco += 1
}

function DecrementKeyBloco(){
  keyBloco -= 1
}

export function Clique_teclado(e) {
 
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
}



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



function Botar_letra(e) {
 
  

  let lista_dos_selecionados = pegar_selecionados()
  

  //  let lista_dos_selecionados = grid_tentativas.querySelectorAll('[estado-atual="selecionado"]')

  if (lista_dos_selecionados.length >= 5) return;
  //Busca pelo primeiro bloco onde não tem nenhuma propriedade chamada data letter
  const proximoBloco = pegar_grid_tentativas().querySelector("[dataletter='ç']");
  proximoBloco.setAttribute("dataletter", e);
  proximoBloco.setAttribute("estadoatual", "selecionado");
  proximoBloco.innerHTML = e;
 // AtualizarBlocos(keyBloco, "selecionado", e, Attbloco);
  IncrementKeyBloco()
  //proximoBloco.innerHTML = e;
  //proximo_Bloco.setAttribute("estado-atual", "selecionado");
}


export function backspace() {
    let grid = pegar_grid_tentativas()
    let lista_dos_selecionados = grid.querySelectorAll(
      '[estadoatual="selecionado"]',
    );
    let ultimo_selecionado =
      lista_dos_selecionados[lista_dos_selecionados.length - 1];
    
    if (ultimo_selecionado === null) {
      return;
    }

    ultimo_selecionado.setAttribute("dataletter", "ç");
    ultimo_selecionado.setAttribute("estadoatual", 'nenhum');
    ultimo_selecionado.innerHTML = "";
  }

export let count_erro = 0



export function getCountErro(){
  return count_erro
}

export function IncrementCountErro(){
  count_erro += 1
}

let tentativas = []


function ArrayToString(array){
  let string = ''
  array.forEach((element) => {
    var letra = element.innerHTML
    string += letra
    
})
return string
}


function removeAccents(word) {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function CheckWord(word) {
  // Remove acentos da palavra e converte para minúsculas
  const normalizedWord = removeAccents(word.toLowerCase());
  // Verifica se a palavra normalizada está presente como chave no objeto Palavras_Reais
  return Palavras_Reais.hasOwnProperty(normalizedWord);
}


export function tentativa() {
   
    const AllSelecionadas = pegar_selecionados();
  
    //const word = AllSelecionadas.map((bloco) => bloco.innerHTML).join("");
    
    if (
      AllSelecionadas.length !== TAMANHO_PALAVRA &&
      AllSelecionadas.length > 0
    ) {
      ShowAlert(`So palavras com ${TAMANHO_PALAVRA} letras`);
      Shake(AllSelecionadas)
      // Fazer um Alert e da uma vibrada nas letras
      return;
    } else if (AllSelecionadas.length === 0) {
      Shake()
      return;
    }
      else{
        if ((CheckWord(ArrayToString(AllSelecionadas))) || (getWord() == ArrayToString(AllSelecionadas)) || true)  {
       ;
        var result = AddTextBox(getWord());
        if (result == true) {ParaTudo(getCountErro())} else {
          IncrementCountErro();
          if (count_erro == 6) {ParaTudo(getCountErro())}
        }
      }
      else{
        ShowAlert(`Essa palavra não está no nosso dicionário, tente outra!`);
      Shake(AllSelecionadas)
      }
  }
}


import { PARARTUDO } from '@/app/events/eventListenercomponent.js';

export function ParaTudo(count_erro) {
    PARARTUDO();
    document.removeEventListener('keydown', Clique_teclado);
    if (count_erro != 6) {document.addEventListener('keyup', (e) => {ShowAlert("parabens, você ganhou!");Shake(getAllBlocos())})
    Vitoria_true()} 
    else {
      document.addEventListener('keyup', (e) => {
        ShowAlert(`Errou paizão, a palavra era <b>${getWord().toUpperCase()}</b>. mais sorte na próxima :/`, 2000);
        Shake(getAllBlocos())
      })
    Vitoria_false()}
    Shake(getAllBlocos())
    MakeDictionary()

  }

