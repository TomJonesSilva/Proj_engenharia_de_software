import { useParams } from "next/navigation";
import Header from "@/componentes/header";
import Main from "./Main";

export default function Fichas() {
  const { name } = useParams();
  return (
    <>
      <Header login={true} />
      <Main name={name} />
    </>
  );
}
