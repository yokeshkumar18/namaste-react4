import { useState, useEffect } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "./utils/useonlinestatus";

const Header = () => {
  const [btnsign, setbtn] = useState("𖤓 Sign in");
  const onlinestatus = useOnlinestatus();

  const handlesign = () => {
    setbtn("⏻ Sign Out");
  };

  useEffect(() => {}, []);

  return (
    <div className="flex justify-between bg-white-100 shadow-lg px-3 font-poppins text-sm sm:bg-lightblue sm:text-base md:bg-lightcoral md:text-sm dark:bg-gray-800 dark:text-gray-300 dark:border-b-1 border-gray-700 hover:dark:shadow-white">
      <div className="logo-container align-middle">
        <img
          className="h-[80px] rounded-[200px] align-middle p-2"
          src={LOGO_URL}
        />
      </div>

      <div className="flex align-middle  ">
        <ul className="flex columns-1 align-middle items-center ">
          <li className="animate-pulse ">{onlinestatus ? "🟢" : "🔴"}</li>
          <li className="mx-5 hover:text-orange-400 font-medium">
            <Link to="/restrocorporate" style={{ textDecoration: "none" }}>
              🏠︎ Restro Corporate
            </Link>
          </li>
          <li className="mx-5  hover:text-orange-400 font-medium ">
            <Link to="/offers" style={{ textDecoration: "none" }}>
              % Offers
            </Link>
          </li>
          <li className="mx-5  hover:text-orange-400 font-medium">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              ☣︎ Cart
            </Link>
          </li>
          <li className="mx-5  hover:text-orange-400 font-medium">
            <Link to="/grocery" style={{ textDecoration: "none" }}>
              ֎ Grocery
            </Link>
          </li>
          <li className="mx-5  hover:text-orange-400 font-medium ">
            <Link to="/help" style={{ textDecoration: "none" }}>
              ⓘ Help
            </Link>
          </li>
          <li
            className=" hover:text-orange-400 font-medium"
            onClick={handlesign}
            // onClick={() => {
            //   btnsign === "𖤓 Sign in"
            //     ? setbtn("⏻ Sign Out")
            //     : setbtn("𖤓 Sign in");
            // }}
          >
            <Link
              to="/signin"
              style={{ textDecoration: "none" }}
              className="signin"
            >
              {btnsign}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
