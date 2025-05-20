import { useState } from 'react';


function Paginacao() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const items = [
  'Item 1', 'Item 2', 'Item 3', 'Item 4',
  'Item 5', 'Item 6', 'Item 7', 'Item 8',
  'Item 9', 'Item 10', 'Item 11', 'Item 12',
  'Item 13', 'Item 14', 'Item 15', 'Item 16',
];


  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div>
      <h2>Itens</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div style={{ marginTop: '20px' }}>
        {/* Botões de navegação */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>

        <span style={{ margin: '0 10px' }}>
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default Paginacao;


// Explicação do que está acontecendo para não esquecer depois
// Parte	                        O que faz
// useState(1)	                    Armazena a página atual
// itemsPerPage	                    Quantos itens queremos por página
// startIndex e endIndex	        Calculam os limites da página atual
// items.slice(...)	                Corta apenas os itens daquela página
// Botões "Anterior" e "Próxima"	Mudam a página atual com segurança