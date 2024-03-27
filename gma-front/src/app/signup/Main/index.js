"use client";
import { MainComponent } from "./styles";
export default function Signup() {
  async function handleSubmitCadastro(e) {
    e.preventDefault();
    
    const nick = e.target.querySelector(".input-nick").value;
    const email = e.target.querySelector(".input-email").value;
    const password = e.target.querySelector(".input-senha").value;
    const re_password = e.target.querySelector(".input-re_password").value;


    console.log(JSON.stringify({ email, nick, password, re_password}));
    try {
      const response = await fetch("http://localhost:8000/auth/users/", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, nick, password, re_password}),
      });


      if (response.ok) {
        console.log("Signup successful");
        // redirect aqui
        window.location.href = "/login"; // Example
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  return (
    <MainComponent>
      <h1>GMA</h1>
      <form onSubmit={handleSubmitCadastro}>
        <p>Nick</p>
        <input
          className="input-nick"
          type="text"
          placeholder=" Digite seu Nick"
          required
          //value={nome}
          //onChange={(e) => setNome(e.target.value)}
        />
        <p>Email</p>
        <input
          className="input-email"
          type="email"
          placeholder=" Digite seu email"
          required
          //value={email}
          //onChange={(e) => setEmail(e.target.value)}
        />
        <p>Senha</p>
        <input
          className="input-senha"
          type="senha"
          placeholder=" Digite sua senha"
          required
          //value={senha}
          //onChange={(e) => setSenha(e.target.value)}
        />
        <input
          className="input-re_password"
          type="senha"
          placeholder=" Confirme sua senha"
          required
          //value={senha}
          //onChange={(e) => setSenha(e.target.value)}
        />

        <button className="botao-input" type="subimit">
          Cadastre-se
        </button>
      </form>
    </MainComponent>
  );
}
