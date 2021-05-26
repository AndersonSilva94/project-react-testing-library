import React from 'react';
import renderWithRouter from '../RenderWithRouter';
import NotFound from '../components/NotFound';

test('Se a página contém um h2 com o texto Page requested not found 😭', () => {
  const { getByRole } = renderWithRouter(<NotFound />);

  const headingNotFound = getByRole('heading', { name: /page requested not found/i });
  expect(headingNotFound).toBeInTheDocument();
});

test('Se a página contém uma imagem', () => {
  const { getByRole } = renderWithRouter(<NotFound />);

  const imgNotFound = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  const imgPokeNotFound = getByRole('img', { name: imgNotFound });
  expect(imgPokeNotFound).toBeInTheDocument();
});
