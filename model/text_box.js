





export function AddTextBox (resposta){
  /// armazena a área do html que vai ficar a caixa de texto e as tentativas do usuário, além de criar a caixa de texto
  const main = document.querySelector('.grid-tentativas')
  
  const result = AnaliseTentativa(main,resposta)

    // analisa se bateu o limite de tentativas, ou acertou. se só digitou uma letra, result é undefined e ele passa reto.
    return result
    
  }



function AnaliseTentativa (main,resposta) {
    /// armazena em variáveis a área onde fica as palavras enviadas, o que o usuario acabou de enviar, e o resultado pós analise, respectivamente.
    let tentativa = main.querySelectorAll('[estado-atual="selecionado"]')
    let resultado = []
    var count = 0

    /// analisa letra a letra se ela pertence a resposta, e atribui uma cor à letra
    tentativa.forEach((element) => {
      var letra = element.innerHTML
      if (letra == resposta[count]) {
        element.setAttribute("estado-atual",'certo')
      }
      else if (resposta.includes(letra)) {
        element.setAttribute("estado-atual",'p-errado')
        }
      else {
        element.setAttribute("estado-atual",'errado')
      }
      count += 1
      resultado.push(letra)
    })

    /// após analise por letra, ele vai comparar as palavras inteiras
    return resultado.join('') === resposta 
  }


// Algum dos requisitos pra parar o jogo foi atingido, então ele trava o input e exibe a msg


export default AddTextBox;
