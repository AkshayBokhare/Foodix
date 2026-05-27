import { useState } from "react";
import { useParams } from "react-router-dom";
import { restaurants } from "../utils/data";
import { restaurantMenus } from "../utils/menuData";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [openSection, setOpenSection] = useState(null);

  const restaurant = restaurants.find((r) => r.data.id === id)?.data;
  const menu = restaurantMenus[id] || restaurantMenus["default"];

  const toggle = (categoryId) => {
    setOpenSection(openSection === categoryId ? null : categoryId);
  };

  const dispatch = useDispatch();


  const handelAddItem = (item) => {
    //Dispatuch an Action
    dispatch(addItem(item))
  }

  return (
    
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex justify-center">
      <div className="w-full max-w-2xl">
        {/* Restaurant Header Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-5 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            {restaurant?.name || "Restaurant Menu"}
          </h1>
          <p className="text-gray-500 text-sm mt-1">{restaurant?.cuisine}</p>
          <div className="flex justify-center items-center gap-3 mt-3 text-sm">
            <span className="font-semibold text-yellow-500">⭐ {restaurant?.rating}</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">{restaurant?.price}</span>
          </div>
        </div>

        {/* Accordion Categories */}
        {menu.categories.map((category) => (
          <div key={category.id} className="mb-3 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

            {/* Accordion Header */}
            <button
              className="w-full flex justify-between items-center px-6 py-4 hover:bg-gray-50 text-left transition-colors"
              onClick={() => toggle(category.id)}
            >
              <span className="font-bold text-gray-800 text-base">
                {category.name}
                <span className="text-gray-400 font-normal text-sm ml-2">
                  ({category.items.length})
                </span>
              </span>
              <span className="text-gray-400 text-xs">
                {openSection === category.id ? "▲" : "▼"}
              </span>
            </button>

            {/* Accordion Body */}
            {openSection === category.id && (
              <div className="border-t border-gray-200">
                {category.items.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between px-6 py-4 gap-5 ${idx !== 0 ? "border-t border-gray-200" : ""
                      }`}
                  >
                    {/* Left: name, description, price */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-base">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                      <p className="font-bold text-gray-800 mt-2">₹ {item.price}</p>
                    </div>

                    {/* Right: image + ADD+ button stacked */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-xl shadow-sm"
                      />
                      <button className="w-full bg-white text-green-600 border-2 border-green-500 py-1 rounded-lg font-bold text-sm shadow hover:bg-green-50 active:scale-95 transition-all" 
                        onClick={() => handelAddItem(item)}>
                        ADD +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
