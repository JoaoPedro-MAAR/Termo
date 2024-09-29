import { Palavras_Reais } from '@/app/model/dicio.js';

let Chave_valor_realWords = Object.entries(Palavras_Reais);
const index = Math.floor(Math.random() * (2143 - 0) + 0)
const Array_Palavra_desejada = Chave_valor_realWords[index];
const Palavra_Comparacao = Array_Palavra_desejada[0];


export function getTArrayWord(){
 return Array_Palavra_desejada
}

export function getTodayWord(){
 return 'teste'
}

export function getRightWord(){
 return getTArrayWord[1]
}