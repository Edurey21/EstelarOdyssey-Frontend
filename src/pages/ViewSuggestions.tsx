import React, { useEffect, useState } from 'react';
import SuggestionList from '../components/SuggestionList';
import '../css/ViewSuggestions.css';

const ViewSuggestions: React.FC = () => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch('https://estelar-odyssey-backend.vercel.app/api/suggestions');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };
    fetchSuggestions();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Ver Sugerencias</h1>
      <SuggestionList suggestions={Array.isArray(suggestions) ? suggestions : []} />
    </div>
  );
};

export default ViewSuggestions;
