"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { MainComponent, ButtonComponent } from "./styles";
import { UserContext } from "@/app/context/user";
import { useContext, useState } from "react";

import Header from "@/componentes/header";
import Cookies from 'js-cookie';


export default function Main() {
  const { login, user } = useContext(UserContext);
  const { email, setEmail } = useState("");
  async function handleSubmitCadastro(e) {
    e.preventDefault();
    
    const email = e.target.querySelector(".input-email").value;
    const password = e.target.querySelector(".input-senha").value;

    try {
      const response = await fetch("http://localhost:8000/auth/jwt/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Login Successful")
        
        const tokenData = await response.json();
        const authToken = tokenData.access;

        Cookies.set("authToken", authToken);
        const user = await fetch("http://localhost:8000/gma/user/profile/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${authToken}`,
        },
        });
        const userData = await user.json();
        Cookies.set("id", userData.id);
        window.location.href = '/feed';
      } else {
        console.log("Fail")
      }
    } catch (error) {
      console.log("error:", error)
    }
  }
  return (
    <MainComponent>
      <h1>GMA</h1>
      <form onSubmit={handleSubmitCadastro}>
        <p>Já possui uma conta no GMA?</p>
        <p>Nome:</p>
        <p>Email:</p>
        <div className="div-login">
          <input
            className="input-email"
            type="email"
            placeholder=" Digite seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-senha"
            type="password"
            placeholder=" Digite sua senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="botao-input" type="subimit">
          Login
        </button>
        <p>Não fique de fora!</p>
        <button className="botao-input">
          <Link href={"signup"}>Cadastre-se!</Link>
        </button>
      </form>
    </MainComponent>
  );
}
