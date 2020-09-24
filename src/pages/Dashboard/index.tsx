import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/37915910?s=460&u=79775fa7a74259bc989d89e11c2495c8fee01dd2&v=4"
            alt="Daniel Carvalho"
          />
          <div>
            <strong>GitHub Explorer</strong>
            <p>A ReactJS project that use the GitHub API</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/37915910?s=460&u=79775fa7a74259bc989d89e11c2495c8fee01dd2&v=4"
            alt="Daniel Carvalho"
          />
          <div>
            <strong>GitHub Explorer</strong>
            <p>A ReactJS project that use the GitHub API</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/37915910?s=460&u=79775fa7a74259bc989d89e11c2495c8fee01dd2&v=4"
            alt="Daniel Carvalho"
          />
          <div>
            <strong>GitHub Explorer</strong>
            <p>A ReactJS project that use the GitHub API</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
