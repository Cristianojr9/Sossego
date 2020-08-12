import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

export default function Post({ id, title, body }) {
  const history = useHistory();

  function ShowDetail(e) {
    e.preventDefault();
    history.push(`/detail/${id}`);
  }

  return(
    <Container onClick={ShowDetail}>
      <h2>{title}</h2>
      <p>{body}</p>
    </Container>
  )
}

Post.defaultProps = {
  id: null,
  title: null,
  body: null,
};
Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
};