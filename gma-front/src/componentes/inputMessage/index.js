"use client";
import { useState } from "react";
import { MessageComponent } from "./styles";
import { IoSendSharp, IoPricetagsOutline } from "react-icons/io5";

export default function InputMessage() {
  const [message, setMessage] = useState("");
  const [enquete, setEnquete] = useState(false);

  async function handleSubmitMessege(e) {
    console.log("enviar a mensagem: ", message);
    event.preventDefault();
    //verificar se houve o retorno do banco
    setMessage("");
  }

  return (
    <MessageComponent>
      <form onSubmit={handleSubmitMessege}>
        <IoPricetagsOutline className="icon" />
        <input
          className="input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="subimit">
          <IoSendSharp className="icon" />
        </button>
      </form>
    </MessageComponent>
  );
}
