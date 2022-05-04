const RepositoryList = () => {
  const repositoryName = "unform2";

  return (
    <section className='repository-list'>
      <h1>Lista de Repositórios</h1>
      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Form in React</p>
          <a href=''>Acessar Repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Form in React</p>
          <a href=''>Acessar Repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Form in React</p>
          <a href=''>Acessar Repositório</a>
        </li>
      </ul>
    </section>
  );
};

export default RepositoryList;
