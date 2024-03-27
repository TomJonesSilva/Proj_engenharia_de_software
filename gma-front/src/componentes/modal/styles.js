"use client";

import "src/global/reset.css";

import styled from "styled-components";

const ModalComponent = styled.main`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .background{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #CACACAC2;
        
        z-index: 1000;
    }

    .modal{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #E7EDE7;
        border-radius: 8px;
        color: black;
    }

    h3{
        margin-top: 16px;
        text-align: center;
        font-size: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    ul{
        margin: 32px;
        list-style: disc;
        li{
            padding: 8px;
        }
    }

    textarea{
        resize: none;
        margin: 32px;
        display: block;
        width: 380px;
        height: 15em;
        border-radius: 8px;
    }
`;

export {ModalComponent};