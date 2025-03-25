import { Link } from "react-router-dom";
import "./Things.scss";
import { Dish } from "../Dishes";

const Things = ({ dishes }: { dishes: Dish[] }) => {
  return (
    <div>
      <h1>Lista på maträtter</h1>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Link to={`/things/${dish.id}`}>{dish.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Things;
