"use client";

import Modal from "@/componentes/modal";

import { useState, useEffect } from "react";
import { MainComponent } from "./styles";
//import { BiGroup, BsCalendar2Week } from 'react-icons/fa'; <BiGroup/> <BsCalendar2Week/>
import dados from "@/data/data";
import Cookies from "js-cookie"

export default function Main(props) {
  const authToken = Cookies.get('authToken');
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const { id } = Cookies.get('id');
  const [mesa, setMesa] = useState({});
  function getMesaById() {
    setMesa(dados.dadosMesa[id - 1]);
  }
  useEffect(() => {
    getMesaById();
  }, []);
  return (
    <MainComponent>
      <div className="mesa-info">
        <div className="capa-title">
          <img src={mesa.image} className="mesa-image" />
          <p>{mesa.title}</p>
        </div>
        <div className="botoes-info">
          <button onClick={() => setOpenModal(true)}> Membros da mesa</button>
          <button onClick={() => setOpenModal2(true)}> Sessões</button>
        </div>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          {/*children*/}
          <h3>Membros</h3>
          <textarea></textarea>
        </Modal>
        <Modal isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)}>
          {/*children*/}
          <h3>Sessões</h3>
          <ul>
            <li>21/10 - Jornada do Heroi</li>
            <li>23/10 - As masmorras</li>
            <li>25/10 - Dungeons and Drangons</li>
          </ul>
        </Modal>
        <p>{mesa.description}</p>
        <button className="sair-mesa">Sair da campanha</button>
      </div>
      <div className="box-post">
        <button className="fazer-post">Fazer post</button>
        <div className="posts">
          <h2>Posts</h2>
          <div className="posts-all">
            <h2>Titulo do post</h2>
            <div className="info-user">
              <img src={""} />
              <p>Nome do usuario</p>
            </div>
            <p>Descrição do post</p>
          </div>
        </div>
      </div>
    </MainComponent>
  );
}