"use client";

import "src/global/reset.css";
import styled from "styled-components";

const MainComponent = styled.main`
  margin-top: 60px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  font-family: Monda;
`;

const FichaComponent = styled.div`
  width: 60vw;
  border-color: #898989;
  border-style: solid;
  border-width: 2px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoBox = styled.div`
  margin-top: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 10px;
    width: 80%;
    margin-bottom: 10px;
  }

  .info-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .class {
    margin-top: 16px;
    font-size: 20px;
    color: #8a00a7;
  }

  .info-description {
    margin-top: 16px;
    margin-bottom: 24px;
    letter-spacing: -0.4px;
    line-height: normal;
    text-align: justify;
  }
`;

const BoxProgress = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextProgreess = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  color: #8a00a7;
  margin-right: 5px;
`;

export { MainComponent, FichaComponent, InfoBox, BoxProgress, TextProgreess };
