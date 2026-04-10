function Card(props) {
  return (
    <article>
      <h3>{props.titulo}</h3>
      <ul>
        {props.itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default Card;
