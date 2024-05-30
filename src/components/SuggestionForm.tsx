import React, { useState } from 'react';

interface SuggestionFormProps {
  onSubmit: (form: SuggestionFormState) => void;
}

interface SuggestionFormState {
  nombre: string;
  apellido: string;
  email: string;
  planeta: string;
  nave: string;
  mision: string;
  recursos: string;
}

const SuggestionForm: React.FC<SuggestionFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState<SuggestionFormState>({
    nombre: '',
    apellido: '',
    email: '',
    planeta: '',
    nave: '',
    mision: '',
    recursos: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      nombre: '',
      apellido: '',
      email: '',
      planeta: '',
      nave: '',
      mision: '',
      recursos: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="planeta" value={form.planeta} onChange={handleChange} placeholder="Planeta" required />
      <input name="nave" value={form.nave} onChange={handleChange} placeholder="Nave Espacial" required />
      <input name="mision" value={form.mision} onChange={handleChange} placeholder="Misión" required />
      <input name="recursos" value={form.recursos} onChange={handleChange} placeholder="Recursos" required />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default SuggestionForm;
