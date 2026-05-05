import "../styles/body_component.css"
import CardItems from "./CardItems";
import { restaurants as data } from "../utils/data.js";

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search-bar">
                Search Bar
            </div>

            <div className="food-items-card">
                {data.map((restaurant) => (
                    <CardItems
                       key={restaurant.data.id}
                       restaurant={restaurant}
                    />
                ))}

            </div>

        </div>
    );
}

export default BodyComponent;