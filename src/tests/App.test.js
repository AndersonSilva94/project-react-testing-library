import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../RenderWithRouter';

// Aqui troquei o MemoryRouter por RenderWithRouter para ficar padronizado
test('renders a reading with the text `Pokédex`', () => {
  const { getByText } = renderWithRouter(<App />);

  const heading = getByText(/Pokédex/i);
  expect(heading).toBeInTheDocument();
});

test('shows the Pokédex when the route is `/`', () => {
  const { getByText, history } = renderWithRouter(<App />);
  const { pathname } = history.location;

  expect(pathname).toBe('/');
  expect(getByText('Encountered pokémons')).toBeInTheDocument();
});

test('teste se há um menu fixo, com 3 links', () => {
  const { getByRole } = renderWithRouter(<App />);

  const navPoke = getByRole('navigation');
  expect(navPoke).toBeInTheDocument();

  const navPokeHome = getByRole('link', { name: /home/i });
  expect(navPokeHome).toBeInTheDocument();

  const navPokeAbout = getByRole('link', { name: /about/i });
  expect(navPokeAbout).toBeInTheDocument();

  const navPokeFavorite = getByRole('link', { name: /favorite pokémons/i });
  expect(navPokeFavorite).toBeInTheDocument();
});

test('Ao clicar em Home é redirecionado para "/"', () => {
  const { getByRole, history } = renderWithRouter(<App />);

  userEvent.click(getByRole('link', { name: /home/i }));

  const { pathname } = history.location;

  expect(pathname).toBe('/');
});

test('Ao clicar em About é redirecionado para "/about"', () => {
  const { getByRole, history } = renderWithRouter(<App />);

  userEvent.click(getByRole('link', { name: /about/i }));

  const { pathname } = history.location;

  expect(pathname).toBe('/about');
});

test('Ao clicar em Favorite Pokémons é redirecionado para "/favorites"', () => {
  const { getByRole, history } = renderWithRouter(<App />);

  userEvent.click(getByRole('link', { name: /favorite pokémons/i }));

  const { pathname } = history.location;

  expect(pathname).toBe('/favorites');
});

test('Ao acessar uma URL desconhecida é redirecionado para a página Not Found', () => {
  const { getByText, history } = renderWithRouter(<App />);

  history.push('/teste');

  const pokeNotFound = getByText('Page requested not found');
  expect(pokeNotFound).toBeInTheDocument();
});
