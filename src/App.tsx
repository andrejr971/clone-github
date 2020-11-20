import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repository from './pages/Repository';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/repo" element={<Repository />} />
      </Routes>

      <GlobalStyles />

      <Footer />
    </BrowserRouter>
  );
};

export default App;
