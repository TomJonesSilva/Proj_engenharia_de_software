"use client";
import Header from "@/componentes/header";
import { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "./context/user";
import "../global/reset.css";
import { MainComponent } from "./styles";
import { IoLogoGoogle } from "react-icons/io5";


export default function Home() {
  const [userGoogle, setUser] = useState([]);
  const [profile, setProfile] = useState({ id: 0 });
  const { login, user } = useContext(UserContext);
  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    if (userGoogle) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userGoogle.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${userGoogle.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          login({
            id: res.data.id,
            nome: res.data.email,
            nickName: res.data.name,
            imagem: res.data.picture,
            imagemCapa: "https://images2.alphacoders.com/110/1107088.jpg",
          });
        })
        .catch((err) => console.log(err));
    }
  }, [userGoogle]);
  // log out function to log the userGoogle out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
    login({
      id: 0,
      nome: "",
      nickName: "",
      imagem: "",
      imagemCapa: "",
    });
  };
  return (
    <>
      <Header />
      <MainComponent>
        <img
          src="https://wallpaper4k.com.br/wp-content/uploads/2022/10/wallpapers-roxo-em-4k-36.jpg"
          className="capa"
        />

        <div className="home">
          <div className="caixa-loginGoogle">
            {user.id !== 0 ? (
              <div className="box">
                <p>Bem vindo de volta</p>
                <div className="box-user">
                  <p className="name">{user.nickName}</p>
                  <img className="image" src={user.imagem} alt="user image" />
                </div>

                <button className="buuton-google" onClick={logOut}>
                  Log out
                </button>
              </div>
            ) : (
              <div className="box">
                <p>Bem vindo a GMA, sua plataforma de rpg.</p>
                <button className="buuton-google" onClick={() => loginGoogle()}>
                  Logar com Google <IoLogoGoogle className="icon" />{" "}
                </button>
              </div>
            )}
          </div>
        </div>
      </MainComponent>
    </>
  );
}
