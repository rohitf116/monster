import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monster }) => {
  return (
    <div className="card-list">
      {monster.map((mon) => (
        <Card mon={mon} key={mon.id} />
      ))}
    </div>
  );
};

export default CardList;
