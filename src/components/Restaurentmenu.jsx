import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "./utils/useRestaurantmenu";
import Restaurentcategory from "./Restaurentcategory";
import Footer from "./Footer";
import { useState } from "react";

const Restaurentmenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantmenu(resId);
  const [Showbtn, Setshowbtn] = useState(0);

  if (!resinfo) return <Shimmer />;

  console.log(resinfo?.data);

  const { name, cuisines, costForTwoMessage } =
    resinfo?.data?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  {
    itemCards.length === 0 && <Shimmer />;
  }
  const categories =
    resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center ">
      <h1 className="font-bold my-5 text-[30px] text-orange-400">
        {name || "Restaurant"}
      </h1>
      <div className="restaurant-details">
        <h5 className="font-medium text-fuchsia-950">
          {cuisines?.join(", ") || "Cuisines not available"} -{" "}
          {costForTwoMessage || "Cost not available"}
        </h5>

        {categories.map((category, index) => (
          <Restaurentcategory
            key={category?.card?.card?.id}
            data={category?.card?.card}
            handlebtn={index === Showbtn ? true : false}
            Setshowbtn={() => Setshowbtn(index)}
          />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default Restaurentmenu;
