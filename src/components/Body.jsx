import Cards from "./Cards";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "./utils/useonlinestatus";
import Footer2 from "./Footer2";

const Body = () => {
  const [Listofres, setListofres] = useState([]);
  const [search, setsearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // setList(json.data.cards);

    console.log(json);

    setListofres(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const Searchfilter = (e) => {
    const searchvalue = e.target.value;
    setsearch(searchvalue);

    const filteredRestaurants = Listofres.filter((res) =>
      res.info.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };
  const Filter = () => {
    const filter = Listofres.filter((res) => res.info.avgRating > 4.3);
    setFilteredRestaurants(filter);
  };
  const Filter2 = () => {
    const filter = Listofres.filter((res) => res.info.avgRating <= 4.3);
    setFilteredRestaurants(filter);
  };

  const onlinestatus = useOnlinestatus();
  if (onlinestatus === false)
    return <h1>You're not connected to the internet</h1>;

  return (
    <>
      <div className="flex justify-between flex-row-reverse w-12/12 dark:bg-gray-800">
        <div className="flex w-5/12">
          <div className="filter p-3 m-1">
            <button
              className="text-white bg-orange-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1.5 text-center me-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-500 dark:focus:ring-blue-800"
              onClick={Filter}
            >
              Top rated restaurants
            </button>
          </div>
          <div className="filter p-3 m-1">
            <button
              className="text-white bg-orange-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1.5 text-center me-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-500 dark:focus:ring-blue-800"
              onClick={Filter2}
            >
              Below 4.3 ★
            </button>
          </div>
        </div>

        <form class="w-[350px] mx-auto p-3 ">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              onChange={Searchfilter}
              value={search}
              id="default-search"
              class="block w-full h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg--50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
              placeholder="Search Restaurents,and foods.. "
              required
            />
            {/* <button type="submit" class="text-white absolute end-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-orange-600 dark:hover:bg-orange-500 dark:focus:ring-orange-800">Search</button> */}
          </div>
        </form>
      </div>

      <div className="flex justify-center flex-wrap dark:bg-gray-800 ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurents/" + restaurant.info.id}
            style={{ textDecoration: "none" }}
          >
            <Cards resData={restaurant} />
          </Link>
        ))}
      </div>
      {Listofres.length === 0 && <Shimmer />}
      <Footer2 />
    </>
  );
};

export default Body;
