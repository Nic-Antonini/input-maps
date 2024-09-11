// src/components/EntradaEndereco.tsx

import React, { useState } from 'react';
import Mapa from './Mapa';  // Certifique-se de importar o Mapa corretamente

const EntradaEndereco: React.FC = () => {
  const [endereco, setEndereco] = useState<string>('');

  return (
    <div>
      <input
        type="text"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        placeholder="Digite o endereço"
      />
      <Mapa endereco={endereco} />  {/* Passando a prop 'endereco' corretamente */}
    </div>
  );
};

export default EntradaEndereco;
