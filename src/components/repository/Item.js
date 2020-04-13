import React from 'react';

import * as S from './styles';

const RepositoryItem = ({ repositories, click, id }) => (
  <S.ListItem
    data={repositories}
    keyExtractor={(repository) => repository.id}
    renderItem={({ item: repository }) => (
      <S.RepositoryContainer key={repository.id}>
        <S.RepositoryTitle>{repository.title}</S.RepositoryTitle>

        <S.TechsContainer>
          <S.Tech>{repository.techs[0]}</S.Tech>
          <S.Tech>{repository.techs[1]}</S.Tech>
          <S.Tech>{repository.techs[2]}</S.Tech>
        </S.TechsContainer>

        <S.LikesContainer>
          <S.LikeText testID={`repository-likes-${repository.id}`}>
            {repository.likes} curtida{repository.likes > 1 ? 's' : ''}
          </S.LikeText>
        </S.LikesContainer>

        <S.Button
          onPress={() => click(repository.id)}
          testID={`like-button-${repository.id}`}
        >
          <S.ButtonText>Curtir</S.ButtonText>
        </S.Button>
      </S.RepositoryContainer>
    )}
  />
);

export default RepositoryItem;
