'use client';
import { useState } from "react";
import Storage from "@/services/storage";


export default function Home() {

  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [resposta, setResposta] = useState([]);

  async function getData(palavra) {
    return await Storage.readPartidas(palavra);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input Value:", inputValue);
    setSubmittedValue(inputValue);

    getData(inputValue).then((data) => setResposta(data));

    resposta.forEach((resposta) => {
      console.log(resposta);
    });

  }

  return (
    <><header>
      <h1 className='titulo'>Estatisticas</h1>
      </header>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          placeholder="Pesquise uma palavra" 
          maxLength="5"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}></input>

        <input type="submit" value="Pesquisar"></input>
      </form>
    
    <div id="app">
      <h1 className="titulo">Palavra: {submittedValue}</h1>

      
       
    </div></>
  );
}
