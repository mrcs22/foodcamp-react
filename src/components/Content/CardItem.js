export default function CardItem(props) {
  const { image, title, description, price } = props;
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </li>
  );
}
