"use client";
import { useParams } from "next/navigation";
import Header from "@/componentes/header";
import Main from "./Main";

export default function Mesa() {
  const { id } = useParams();

  return (
    <>
      <Header login={true} />
      <Main id={id} />
    </>
  );
}
