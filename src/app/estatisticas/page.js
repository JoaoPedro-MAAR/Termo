'use client';
import Image from "next/image";
import styles from "./page.module.css";




export default function Home() {

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input Value:", inputValue);
    // Aqui você pode armazenar o valor do input em uma variável ou fazer outra lógica
  };

  return (
    <><header>
      <h1 className='titulo'>Estatisticas</h1>
      </header>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          placeholder="Digite aqui..." 
          maxlength="5"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}></input>

        <input type="submit" value="Pesquisar"></input>
      </form>
    
    <div id="app"></div></>
  );
}
