import { useEffect,useState } from "react";

const useFetchData = () => {

    const [data, setData] = useState(null);

    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/carts");
        const jsonData = await data.json();
        setData(jsonData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return data;

}

export default useFetchData;