import { useRouteError } from "react-router-dom";
import { IMG_COMEDY } from "./utils/constants";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>oops..!something went wrong</h1>
      <h5>
        {err.status}:{err.statusText}
      </h5>
      <img className="image" src={IMG_COMEDY} />
    </div>
  );
};
export default Error;
