import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

// Código de criação do renderWithRouter extraído do course no seguinte link:
// https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-testando-react-router/58c480e0-79ed-47bd-a819-f88d82997927/conteudos/a79ac6a2-66b4-418f-b2e2-c409e5081682/testando-react-router/2b79e4f7-56ef-44c7-adb9-3ea8b0118a33?use_case=side_bar 
// Agradecimentos ao colega e amigo Alex Silveira - Turma 10, Tribo A pelo lembrete 😅💜

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={history}>{component}</Router>), history,
  });
};

export default renderWithRouter;