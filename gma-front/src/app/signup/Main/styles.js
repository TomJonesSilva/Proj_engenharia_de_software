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
    margin-bottom: 24px;
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
    margin-top: 32px;
    width: 160px;
    height: 46px;
    background: #FBE311;
    border-radius: 16px;
    border-color:#8A00A7;

    font-family: "Monda";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
  }

  p {
    margin-bottom: 8px ;
    font-family: "Monda";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
  }
`;

export { MainComponent };
