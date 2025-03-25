import { useParams } from "react-router-dom";

interface Dish {
  id: number;
  name: string;
  description: string;
}

interface ThingDetailProps {
  dishes: Dish[];
}

const ThingDetail = ({ dishes }: ThingDetailProps) => {
  const { id } = useParams<{ id: string }>();
  console.log("Id from params: ", id);

  const dish = dishes.find((dish) => dish.id === parseInt(id));

  if (!dish) return <h2>Maträtten hittades inte!</h2>;

  return (
    <div>
      <h1>{dish.name}</h1>
      <p>{dish.description}</p>
    </div>
  );
};

export default ThingDetail;
