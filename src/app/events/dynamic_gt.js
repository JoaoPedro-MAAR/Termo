

const GridComponent = (tentativas) => {

    const numero_de_blocos = Array.from({length:tentativas * 5});

    return (
    <div className="gridTentativas">
      {numero_de_blocos.map(() => <div className="bloco"></div>)}
    </div>
  )
  }


/*let log = Mk_Grid_Tentativas(6)
console.log(log)*/
export default GridComponent;