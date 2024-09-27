'use client';
import { useState } from "react";
import Storage from "@/services/storage";
import Metricas from "@/components/metricas";
import getEstatisticas from "@/services/estatisticas";


export default function Home() {

  // variaveis de estado
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [partidas, setpartidas] = useState([]);
  const [vitorias, setVitorias] = useState(0);
  const [totalPartidas, setTotalPartidas] = useState(0);
  const [percentualTentativas1, setPercentualTentativas1] = useState(0);
  const [percentualTentativas2, setPercentualTentativas2] = useState(0);
  const [percentualTentativas3, setPercentualTentativas3] = useState(0);
  const [percentualTentativas4, setPercentualTentativas4] = useState(0);
  const [percentualTentativas5, setPercentualTentativas5] = useState(0);
  const [percentualTentativas6, setPercentualTentativas6] = useState(0);


  async function getData(palavra) {
    return await getEstatisticas(palavra);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input Value:", inputValue);

    if (inputValue.length == 5 && inputValue.match(/^[a-zA-Z]+$/))  {
      setSubmittedValue(inputValue);

      getData(inputValue).then((data) => setpartidas(data));
      setTotalPartidas(partidas.totalPartidas);
      setVitorias(partidas.percentualVitorias);
      setPercentualTentativas1(partidas.percentualTentativas1);
      setPercentualTentativas2(partidas.percentualTentativas2);
      setPercentualTentativas3(partidas.percentualTentativas3);
      setPercentualTentativas4(partidas.percentualTentativas4);
      setPercentualTentativas5(partidas.percentualTentativas5);
      setPercentualTentativas6(partidas.percentualTentativas6);
    } 
    
    else {
      setSubmittedValue("");
      setTotalPartidas(0);
      setVitorias(0);
      setPercentualTentativas1(0);
      setPercentualTentativas2(0);
      setPercentualTentativas3(0);
      setPercentualTentativas4(0);
      setPercentualTentativas5(0);
      setPercentualTentativas6(0);
    }
    

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
    <Metricas
            palavra={submittedValue}
            totalPartidas={totalPartidas}
            pctWin={vitorias}
            pctTry1={percentualTentativas1}
            pctTry2={percentualTentativas2}
            pctTry3={percentualTentativas3}
            pctTry4={percentualTentativas4}
            pctTry5={percentualTentativas5}
            pctTry6={percentualTentativas6}
          />
    </div></>
  );
}
