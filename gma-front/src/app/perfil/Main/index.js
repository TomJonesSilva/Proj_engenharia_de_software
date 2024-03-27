"use client";
import Link from "next/link";
import { MainComponent, MesaComponent, DivComponent } from "./styles";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/user";
import dados from "@/data/data";
import Cookies from 'js-cookie';

export default function Main() {
  const { user } = useContext(UserContext);
  const [perfil, setPerfil] = useState([]);
  const [mesas, setMesas] = useState([]);
  const [ficha, setFicha] = useState({});
  const [mesaSelect, setMesaSelect] = useState({
    image: "",
    title: "",
    description: "",
  });
  function getMesasById() {
    setMesas(dados.dadosMesa);
  }
  function selectMesa(id) {
    let mesaId;
    let fichaId;
    mesas.map((mesa, index) => {
      if (mesa.id === id) {
        mesaId = mesa;
        return mesaId;
      }
    });
    ficha.map((ficha, index) => {
      if (ficha.id === id) {
        fichaId = ficha;
        return fichaId;
      }
    });

    setMesaSelect(mesaId);
    setFichaSelect(fichaId);
  }
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:8000/gma/user/profile/", {
          headers: {
            Authorization: `JWT ${authToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setPerfil(userData);
        } else {
          console.error("Falha ao carregar o perfil");
        }
      } catch (error) {
        console.error("Erro carregando o perfil:", error);
      }
    };

    if (authToken) {
      fetchUserProfile();
    }
  }, [authToken]);
  console.log(perfil);
  return (
    <MainComponent>
      <div className="box-user">
        <img src={perfil.imagemCapa} className="capa" />
        <div className="box-perfil-info">
          <img src={perfil.imagem} className="imagem" />
          <div className="box-perfil">
            <div className="box-name">
              <p className="nickname">{perfil.nick}</p>
              <p className="username">{perfil.email}</p>
            </div>
            <div className="box-redes">
              <IoLogoInstagram className="icon" />
              <IoLogoWhatsapp className="icon" />
            </div>
          </div>
        </div>
        <div className="personagem-mesa">
          <Link href={`/fichas/${fichaSelect.id}`} className="box-link">
            <div className="personagem">
              <p>Nome do Personagem:</p>
              <p className="nome">{fichaSelect.name}</p>
              <img src={fichaSelect.image} className="image" />
            </div>
          </Link>
          <div className="mesa">
            <div className="title-mesa">
              <img
                src={mesaSelect.image}
                alt="Imagem da mesa"
                className="mesa-image"
              />
              <p>{mesaSelect.title}</p>
            </div>
            <p>{mesaSelect.description}</p>
          </div>
        </div>
      </div>
      <div className="box-mesa">
        <h1>Mesas do Jogador</h1>
        <div className="mesa-all">
          {mesas.length === 0 ? (
            <p>Você não está em nenhuma mesa</p>
          ) : (
            mesas.map((mesa, index) => [
              <MesaComponent
                onClick={() => {
                  selectMesa(mesa.id);
                }}
                key={index}
              >
                <p>{mesa.title}</p>
              </MesaComponent>,
            ])
          )}
        </div>
      </div>
    </MainComponent>
  );
}
