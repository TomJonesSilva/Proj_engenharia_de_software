"use client";

import 'src/global/reset.css'

import styled from "styled-components";
const MainComponent = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding-top: 45px;
    padding-bottom: 45px;
    color:#8A00A7;
    font-family: 'Monofett';
    font-size: 74px;
    margin-top: 95px;
    margin-bottom: 28px;
    font-style: normal;
    font-weight: 400;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-bottom: 40px;
    margin-left: 24px;
    margin-right: 24px;
    width: 265px;
    height: 34px;
    background: #ffffff;
    border-radius: 16px;
    border-color: black;

    font-family: "Monda";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
  }

  button {
    margin-bottom: 36px;
    width: 193px;
    height: 53px;
    background: #0D0F7C;
    border-radius: 16px;
    border: none;

    font-family: "monda";
    font-style: normal;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
  }

  p {
    margin-bottom: 24px;
    font-family: "Monda";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
  }
`;

//Tentando diferenciar o botão cadastro
const ButtonComponent = styled.button`
button {
  background: #FBE311;
  color: #0a0a0a;
  border: #8A00A7;
}
`;

const TriangleCompenent = styled.div`
button {
  width: 0px;
  height: 0px
}
`;

export { MainComponent, ButtonComponent, TriangleCompenent};
