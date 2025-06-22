import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantmenu = (resId) => {
  const [resinfo, setResinfo] = useState(null);

  useEffect(() => {
    Fetchmenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Fetchmenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setResinfo(json);
  };
  return resinfo;
};

export default useRestaurantmenu;
