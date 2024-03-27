"use client";

import "src/global/reset.css";

import styled from "styled-components";

const PostComponent = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  border-color: #898989;
  border-style: solid;
  border-width: 2px;
  border-radius: 16px;
`;
const UserBox = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  img {
    margin-top: 16px;
    margin-left: 10px;
    margin-right: 15px;
    width: 40px;
    border-radius: 100%;
  }
`;
const InfoBox = styled.div`
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

  .info-description {
    margin-top: 16px;
    margin-bottom: 24px;
    letter-spacing: -0.4px;
    line-height: normal;
    text-align: justify;
  }
`;

export { PostComponent, UserBox, InfoBox };
