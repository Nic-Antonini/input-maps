// src/App.tsx

import React from 'react';
import EntradaEndereco from './components/EntradaEndereco';

const App: React.FC = () => {
  return (
    <div>
      <h1>Localizador de Endereços</h1>
      <EntradaEndereco />
    </div>
  );
};

export default App;
