import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 10;

  useEffect(() => {
    // Завантаження даних із API
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://thronesapi.com/api/v2/Characters');
        setCharacters(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCharacters();
  }, []);

  // Вирахування індексів для поточної сторінки
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  return (
    <div>
      <div className="character-list">
        {currentCharacters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.imageUrl} alt={character.fullName} />
            <h3>{character.fullName}</h3>
            <p>{character.title}</p>
          </div>
        ))}
      </div>
      <Pagination
        totalItems={characters.length}
        itemsPerPage={charactersPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CharactersPage;