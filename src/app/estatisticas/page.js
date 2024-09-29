'use client';
import { useState, useEffect } from "react";
import Storage from "@/services/storage";
import Metricas from "@/components/metricas";
import getEstatisticas from "@/services/estatisticas";


export default function Home() {

  // variaveis de estado
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [vitorias, setVitorias] = useState(0);
  const [totalPartidas, setTotalPartidas] = useState(0);
  const [percentualTentativas1, setPercentualTentativas1] = useState(0);
  const [percentualTentativas2, setPercentualTentativas2] = useState(0);
  const [percentualTentativas3, setPercentualTentativas3] = useState(0);
  const [percentualTentativas4, setPercentualTentativas4] = useState(0);
  const [percentualTentativas5, setPercentualTentativas5] = useState(0);
  const [percentualTentativas6, setPercentualTentativas6] = useState(0);
  const [submitInvalido, setSubmitInvalido] = useState(false);
  const [msgErro, setMsgErro] = useState("");


  async function getData(palavra) {
    return await getEstatisticas(palavra);
  }

  function resetDados(msgErro) {
    setSubmitInvalido(true);
    setSubmittedValue("");
    setTotalPartidas(0);
    setVitorias(0);
    setPercentualTentativas1(0);
    setPercentualTentativas2(0);
    setPercentualTentativas3(0);
    setPercentualTentativas4(0);
    setPercentualTentativas5(0);
    setPercentualTentativas6(0);
    setMsgErro(msgErro);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input Value:", inputValue);

    if (inputValue.length == 5 && inputValue.match(/^[a-zA-Z]+$/))  {
      setSubmittedValue(inputValue.toLowerCase());
    } 
    
    else {
      resetDados("A palavra deve conter 5 letras, e ser composta apenas por letras");
    }
    

  }

  useEffect(() => {
    if (submittedValue.length === 5) {
      getData(submittedValue).then((data) => {
        if (!data) {
          resetDados("Palavra não encontrada");
          return;
        }
        setTotalPartidas(data.totalPartidas);
        setVitorias(data.percentualVitorias);
        setPercentualTentativas1(data.percentualTentativas1);
        setPercentualTentativas2(data.percentualTentativas2);
        setPercentualTentativas3(data.percentualTentativas3);
        setPercentualTentativas4(data.percentualTentativas4);
        setPercentualTentativas5(data.percentualTentativas5);
        setPercentualTentativas6(data.percentualTentativas6);
        setSubmitInvalido(false);
      });
    }
  }, [submittedValue]);


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
            showMsgErro={submitInvalido}
            msgErro={msgErro}
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
