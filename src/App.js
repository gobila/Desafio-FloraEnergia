import './App.css';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ApiConnect } from './services/api';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  const [posts, setPosts] = useState([]);
  const api = ApiConnect;

  useEffect(async () => {
    const getPosts = await api.getPosts();
    setPosts(getPosts);
  }, []);
  return (
    <Main>
      <TitleCont>
        <h2>
          Bem Vindo ao teste da
          {' '}
          <span>Flora Energia</span>
        </h2>
        <h4>Siga os passos no arquivo README.md</h4>
        <Button variant="home">
          <Link to="/assinatura" style={{ textDecoration: 'none', color: 'white' }}> Pagina questao 3 </Link>
        </Button>
      </TitleCont>

      {/* Insira o INPUT SEARCH aqui */}
      <CardsCont>
        {posts.map((post) => (
          <Card postTitle={post.title} postBody={post.body} />
        ))}
      </CardsCont>
    </Main>
  );
}

export default App;

const Main = styled.section`
  box-sizing: border-box;
  /* width: 100vw;
  height: 100vh; */
  display: flex;
  flex-direction: column;
`;

const TitleCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 3rem;
  align-items: center;
  > h2 {
    color: #61787b;
    > span {
      color: orange;
    }
  }
`;

const CardsCont = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

// const Card = styled.div`
//   /* INSIRA O CSS DO CARD (POSTS) AQUI */
// `;
