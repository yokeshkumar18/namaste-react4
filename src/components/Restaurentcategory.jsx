import { useState } from "react";
import ItemList from "./ItemList";

const Restaurentcategory = ({ data, handlebtn, Setshowbtn }) => {
  const [showhandlebtn] = useState();
  const handleclick = () => {
    showhandlebtn(!handlebtn);
  };
  console.log(data);
  return (
    <div className="">
      <div
        className="w-6/12 mx-auto my-2 p-5  bg-gray-100 shadow-2xl font-bold animate__animated animate__fadeInUp cursor-pointer "
        onClick={handleclick}
      >
        <div className="flex justify-between ">
          <span className="">
            {data.title} ({data.itemCards.length})
          </span>

          <span className="cursor-pointer">⬇️</span>
        </div>
        {handlebtn && <ItemList items={data.itemCards} />}

        {/* <div className="flex-col">
      <span> {data.itemCards[0]?.card?.info?.description}</span>
      </div> */}
      </div>
    </div>
  );
};

export default Restaurentcategory;
