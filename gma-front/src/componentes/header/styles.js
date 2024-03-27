"use client";

import "src/global/reset.css";

import styled from "styled-components";

const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 8vh;
  display: flex;
  background-color: #e7ede7;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
const DivComponent = styled.div`
  font-family: "Monda";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-right: 30px;
  p {
    font-size: 24px;
    margin-left: 6vw;
  }
  .box-link {
    display: flex;
    align-items: center;

    .icon {
      margin-left: 5px;
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }
  }
`;

const LogoComponent = styled.header`
  margin-left: 40px;
  font-family: "Monofett";
  color: #8a00a7;
  font-size: 53px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export { HeaderComponent, LogoComponent, DivComponent };
