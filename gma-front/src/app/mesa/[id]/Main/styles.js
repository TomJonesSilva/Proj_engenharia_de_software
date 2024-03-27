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

  .mesa-info {
    width: 50%;
    margin: 32px;

    .capa-title {
      width: 100%;
      display: flex;
      align-items: center;
      p{
        font-size: 36px;
      }
      .mesa-image {
        width: 80px;
        margin-right: 48px;
        margin-bottom: 66px;
      }
    }
    p{
      letter-spacing: -0.4px;
      line-height: normal;
      text-align: justify;
    }
    button{
      margin-right: 16px;
      margin-left: 16px;
      margin-bottom: 16px;
      height: 32px;
      background-color: #ffffff;
      border-color: #8A00A7;
      border-radius: 16px;
      font-size: 14px;
      font-family: Monda;
      cursor: pointer;
    }
    .sair-mesa{
      margin-top: 80px;
      width: 150px;
      height: 32px;
      background: #DD2222;     
      border: none;
      border-radius: 16px;

      font-family: "monda";
      font-style: normal;
      color: #ffffff;
      font-weight: 400;
      font-size: 14px;
    }
  }

  .box-post {
    width: 50%;
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    align-items: center;

    button{
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
      .posts{
        h2{
          margin-top: 40px;
          margin-bottom: 16px;
          font-size: 24px;
        }
          .posts-all{
            width: 100%;
            flex-direction: column;
            align-items: center;
            border-color: #898989;
            border-style: solid;
            border-width: 2px;
            border-radius: 16px;
            h2{
              font-size: 20px;
              margin: 32px;
              margin-bottom: 16px;
            }
              .info-user{
                margin-bottom: 40px;
              }
            p{
              margin-bottom: 24px;
              margin-left: 32px;
              margin-right: 32px;
            }
          }
      }
  }
`;

// const PopupComponent = styled.div`
//     flex-direction: row;
//     align-items: center; 
//     margin-bottom: 16px;
//     justify-content: baseline;

//     .pop{
//         background-color: #D9D9D9;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         display: flex;
//         border-radius: 16px;
//         h3{
//             margin-top: 16px;
//             padding: 32px;
//             text-align: center;
//             font-size: 20px;
//             font-weight: 700;
//         }
        
//         textarea{
          
//           resize: none;
//           margin: 32px;
//           display: block;
//           width: 380px;
//           height: 15em;

//         }
//     }
// `;

export { MainComponent};
