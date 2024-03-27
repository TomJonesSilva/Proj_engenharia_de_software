"use client";

import "src/global/reset.css";

import styled from "styled-components";

const MainComponent = styled.main`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Monda;

  button {
    position: relative;
    left: 500px;
    width: 168px;
    height: 48px;
    background: #8A00A7;
    border-radius: 16px;
    border: none;

    font-family: "monda";
    font-style: normal;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
  }

  h1 {
    margin-top: 50px;
    font-size: 36px;
    font-weight: bold;
  }
`;

const DivComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Monda;
  display: inline-block;
`;


const Popup = styled.div`
    margin-left: 1032px;
    width: 168px;
    height: 48px;
    background: #8A00A7;
    border-radius: 16px;
    border: none;

    font-family: "monda";
    font-style: normal;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
  
`;

export { MainComponent, DivComponent, Popup };
