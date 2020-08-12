import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 200px;
  min-height: 10px;

  background-color: #3332;
  border-radius: 10px;
  box-shadow: 3px 10px 111px -45px rgba(0, 0, 0, 0.31);
  margin: 10px;
  padding: 20px;
  cursor: pointer;

  transition: all 0.3s ease 0s;
  
  &:hover {
    transform: translateY(-7px);
  }

  h2 {
    font-size: 20px;
    text-align: left;
    color: #fafafa;
    font-weight: bolder;
  }
  p {
    margin-top: 10px;
    color: #fafafa;
    font-size: 16px;
    text-align: left;
  }
`;