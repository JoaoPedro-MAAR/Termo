import teclas from "./model/keyboard.js";
import AddTextBox from "./model/text_box.js";
import { Palavras_Reais } from "./model/dicio.js";

let Chave_valor_realWords = Object.entries(Palavras_Reais);
//const DataCriacao = new Date(2024, 7, 13);
//const ms_off = Date.now() - DataCriacao;
//const index = Math.floor(ms_off / 1000 / 60 / 60 / 24);
const index = Math.floor(Math.random() * (2143 - 0) + 0)

const Array_Palavra_desejada = Chave_valor_realWords[index];
const Palavra_Comparacao = Array_Palavra_desejada[0];
console.log(Palavra_Comparacao)
const Palavra_certa_com_caracteres_especiais = Array_Palavra_desejada[1];
const Alert_box = document.querySelector(".alert-box");




function getAllBlocos(){
   return document.querySelectorAll(".bloco")
}
export function getTArrayWord(){
  return Array_Palavra_desejada
}

export function getTodayWord(){
  return Palavra_Comparacao
}
var count_erro = 0


const TAMANHO_PALAVRA = 5;

const grid_tentativas = document.querySelector(".gridTentativas");

function pegar_grid_tentativas() {
  return document.querySelector("gridTentativas");
}

const keyboardHTML = document.querySelector(".teclado");
let rows_keyboard = document.querySelector("#row1");

/* FUNÇÕES DE ESTILO */

// Função que faz as letras do teclado no modelo , <div class = 'letra'><p>Letra<p> ou icone</div>
let contador = -1;
function Make_keyboard() {
  for (let tecla of teclas) {
    if (tecla.id === "backspace" || tecla.id === "enter") {
      rows_keyboard.insertAdjacentHTML(
        "beforeend",
        `<button class="${tecla.id}"id="especial" data-${tecla.id}>${tecla.icone}</button>`,
      );
      if (tecla.id === "backspace") {
        rows_keyboard = document.querySelector("#row3");
      }
    } else {
      rows_keyboard.insertAdjacentHTML(
        "beforeend",
        `<button class="key" data-key="${tecla.id}">${tecla.id}</button>`,
      );
      if (tecla.id === "p") {
        rows_keyboard = document.querySelector("#row2");
      }
    }
  }
}

function Mk_Grid_Tentativas(tentativas) {
  let numero_de_blocos = tentativas * 5
  for (var i = 1; i <= numero_de_blocos; i++) {
    grid_tentativas.insertAdjacentHTML(
      "beforeend",
      `<div class="bloco"></div>`,
    );
  }
}

/* 

FIM DAS FUNÇÕES DE ESTILO

*/
// Chama começar jogo afim e adicionar os Eventos
function Start_game() {
  document.addEventListener("keyup", Clique_teclado);
  document.addEventListener("click", Clique_teclado_virtual);
}

function ParaTudo(count_erro) {
  console.log('para tudo')
  
  document.removeEventListener("keyup", Clique_teclado);
  if (count_erro != 6) {document.addEventListener('keyup', (e) => {ShowAlert("parabens, você ganhou!");Shake(getAllBlocos())})} 
  else {
    document.addEventListener('keyup', (e) => {
      ShowAlert(`Errou paizão, a palavra era <b>${Palavra_certa_com_caracteres_especiais.toUpperCase()}</b>. mais sorte na próxima :/`, 2000);
      Shake(getAllBlocos())
    })}
  Shake(getAllBlocos())
}


function Clique_teclado_virtual(e) {
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

function Botar_letra(e) {
  //Funcão que bota a letra no grid de tentativas onde não tem uma letra

  let grid = pegar_grid_tentativas()
  let lista_dos_selecionados = grid.querySelectorAll('[estado-atual="selecionado"]',);
  

  //  let lista_dos_selecionados = grid_tentativas.querySelectorAll('[estado-atual="selecionado"]')

  if (lista_dos_selecionados.length >= 5) return;
  //Busca pelo primeiro bloco onde não tem nenhuma propriedade chamada data letter
  const proximo_Bloco = grid_tentativas.querySelector(":not([data-letter])");

  proximo_Bloco.setAttribute("data-letter", e);
  proximo_Bloco.innerHTML = e;
  proximo_Bloco.setAttribute("estado-atual", "selecionado");
}

function backspace() {
  let lista_dos_selecionados = grid_tentativas.querySelectorAll(
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
  const AllSelecionadas = grid_tentativas.querySelectorAll(
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
      var result = AddTextBox(Palavra_Comparacao);
      if (result == true) {ParaTudo(count_erro)} else {
        count_erro += 1
        if (count_erro == 6) {ParaTudo(count_erro)}
      }
    }
}

function ShowAlert(texto, duration = 1000) {
  const alert = document.createElement("div");
  alert.innerHTML = texto;
  alert.classList.add("alert");

  Alert_box.insertAdjacentElement("afterbegin", alert);
  if (duration == null) return;

  setTimeout(() => {
    alert.classList.add("hide");
    alert.addEventListener("transitionend", () => {
     
      alert.remove();
    });
  }, duration);
}



function Shake(array){
  array.forEach((element) => {
    element.classList.add("shake")
   
    element.addEventListener("animationend",()=>{
      element.classList.remove("shake")
      
    })
  },)
}


