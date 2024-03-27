"use client";
import { useState, useEffect } from "react";
import { MainComponent } from "./styles";
import Post from "@/componentes/post";
import Cookies from 'js-cookie';

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const authToken = Cookies.get("authToken");

  const fetchMorePosts = async () => {
    try {
      const response = await fetch(`http://localhost:8000/gma/posts/?page=${page}`, {
        headers: {
          Authorization: `JWT ${authToken}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log("Response data:", data);
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setPage(page + 1);
    } catch (error) {
      console.error("Erro carregando os posts:", error);
    }
  };

  useEffect(() => {
    fetchMorePosts();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      fetchMorePosts();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <MainComponent>
      <h1>Feed de Notícias</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.usuario.nick}
          image={post.usuario.image}
          title={post.title}
          post={post.image}
          description={post.conteudo}
        />
      ))}
    </MainComponent>
  );
}
