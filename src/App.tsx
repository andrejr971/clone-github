import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ThemeName, themes } from './styles/themes';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repository from './pages/Repository';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/repo" element={<Repository />} />
        </Routes>

        <GlobalStyles />

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
