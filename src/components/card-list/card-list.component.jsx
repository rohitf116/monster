import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monster } = this.props;
    return (
      <div className="card-list">
        {monster.map((mon) => (
          <Card mon={mon} key={mon.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
