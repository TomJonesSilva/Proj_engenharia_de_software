"use client";
"use client";
import React, { useState, useEffect } from "react";
import { HeaderComponent, LogoComponent, DivComponent } from "./styles";
import { useContext } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import Link from "next/link";
import { UserContext } from "@/app/context/user";
import Cookies from 'js-cookie';

export default function Header(props) {
  const { login, user } = useContext(UserContext);
  const authToken = Cookies.get("authToken");
  //console.log('authToken:', authToken);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:8000/gma/posts/", {
          headers: {
            Authorization: `JWT ${authToken}`,
            'Content-Type': 'application/json',
          },
        });
        const userData = await response.json();
        console.log('User data:', userData);
        setUser(userData);
      } catch (error) {
        console.error("Erro carregando o usuário:", error);
      }
    };

    if (login && authToken) {
      fetchUser();
    }
  }, [login, authToken]);

  return (
    <HeaderComponent>
      <LogoComponent>
        <Link href="/">GMA</Link>
      </LogoComponent>

      {user.id !== 0 ? (
        <DivComponent>
          <Link href={"/feed"} className="box-link">
            <p>Feed</p>
          </Link>
          <Link href={"/mesa"} className="box-link">
            <p>Mesa</p>
          </Link>
          <Link href={"/perfil"} className="box-link">
            <p>Perfil</p>
            <img src={user.imagem} className="icon" />
          </Link>
        </DivComponent>
      ) : (
        <DivComponent>
          <Link href={"/feed"}>
            <p>Feed</p>
          </Link>
          <Link href={"/mesa"}>
            <p>Mesa</p>
          </Link>
        </DivComponent>
      )}
    </HeaderComponent>
  );
}
/*
    <HeaderComponent>
      <LogoComponent>
        <Link href="/">GMA</Link>
      </LogoComponent>
      <DivComponent>
        <Link href={"/feed"}>
          <p>Feed</p>
        </Link>
        <Link href={"/mesa"}>
          <p>Mesa</p>
        </Link>
        <Link href={"/fichas"}>
          <p>Fichas</p>
        </Link>
      </DivComponent>
    </HeaderComponent>
*/
