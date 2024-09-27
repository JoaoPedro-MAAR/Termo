import Storage from "./storage";

export default async function getEstatisticas(palavra) {
  const partidas = await Storage.readPartidas(palavra);
  const totalPartidas = partidas.length;

  let vitorias = 0;
  let tentativas1 = 0;
  let tentativas2 = 0;
  let tentativas3 = 0;
  let tentativas4 = 0;
  let tentativas5 = 0;
  let tentativas6 = 0;

  partidas.forEach((resposta) => {
    if (resposta.vitoria) {
      vitorias++;
      if (resposta['Tentativa-6']) {
        tentativas6++;
      }
      else if (resposta['Tentativa-5']) {
        tentativas5++;
      }
      else if (resposta['Tentativa-4']) {
        tentativas4++;
      }
      else if (resposta['Tentativa-3']) {
        tentativas3++;
      }
      else if (resposta['Tentativa-2']) {
        tentativas2++;
      }
      else {
        tentativas1++;
        }
    }});

  const percentualVitorias = calcularPercentual(totalPartidas, vitorias);
  const percentualTentativas1 = calcularPercentual(vitorias, tentativas1);
  const percentualTentativas2 = calcularPercentual(vitorias, tentativas2);
  const percentualTentativas3 = calcularPercentual(vitorias, tentativas3);
  const percentualTentativas4 = calcularPercentual(vitorias, tentativas4);
  const percentualTentativas5 = calcularPercentual(vitorias, tentativas5);
  const percentualTentativas6 = calcularPercentual(vitorias, tentativas6);
    

  return { totalPartidas, percentualVitorias, percentualTentativas1, percentualTentativas2, percentualTentativas3, percentualTentativas4, percentualTentativas5, percentualTentativas6 };
}


function calcularPercentual(A, B) {
    if (A === 0) {
      return 0; // Evita divisão por zero
    }
    const percentual = (B / A) * 100;
    return Number.isInteger(percentual) ? percentual : percentual.toFixed(1);
  }