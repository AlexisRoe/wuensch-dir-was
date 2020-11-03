import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from '../src/GlobalStyle';

export const decorators = [
  (Story) => (
    <Router>
      <GlobalStyle />
      <Story />
    </Router>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
