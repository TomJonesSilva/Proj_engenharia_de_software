"use client";

import "src/global/reset.css";

import styled from "styled-components";

const MainComponent = styled.main`
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  font-family: Monda;

  h1 {
    margin-top: 40px;
    font-size: 22px;
  }

  .box-user {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .capa {
      object-fit: cover;
      width: 100%;
      height: 192px;
      border-radius: 10px;
    }
    .imagem {
      width: 150px;
      border-radius: 100%;
      margin-right: 16px;
      margin-top: -100px;
    }
    .box-perfil-info {
      width: 60%;
      display: flex;
      align-items: center;
      margin-top: 32px;
      margin-bottom: 80px;
      .box-redes {
        display: flex;
        justify-content: center;
      }
      .box-perfil {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .box-name {
          display: flex;
          align-items: center;
          font-size: 20px;
        }
        .username {
          margin-left: 16px;
          margin-right: 16px;
          font-size: 14px;
        }
        .icon {
          font-size: 40px;
          margin-right: 16px;
        }
        .box-perfil {
          display: flex;
          align-items: center;
        }
      }
    }
    .personagem-mesa {
      width: 100%;
      height: 270px; //Temporario
      display: flex;
      justify-content: space-around;
      .personagem {
        display: flex;
        flex-direction: column;
        align-items: center;
        .nome {
          margin-top: 5px;
          margin-bottom: 5px;
        }
        .image {
          width: 80px;
          height: 80px;
          border-radius: 100%;
        }
      }
      .mesa {
        width: 70%;
        background-color: #e7ede7;
        border-radius: 10px;
        padding: 10px;
        .title-mesa {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .mesa-image {
          margin-top: 16px;
          margin-left: 10px;
          margin-right: 15px;
          width: 40px;
          border-radius: 100%;
        }
      }
    }
  }
  .box-mesa {
    width: 20%;
  }
`;
const MesaComponent = styled.div`
  width: 100%;
  height: 123px;
  margin-bottom: 32px;
  margin-top: 48px;
  border-radius: 10px;
  background-color: #e7ede7;
  background-color: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

  p {
    margin: 16px;
  }
`;

const MesaSelecionada = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #d9d9d9;
`;
const DivComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Monda;
`;
export { MainComponent, MesaComponent, MesaSelecionada, DivComponent };
