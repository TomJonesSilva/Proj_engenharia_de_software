"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Progress from "@/componentes/progress";
import {
  MainComponent,
  FichaComponent,
  InfoBox,
  BoxProgress,
  TextProgreess,
} from "./styles";

//Importação local.
import dados from "@/data/data";

export default function Main(props) {
  const { name } = useParams();
  const [ficha, setFicha] = useState({});
  function getFicha() {
    setFicha(dados.dadosFicha[name]); //Temporario.
  } //
  useEffect(() => {
    getFicha();
  }, []);
  return (
    <MainComponent>
      <FichaComponent>
        <InfoBox>
          <p className="info-title">{ficha.name}</p>
          <img className="image-post" src={ficha.image} />
          <p className="class">{ficha.classe}</p>
          <p className="info-description">{ficha.description}</p>
        </InfoBox>
        <BoxProgress>
          <TextProgreess>XP</TextProgreess>
          <Progress />
        </BoxProgress>
      </FichaComponent>
    </MainComponent>
  );
}
