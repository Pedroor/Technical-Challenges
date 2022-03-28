import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './src/services/queryClient';
import theme from './src/styles/theme';
import Routes from './src/routes';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
