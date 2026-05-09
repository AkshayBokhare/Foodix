import "../styles/body_component.css"
import CardItems from "./CardItems";
import { restaurants as data } from "../utils/data.js";
import { useState } from "react";
import useFetchData from "../utils/useFetchData";
import useOnlineStatus from '../utils/useOnlineStatus';

const BodyComponent = () => {
    //State variable
    const [restoList, setRestoList] = useState(data);
    const [filterRestoList, setfilterRestoListCount] = useState(data.length);
    const [count, setCount] = useState(0);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    const customHook = useFetchData();
    console.log("CustomHook", customHook);


    if (restoList.length === 0) {
        return <h1> No Restaurant Found </h1>
    }

    if (onlineStatus === false) {
        return (
            <h1>OOPS YOU ARE OFFLINE...!</h1>
        );
    }

    return (
        <div className="body">
            <div className="searchBar">
                <input className="search-bar" type="text" placeholder="Search for restaurant"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                >
                </input>
                <button className="search-btn" onClick={() => {
                    restoList.filter((res) => {
                        if (res.data.name.toLowerCase().includes(searchText.toLowerCase())) {
                            setRestoList([res]);
                        }
                    });
                }}>Search</button>
            </div>

            <button className="filter-btn"
                onClick={() => {

                    const filterRestoList = restoList.filter(res => res.data.rating > 4);
                    setfilterRestoListCount(filterRestoList.length);
                    setRestoList(filterRestoList);
                }}>
                Click to See Top Rated Resto {filterRestoList}
            </button>

            <div className="food-items-card">
                {restoList.map((restaurant) => (
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