import { Component } from "react";

import Card from "./card.component";
import "./card-list.styles.css";
// inialize cartlist component
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}
export default CardList;
