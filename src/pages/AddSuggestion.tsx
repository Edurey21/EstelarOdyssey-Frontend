import React from 'react';
import SuggestionForm from '../components/SuggestionForm';
import '../css/AddSuggestion.css';

const AddSuggestion: React.FC = () => {
  const handleSubmit = async (form: any) => {
    try {
      const response = await fetch('http://localhost:5000/api/suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        alert('Sugerencia enviada con éxito');
      } else {
        const errorData = await response.json();
        alert(`Error al enviar la sugerencia: ${errorData.error}`);
      }
    } catch (error) {
      alert('Error al enviar la sugerencia');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Dar una Sugerencia</h1>
      <SuggestionForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddSuggestion;
