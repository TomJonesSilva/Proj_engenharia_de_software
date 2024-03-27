import { PostComponent, UserBox, InfoBox } from "./styles";

export default function Post(props) {
  const { name, image, title, post, description } = props;
  return (
    <PostComponent>
      <UserBox>
        <img className="user-image" src={image} />
        <p className="user-name">{name}</p>
      </UserBox>
      <InfoBox>
        <p className="info-title">{title}</p>
        <img className="image-post" src={post} />
        <p className="info-description">{description}</p>
      </InfoBox>
    </PostComponent>
  );
}
