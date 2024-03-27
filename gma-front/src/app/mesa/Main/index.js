"use client";
import { useState, useEffect } from "react";
import { MainComponent, DivComponent } from "./styles";
import Mesa from "@/componentes/mesas";
import dados from "@/data/data";
import Link from "next/link";
import Popup from "@/componentes/mesas/popup";

export default function Main() {
  const [mesas, setMesas] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  function getMesas() {
    setMesas(dados.dadosMesa);
    console.log("dados->", dados.dadosMesa);
  }
  useEffect(() => {
    getMesas();
    console.log("Mesas->", mesas);
  }, []);
  return (
    <MainComponent>
      <h1>Mesas</h1>

      <button onClick={() => setButtonPopup(true)}>Criar mesa</button>
      <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
        <h2>Criando Mesa</h2>
        <div className="conteudo">
          <div className="membros">
            <p>Membros</p>
            <textarea className="txt-memb2" placeholder=" Digite os membros" rows="30" cols="35"/>
          </div>

          <div className="descricao">
            <p className="txt-desc1">Descrição</p>
            <textarea className="txt-desc2" placeholder=" Digite a descrição" rows="30" cols="35"/>
          </div>
        </div>

        <div className="notificacao">
          <h3 className="notif">Editar notificação</h3>
          <textarea className="input-noti" placeholder=" Digite a notificação"></textarea>
        </div>
      </Popup>
      
      <DivComponent>
        {mesas.length === 0 || mesas === undefined ? (
          <p>Não existe mesas disponiveis</p>
        ) : (
          mesas.map((mesa, index) => [
            <Link href={`/mesa/${mesa.id}`}>
              <Mesa
                image={mesa.image}
                name={mesa.name}
                title={mesa.title}
                data={mesa.data}
                key={mesa.id + index}
              />
            </Link>,
          ])
        )}
      </DivComponent>
    </MainComponent>
  );
}

/*
<Mesa
  image={'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png'}
  name={'Lucas'}
  title={'Dungeons and Dragons'}
  description={'Próxima sessão: 10/08'}
>
*/
