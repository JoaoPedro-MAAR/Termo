import {getTentativas} from "@/app/model/text_box.js"
import createPartida from "@/services/storage.js"
import {getUsuario} from "@/app/page.js"
import { getVitoria } from "./eventListenercomponent"
import {getWord } from "./word.js"

function MakeDictionary(){
    let tentativas = transformArray(getTentativas())
    let usuario = getUsuario()
    const Dict ={
        palavra: getWord(),
        usuario: usuario,
        Tentativa_1: tentativas[0],
        Tentativa_2: tentativas[1],
        Tentativa_3: tentativas[2],
        Tentativa_4: tentativas[3],
        Tentativa_5: tentativas[4],
        Tentativa_6: tentativas[5],
        Vitoria: getVitoria()

    }
    }




function transformArray(arr) {
    let result = new Array(6).fill(null);

    for (let i = 0; i < arr.length; i++) {
            result[i] = arr[i];
    }

    return result;
}



const array = transformArray([1,2,3,4])
console.log(array)