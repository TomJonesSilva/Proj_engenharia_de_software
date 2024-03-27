"use client";

import "src/global/reset.css";

import styled from "styled-components";

const MainComponent = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  .capa {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100vh;
  }
  .home {
    z-index: 2;
    display: flex;
    flex-direction: column;
    margin-top: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-family: "Monda";
      font-style: normal;
      font-weight: bold;
      font-size: 60px;
      color: white;
      margin-bottom: 10px;
    }
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .box-user {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .name {
      font-family: "Monda";
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      color: white;
      margin-right: 5px;
    }
    .image {
      border-radius: 100%;
    }
    .buuton-google {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 20px;
      width: 200px;
      height: 53px;
      background: white;
      border-radius: 16px;
      border: none;
      font-family: "monda";
      font-style: normal;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 700;
      font-size: 18px;

      .icon {
        margin-left: 5px;
        font-size: 20px;
      }
    }
  }

  .caixa-login {
    margin-top: 10px;
  }
`;
export { MainComponent };
