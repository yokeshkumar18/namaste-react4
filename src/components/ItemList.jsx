import Footer from "./Footer";
import { IMG_URL } from "./utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-gray-200 border-b-3 flex justify-center flex-row-reverse animate__animated animate__fadeInUp "
        >
          <div className="flex items-center w-70 ">
            <img
              src={IMG_URL + item.card.info.imageId}
              className="rounded-[8px]  "
            ></img>
            <div className="absolute mt-20 pl-4 text-green-700">
              {" "}
              <button className="bg-amber-50 p-1 rounded-[5px] w-20 ml-4 mt-5">
                ADD
              </button>
            </div>
          </div>

          <div className="flex-col justify-start py-7 text-left  w-[900px]">
            <span className="flex py-4 text-orange-400">
              {item.card.info.name}- ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}{" "}
            </span>

            <span className="py-8 font-poppins text-[10px] font-medium">
              {item.card.info.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
