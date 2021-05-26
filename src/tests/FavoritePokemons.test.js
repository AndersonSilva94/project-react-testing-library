import React from 'react';
import renderWithRouter from '../RenderWithRouter';
import { FavoritePokemons } from '../components';

test('Se não existirem pokemons ', () => {
  const { getByText } = renderWithRouter(<FavoritePokemons pokemons={ [] } />);

  const notFoundText = getByText('No favorite pokemon found');
  expect(notFoundText).toBeInTheDocument();
});

test('Se retorna todos os cards de pokemons favoritados', () => {
  const favPokes = [
    {
      id: 151,
      name: 'Mew',
      type: 'Psychic',
      averageWeight: {
        value: '4.0',
        measurementUnit: 'kg',
      },
      image: 'https://cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png',
      moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)',
      foundAt: [
        {
          location: 'Faraway Island',
          map: 'https://cdn2.bulbagarden.net/upload/e/e4/Hoenn_Faraway_Island_Map.png',
        },
      ],
      summary: 'Apparently, it appears only to'
        + 'those people who are pure of heart and have a strong desire to see it.',
    },
    {
      id: 78,
      name: 'Rapidash',
      type: 'Fire',
      averageWeight: {
        value: '95.0',
        measurementUnit: 'kg',
      },
      image: 'https://cdn2.bulbagarden.net/upload/5/58/Spr_5b_078.png',
      moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)',
      foundAt: [
        {
          location: 'Kanto Route 28',
          map: 'https://cdn2.bulbagarden.net/upload/5/5b/Kanto_Route_28_Map.png',
        },
        {
          location: 'Johto Mount Silver',
          map: 'https://cdn2.bulbagarden.net/upload/9/95/Johto_Mt_Silver_Map.png',
        },
      ],
      summary: 'At full gallop, its four hooves barely touch '
        + 'the ground because it moves so incredibly fast.',
    },
  ];
  const { getByText } = renderWithRouter(<FavoritePokemons pokemons={ favPokes } />);

  favPokes.forEach((poke) => {
    expect(getByText(poke.name)).toBeInTheDocument();
  });
});

test('Se o card não aparece na tela caso não seja favoritado', () => {
  const favPoke = [
    {
      id: 151,
      name: 'Mew',
      type: 'Psychic',
      averageWeight: {
        value: '4.0',
        measurementUnit: 'kg',
      },
      image: 'https://cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png',
      moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)',
      foundAt: [
        {
          location: 'Faraway Island',
          map: 'https://cdn2.bulbagarden.net/upload/e/e4/Hoenn_Faraway_Island_Map.png',
        },
      ],
      summary: 'Apparently, it appears only to'
        + 'those people who are pure of heart and have a strong desire to see it.',
    },
  ];
  const notFavePoke = [
    {
      id: 78,
      name: 'Rapidash',
      type: 'Fire',
      averageWeight: {
        value: '95.0',
        measurementUnit: 'kg',
      },
      image: 'https://cdn2.bulbagarden.net/upload/5/58/Spr_5b_078.png',
      moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)',
      foundAt: [
        {
          location: 'Kanto Route 28',
          map: 'https://cdn2.bulbagarden.net/upload/5/5b/Kanto_Route_28_Map.png',
        },
        {
          location: 'Johto Mount Silver',
          map: 'https://cdn2.bulbagarden.net/upload/9/95/Johto_Mt_Silver_Map.png',
        },
      ],
      summary: 'At full gallop, its four hooves barely touch '
        + 'the ground because it moves so incredibly fast.',
    },
  ];
  const { queryByText } = renderWithRouter(<FavoritePokemons pokemons={ favPoke } />);

  notFavePoke.forEach((poke) => {
    expect(queryByText(poke.name)).not.toBeInTheDocument();
  });
});
