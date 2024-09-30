
//import { Clique_teclado } from '../../Vanilla-old/main.js';
import  AddTextBox from '@/app/model/text_box.js';
import { ShowAlert, Shake } from '@/app/events/visualEvents';
//import {Clique_teclado, Clique_teclado_virtual} from '@app/events/normalEvents.js'
import {Clique_teclado, Clique_teclado_virtual , tentativa, backspace , count_erro , getCountErro, IncrementCountErro,ParaTudo} from '@/app/events/normalEvents.js'
//import { pegar_grid_tentativas } from './dynamic_gt';
import { AtualizarBlocos } from '../page.js';
import { getWord, getTArrayWord } from './word.js';
import { createContext, useContext, useState, useEffect } from "react";
import { Acabou } from '@/app/boolcontext.js';
import { MakeDictionary } from './para_banco_dados.js';
import { Vitoria_false, Vitoria_true } from '@/app/page.js';






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

let parar = false;


export function PARARTUDO(){
  parar = true;

}

let s = 0;

const EventListenerComponent = ({vitoria, }) => {
    const {value , toggleValue} = useContext(Acabou);
    
    
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (value)  {
              if (parar && s===0) {
                  
                  toggleValue();
                  ParaTudo(getCountErro());
                  ParaTudoEspecial(getCountErro(),handleKeyDown);
                  s += 1;console.log('parou:', value , s);
          }

            
              else {
                  console.log('não parou:', value);
                  Start_game();
                  ;
          }

          } 
              
        };
        
          document.addEventListener('keydown', Clique_teclado)
          document.addEventListener('click', Clique_teclado_virtual)
       
        
          

        return () => {
            document.removeEventListener('keydown', handleKeyDown);

        };
    }, []);

    return (
        <div className='False'>
        </div>
    );
    
      

    
};

export function getAllBlocos (){
  return document.querySelectorAll('.bloco');
}


export function pegar_grid_tentativas() {  
  return document.querySelector('.gridTentativas');}

export function pegar_selecionados() {
  return pegar_grid_tentativas().querySelectorAll('[estadoatual="selecionado"]');
}




function Start_game() {
  document.addEventListener("keyup", Clique_teclado);
  document.addEventListener("click", Clique_teclado_virtual);
}


function Botar_letra(e) {
      const grid = pegar_grid_tentativas();
      

      let lista_dos_selecionados = grid.querySelectorAll('[estadoatual="selecionado"]');
      

      //  let lista_dos_selecionados = grid_tentativas.querySelectorAll('[estado-atual="selecionado"]')

      if (lista_dos_selecionados.length >= 5) return;
      //Busca pelo primeiro bloco onde não tem nenhuma propriedade chamada data letter
      const proximoBloco = grid.querySelector("[dataletter='ç']");
      proximoBloco.setAttribute("dataletter", e);
      proximoBloco.setAttribute("estadoatual", "selecionado");
      proximoBloco.innerHTML = e;
     // AtualizarBlocos(keyBloco, "selecionado", e, Attbloco);
      IncrementKeyBloco()
      //proximoBloco.innerHTML = e;
      //proximo_Bloco.setAttribute("estado-atual", "selecionado");
    }





function ParaTudoEspecial(count_erro, event) {
      console.log('para tudo especial');
      
      
      document.removeEventListener('keydown', event);
      if (count_erro != 6) {
        document.addEventListener('keyup', (e) => {ShowAlert("parabens, você ganhou!");Shake(getAllBlocos())})
        Vitoria_true();} 
      else {
        document.addEventListener('keyup', (e) => {
          ShowAlert(`Errou paizão, a palavra era <b>${getWord().toUpperCase()}</b>. mais sorte na próxima :/`, 2000);
          Shake(getAllBlocos())
        })
      
      Vitoria_false();}
      Shake(getAllBlocos())
      MakeDictionary();
      
    }
    

export default EventListenerComponent;