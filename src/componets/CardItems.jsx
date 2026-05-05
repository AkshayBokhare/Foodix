import "../styles/carditems.css";
import biryaniImg from "../assets/biryani.jpg";

const CardItems = ({ restaurant }) => {
    return (

        <div className="res-card">

            <img src={biryaniImg} alt="Food Image" />
            <h3>{restaurant.data.name}</h3> 
            <p>{restaurant.data.cuisine}</p>
            <p>{restaurant.data.rating}</p>
            <p>{restaurant.data.price}</p>

        </div>


    )
}

export default CardItems;