import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    font-size: 50px;
    margin-left: 20px;
  }
  margin-top: 30px;
`;
export const Posts = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;