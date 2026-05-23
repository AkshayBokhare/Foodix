import "../styles/carditems.css";
import { useNavigate } from "react-router-dom";

const CardItems = ({ restaurant }) => {
    const navigate = useNavigate();

    return (

        <div className="res-card" style={{ cursor: "pointer" }} onClick={() => navigate(`/restaurant/${restaurant.data.id}`)}>

            <img src={restaurant.data.imgurl} alt="Food Image" />
            <h3>{restaurant.data.name}</h3>
            <p>{restaurant.data.cuisine}</p>
            <p>{restaurant.data.rating}</p>
            <p>{restaurant.data.price}</p>

        </div>


    )
}

export default CardItems;