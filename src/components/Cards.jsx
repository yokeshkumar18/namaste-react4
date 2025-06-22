import { IMG_URL } from "./utils/constants";

const Cards = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    resData?.info || {};
  return (
    <>
      <div className="flex-wrap m-2 p-5 w-[170px]  h-[280px] bg-gray-200 shadow-2xl animate__animated animate__fadeInUp duration-100 scroll-smooth dark:bg-gray-100 rounded-[4px] shadow-black">
        <div className="restro-img flex-wrap ">
          <img
            className=" w-[190px] h-[80px] "
            src={IMG_URL + cloudinaryImageId}
          ></img>
          <h2 className=" text-amber-600 font-bold text-[15px] m-1">{name}</h2>
        </div>
        <div className="content border-gray-50">
          <p className="text-[8px] text-blue-900 m-1">
            {cuisines.join(", ").slice(0, 30) +
              (cuisines.join(", ").length > 30 ? "..." : "")}
          </p>
          <p className="star text-[14px] text-red-500 mr-28 m-1">
            {avgRating}★
          </p>

          <h3 className="text-[13px] text-amber-950 m-1 ">{costForTwo}</h3>

          <h4 className="text-[12px] text-green-600 m-1">Free delivery</h4>
        </div>
      </div>
    </>
  );
};

export default Cards;
