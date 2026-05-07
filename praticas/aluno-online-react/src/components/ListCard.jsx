import Card from "./Card";

function ListCard({ title, items }) {
  return (
    <Card title={title}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}

export default ListCard;