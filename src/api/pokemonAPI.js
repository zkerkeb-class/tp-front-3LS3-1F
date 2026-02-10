const API_URL = 'http://localhost:3000';

export const getPokemon = (param) =>
  fetch(`${API_URL}/pokemons/${param}`).then(res => res.json());

export const deletePokemon = (id) =>
  fetch(`${API_URL}/pokemons/${id}`, { method: 'DELETE' });

export const updatePokemon = (id, data) =>
  fetch(`${API_URL}/pokemons/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json());
