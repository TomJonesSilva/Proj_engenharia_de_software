"use client";

import "src/global/reset.css";

import styled from "styled-components";

const MesaComponent = styled.div`
  margin: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 512px;
  height: 224px;
  border-color: #898989;
  border-style: solid;
  border-width: 2px;
  border-radius: 16px;
`;

const TitleBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .table-title {
    margin-top: 16px;
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

const TableBox = styled.div`
  width: 98%;
  display: flex;
  align-items: baseline;
  margin-top: 16px;
  font-size: 20px;
  img {
    margin-top: 16px;
    margin-left: 10px;
    margin-right: 15px;
    width: 40px;
    border-radius: 100%;
  }
  .user-name {
    margin-right: 100px;
  }
`;

//POP_UP criar mesa

const PopupComponent = styled.div`
h2{
  margin-top: 32px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin: 16px;
}

p{
  margin-bottom: 8px;
}

.popup{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #CACACAC2;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-inner{
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  height: 50%;
  max-height: 640px;
  background-color: #E7EDE7;
  border-radius: 8px;
}

.conteudo{
  flex-direction: row;
  .membros{
      .txt-memb2 {
      resize: none;
      margin: 16px;
      display: block;
      width: 272px;
      height: 15em;
      border-radius: 8px;
    }
  }

  .descricao{
      .txt-desc1{
        margin-top: 10px;
        position: absolute;
        top: 134px;
        right: 236px;
      }

    .txt-desc2{
      position: absolute;
      height: inherit;
      margin-top: 28px;
      top: 150px;
      right: 30px;
      resize: none;
      width: 272px;
      height: 15em;
      border-radius: 8px;
    }
  }
}

.notificacao{
  margin: 16px;
  h3{
    margin-bottom: 16px;
  }
  textarea{
    border-radius: 8px;
    resize: none;
    height: 8em;
    width: 272px
  }
}

.popup-inner .bt-fechar{
  position: relative;
  left: 292px;
}

.popup-inner .bt-criar{
  position: absolute;
  right: 200px; 
  margin-left: 8px;
}


`;

export { MesaComponent, TableBox, TitleBox, PopupComponent };
