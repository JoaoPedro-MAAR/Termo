"use client";
import { useState, useRef, useContext, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import EventListenerComponent from "./events/eventListenercomponent";
import {GridComponent} from "./events/dynamic_gt.js";
import KeyboardComponent from "./events/dynamic_kb.js";
import {Clique_teclado, Clique_teclado_virtual , Quit} from "./events/normalEvents.js";

import ButtonComponent from "./ButtonComponent";
import AcabouProvider,{Acabou} from "@/app/boolcontext.js";
//import {certo} from "@/app/events/visualEvents.js";
import { createContext } from "react";
import { GetRandomPalavra } from "@/services/storage";
import { MakeDictionary } from "./events/para_banco_dados";






export const AttBloco = (id, estadoatual, dataletter, setBlocos) => {
  setBlocos(prevBlocos => prevBlocos.map(bloco => 
    bloco.id === id ? { ...bloco, estadoatual, dataletter } : bloco
  ));
};




export function getVitoria() {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    let vitoria = sessionStorage.getItem('vitoria');
    return vitoria;
  }
  return null;
}

export function Vitoria_true() {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    sessionStorage.setItem('vitoria', true);
  }
}

export function Vitoria_false() {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    sessionStorage.setItem('vitoria', false);
  }
}

export function getUsuario() {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem('usuario');
  }
  return null;
}


export default function Home() {
  const [blocos, setBlocos] = useState(Array.from({ length: 30 }).map((_, index) => ({
    id: index,
    estadoatual: 'nenhum',
    dataletter: 'ç',
    className: 'bloco'
  })));

  const {value , toggleValue} = useContext(Acabou);

  const [usuario, setUsuario] = useState(null);
  useEffect (() => {
    const storedUser = localStorage.getItem('usuario');
    if (storedUser === null) {
      // Levar a seção de login
      window.location.href = 'autenticacao/login';

    }
    setUsuario(JSON.parse(storedUser));
  }, []);


useEffect(() => {
      const fetchPalavra = async () => {
        try {
          const palavraAleatoria = await GetRandomPalavra();
          sessionStorage.setItem('palavra', palavraAleatoria);
        } catch (error) {
          console.error('Erro ao buscar a palavra:', error);
        }
      };
  
      fetchPalavra();
    }, []);

    useEffect(() => {
      const savePartida = async () => {
        try {
          const Dict = await MakeDictionary(); // Certifique-se de que MakeDictionary é uma função assíncrona
          await createPartida(Dict);
        } catch (error) {
          console.error('Erro ao salvar a partida:', error);
        }
      };
    
      savePartida();
    }, [getVitoria()]);
  return (
    <>
    <div>

      <EventListenerComponent/>
        
    <header>
      <ButtonComponent />


      <h1 className='titulo'>Wordle PT-BR</h1>
      </header>
      <div className="alert-box">
      </div>
      
      <main>
        
      
        <GridComponent blocos={blocos} Attbloco={AttBloco}/>
        

        

        </main>
        
    
    

        <KeyboardComponent/>
 
    </div>
    

    <div id="app"></div>
    </>
    /*<div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>*/
  );
}