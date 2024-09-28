// pages/register.js
import { useState } from 'react';
import Link from 'next/link';

const registro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div>
      <h1 className="titulo">Wordle PT-BR</h1>
      <div className="card">
        <h2 className="titulo-secundario">Registrar</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
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
          <div>
            <label>Confirmar Senha:</label> 
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Registrar</button> 
        </form>
        <p>
          Já tem uma conta?
          <Link href="/login">Faça login aqui</Link>
        </p>
      </div>
    </div>
  );
};

export default registro;
