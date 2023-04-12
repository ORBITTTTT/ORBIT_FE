import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import './App.css';
import BaseLayout from '@navs/BaseLayout';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <GlobalStyle />
        <BaseLayout />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
