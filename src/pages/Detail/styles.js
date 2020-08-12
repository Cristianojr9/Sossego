import styled from 'styled-components';

export const Container = styled.div`
  height:100%;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Content = styled.div`
  width: 100%;

  h1 {
    margin-left: 10px;
  }

  p {
    font-size: 20px;
    color: #b7bfd6;
    margin-left: 10px;
  }

  button {
    margin-left: 10px;
    margin-top: 10px;
    height: 50px;
    width: 200px;
    font-size: 20px;
    border-radius: 10px;
    border-color: transparent;

    &:hover {
      background: #b7bfd6;
    }
  }
`;

export const User = styled.ul`
  width: 400px;
  border-radius: 20px;
  align-self: flex-start;
  margin-left: 10px;
  list-style: none;
  margin-top: 20px;

  li {
    h4 {
      font-size: 25px;
    }

    p {
      margin-left: 0px;
      font-size: 15px;
      color: #fafafa;
    }
  }
`;
export const Comments = styled.div`
  #numberComments {
    display: flex;
    width: 150px;
    height: 30px;
    border-radius: 5px;
    margin-top: 10px;

    p {
      color: #fafafa;
    }
  }
`;
export const Comment = styled.div`
  background-color: #3332;
  padding: 30px;
  margin: 10px;
  border-radius: 10px;
  align-items:flex-start;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-left: 0;
  }
`;