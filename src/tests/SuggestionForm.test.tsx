import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SuggestionForm from '../components/SuggestionForm';
import React from 'react';

test('renders SuggestionForm component', () => {
  render(<SuggestionForm onSubmit={jest.fn()} />);
  const nombreInput = screen.getByPlaceholderText(/Nombre/i);
  expect(nombreInput).toBeInTheDocument();
  const apellidoInput = screen.getByPlaceholderText(/Apellido/i);
  expect(apellidoInput).toBeInTheDocument();
  const emailInput = screen.getByPlaceholderText(/Email/i);
  expect(emailInput).toBeInTheDocument();
  const planetaInput = screen.getByPlaceholderText(/Planeta/i);
  expect(planetaInput).toBeInTheDocument();
  const naveInput = screen.getByPlaceholderText(/Nave Espacial/i);
  expect(naveInput).toBeInTheDocument();
  const misionInput = screen.getByPlaceholderText(/Misión/i);
  expect(misionInput).toBeInTheDocument();
  const recursosInput = screen.getByPlaceholderText(/Recursos/i);
  expect(recursosInput).toBeInTheDocument();
  const submitButton = screen.getByRole('button', { name: /Enviar/i });
  expect(submitButton).toBeInTheDocument();
});
