import { MesaComponent, TableBox, TitleBox } from "./styles";
export default function Mesas(props) {
  const { name, image, title, data } = props;
  return (
    <MesaComponent>
      <TitleBox>
        <p className="table-title">{title}</p>
      </TitleBox>
      <TableBox>
        <img className="user-image" src={image} />
        <p className="user-name">{name}</p>
        <p className="table-description">Próxima sessão:{data}</p>
      </TableBox>
    </MesaComponent>
  );
}
