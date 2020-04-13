import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import RepositoryItem from '../../components/repository/Item';

import * as S from './styles';

export default function RepositoriesPage() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then((res) => {
      setRepositories(res.data);
    });
  }, []);

  async function handleLikeRepository(id) {
    const res = await api.post(`/repositories/${id}/like`, {});

    const repositoryLike = res.data;

    const repositoriesLikeUpdated = repositories.map((repository) => {
      if (repository.id === id) {
        return repositoryLike;
      } else {
        return repository;
      }
    });

    setRepositories(repositoriesLikeUpdated);
  }
  return (
    <>
      <S.StatusDevice />
      <S.Container>
        <S.Title>Repositórios</S.Title>
        <RepositoryItem
          repositories={repositories}
          click={handleLikeRepository}
        />
      </S.Container>
    </>
  );
}
