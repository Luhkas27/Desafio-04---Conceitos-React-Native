import styled from 'styled-components/native';

export const StatusDevice = styled.StatusBar.attrs({
  barStyle: 'light-content',
  backgroundColor: '#7159c1',
})``;

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #7159c1;
`;

export const Title = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  text-align: center;

  margin: 0 0 10px;
`;
