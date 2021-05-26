import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import { About } from '../components';
import renderWithRouter from '../RenderWithRouter';

test('Se a página About foi renderizada', () => {
  const { getByRole, history } = renderWithRouter(<App />);

  userEvent.click(getByRole('link', { name: /about/i }));

  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

test('Se a página contém h2 com o texto About Pokedex', () => {
  const { getByRole } = renderWithRouter(<About />);

  // userEvent.click(getByRole('link', { name: /about/i }));

  const headingAbout = getByRole('heading', { name: /about pokédex/i });
  expect(headingAbout).toBeInTheDocument();
});

test('Se a página contém dois parágrafos', () => {
  const { getAllByRole } = renderWithRouter(<About />);

  const paragraphs = getAllByRole('paragraph');
  expect(paragraphs.length).toBe(2);
});

test('Se a página contém uma imagem', () => {
  const { getByRole } = renderWithRouter(<About />);

  const img = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

  const imgPokeAbout = getByRole('img');
  expect(imgPokeAbout.src).toBe(img);
});
