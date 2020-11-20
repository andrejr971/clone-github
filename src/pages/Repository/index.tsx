import React from 'react';
import { Link } from 'react-router-dom';
import { ForkIcon, RepoIcon, StarIcon } from '../../components/RepoCard/styles';

import { Breadcrumb, Container, GithubIcon, LinkButton, Stats } from './styles';

const Repository: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className="username" to="/andrejr971">
          andrejr971
        </Link>

        <span>/</span>

        <Link className="reponame" to="/andrejr971/youtube-clone-github">
          youtube-clone-github
        </Link>
      </Breadcrumb>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        iste dolores autem, debitis, commodi quas vero corporis unde incidunt
        cumque laudantium vitae minus, laboriosam veritatis molestias? Aliquid,
        perspiciatis! Obcaecati, cumque.
      </p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href="https://github.com/rocketseat-content/youtube-clone-github">
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repository;
