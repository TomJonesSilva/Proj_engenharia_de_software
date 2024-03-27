"use client";
import styled from "styled-components";

const StylesProgress = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  .progress-bar {
    width: 100%;
    height: 20px;
    border-radius: 20px;
    background-color: black;
  }

  span {
    display: block;
    position: relative;
    background-color: #8a00a7;
    height: 100%;
    border-radius: 20px;
  }
`;

export { StylesProgress };
