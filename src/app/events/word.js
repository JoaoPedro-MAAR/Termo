import { Palavras_Reais } from '@/app/model/dicio.js';
import { GetRandomPalavra } from '@/services/storage.js';

let Chave_valor_realWords = Object.entries(Palavras_Reais);
const index = Math.floor(Math.random() * (2143 - 0) + 0)
const Array_Palavra_desejada = Chave_valor_realWords[index];
const Palavra_Comparacao = Array_Palavra_desejada[0];




export async function fetchPalavra() {
  
    let palavra = await GetRandomPalavra();
    
    return palavra;
  
}

let palavra = fetchPalavra()


export function getTArrayWord(){
 return Array_Palavra_desejada
}
export function getWord() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const palavra = sessionStorage.getItem('palavra');
      return palavra;
    }
    return null;
  }
  
  export function getRightWord() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const palavra = sessionStorage.getItem('palavra');
      return palavra;
    }
    return null;
  }