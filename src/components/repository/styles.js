import styled from 'styled-components/native';

export const ListItem = styled.FlatList``;

export const RepositoryContainer = styled.View`
  background: #fff;
  margin: 0 15px 15px;
  padding: 20px;
`;

export const RepositoryTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const TechsContainer = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

export const Tech = styled.Text`
  font-size: 12px;
  font-weight: bold;
  background: #04d361;
  color: #fff;

  margin-right: 10px;
  padding: 5px 10px;
`;

export const LikesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
`;

export const LikeText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
`;

export const Button = styled.TouchableOpacity`
  margin: 10px 0;
`;

export const ButtonText = styled.Text`
  background: #7159c1;

  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
  padding: 15px;
`;
