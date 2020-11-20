import React, { FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeName } from '../../styles/themes';
import { Container, GitHubLogo, SearchForm } from './styles';

interface HeaderProps {
  themeName: ThemeName;
  setThemeName(newName: ThemeName): void;
}

const Header: React.FC<HeaderProps> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      navigate(`/${search.toLowerCase().trim()}`);
    },
    [navigate, search],
  );

  const toggleTheme = useCallback(() => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }, [setThemeName, themeName]);

  return (
    <Container>
      <GitHubLogo onClick={toggleTheme} />

      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username or Repo..."
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
