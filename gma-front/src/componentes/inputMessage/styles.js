"use client";

import "src/global/reset.css";

import styled from "styled-components";

const MessageComponent = styled.div`
  position: fixed;
  bottom: 10px;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 60%;
    height: 50px;
    background-color: white;
    border-radius: 40px;
    border-style: solid;
    border-width: 2px;
    border-color: #8a00a7;
    padding-left: 20px;

    font-size: 20px;
  }
  button {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: white;
    border-style: none;
  }
  .icon {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 40px;
    color: #8a00a7;
  }
`;

export { MessageComponent };
