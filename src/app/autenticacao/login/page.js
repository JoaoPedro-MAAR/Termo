'use client'

import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div>
      <h1 className="titulo">Wordle PT-BR</h1> 
      <div className="card">
        <h2 className="titulo-secundario">Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Senha:</label> 
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Não tem uma conta?
          <Link href="/registro">Cadastre-se aqui</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
