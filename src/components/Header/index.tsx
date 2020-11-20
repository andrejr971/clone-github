import React, { FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, GitHubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      navigate(`/${search.toLowerCase().trim()}`);
    },
    [navigate, search],
  );

  return (
    <Container>
      <GitHubLogo />

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
