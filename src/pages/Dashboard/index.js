import React, { useEffect, useState } from 'react';

import Post from '../../components/Post';
import api from '../../services/api';

import { Container, Posts } from './styles';

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('/posts');
      setPosts(response.data);
    }
    loadPosts();
  }, []);

  return (
    <Container>
      <h1>Confira os posts</h1>
      <Posts>
        {posts.map((post) => (
          <Post 
            key = {post.id}
            id = {post.id}
            title = {post.title}
            body = {post.body}
            userId = {post.userId} 
          />
        ))}
      </Posts>
    </Container>
  )
}