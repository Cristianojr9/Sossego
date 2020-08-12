import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import api from '../../services/api';
import {
  Container,
  Content,
  User,
  Comments,
  Comment,
} from './styles';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true);
        const responsePost = await api.get(`/posts/${id}`);
        const postItem = responsePost.data;
        const responseUser = await api.get(`/users/${postItem.userId}`);
        const userItem = responseUser.data;
        const responseComments = await api.get(`/posts/${id}/comments`);
        const commentsItem = responseComments.data;
        setPost(postItem);
        setComments(commentsItem);
        setUser(userItem);
        setLoading(false);
      } catch (error) {
        alert('Post not found');
      }
    }
    loadPost();
  }, []);

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <Content>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to="/">
            <button>Voltar</button>
          </Link>
          <User>
            <li>
              <h4>Name: {user.name}</h4>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </li>
          </User>
          <Comments>
            <div id="numberComments">
              <p>{comments.length} Comments</p>
            </div>
            {comments.map((comment) => (
              <Comment>
                <h2>{comment.name}</h2>
                <p>{comment.body}</p>
                <p>{comment.email}</p>
              </Comment>
            ))}
          </Comments>
        </Content>
      )}
    </Container>
  );
}

export default Detail;