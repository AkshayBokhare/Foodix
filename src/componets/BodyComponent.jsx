import "../styles/body_component.css"
import CardItems from "./CardItems";
import { restaurants as data } from "../utils/data.js";
import { useState } from "react";

const BodyComponent = () => {
    //State variable
    const [restoList, setRestoList] = useState(data);
    const [filterRestoList, setfilterRestoListCount] = useState(data.length);
    const [count, setCount] = useState(0);

    return (
        <div className="body">
            <div className="search-bar">
                Search Bar
            </div>
            <button className="filter-btn"
                onClick={() => {

                    const filterRestoList = restoList.filter(res => res.data.rating > 4);
                    console.log(restoList.length);
                    console.log(filterRestoList);

                    console.log(filterRestoList.length);
                    setfilterRestoListCount(filterRestoList.length);
                    setRestoList(filterRestoList);
                }}>
                Click to See Top Rated Resto {filterRestoList}
            </button>

            <div className="food-items-card">
                {restoList.map((restaurant) => (
                    console.log("Restaurants in list: " + restoList.length),
                    <CardItems
                        key={restaurant.data.id}
                        restaurant={restaurant}
                    />

                ))}

            </div>

            <div className="counter">
                <h1> Your Count Is: {count}</h1>
                <button className="counter-btn" onClick={
                    () => setCount(count + 1)       
                }>
                    Click to See Count
                </button>
            </div>
        </div>
       
    );
}

export default BodyComponent;