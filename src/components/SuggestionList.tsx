import React from 'react';
import '../css/ViewSuggestions.css';

interface Suggestion {
  nombre: string;
  apellido: string;
  email: string;
  planeta: string;
  nave: string;
  mision: string;
  recursos: string;
}

interface SuggestionListProps {
  suggestions: Suggestion[];
}

const SuggestionList: React.FC<SuggestionListProps> = ({ suggestions }) => {
  if (!suggestions.length) {
    return <p>No hay sugerencias disponibles.</p>;
  }

  return (
    <div className="suggestion-list">
      {suggestions.map((suggestion, index) => (
        <div key={index} className="suggestion-item">
          <p><strong>Nombre:</strong> {suggestion.nombre}</p>
          <p><strong>Apellido:</strong> {suggestion.apellido}</p>
          <p><strong>Email:</strong> {suggestion.email}</p>
          <p><strong>Planeta:</strong> {suggestion.planeta}</p>
          <p><strong>Nave:</strong> {suggestion.nave}</p>
          <p><strong>Misión:</strong> {suggestion.mision}</p>
          <p><strong>Recursos:</strong> {suggestion.recursos}</p>
        </div>
      ))}
    </div>
  );
};

export default SuggestionList;
