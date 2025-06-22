import { useState } from "react";

const User = (props) => {
  const [count, setcount] = useState(0);
  return (
    <div className="userdiv">
      <h1>count={count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        increase count
      </button>
      <h3>Name:{props.name}</h3>
      <h3>Location:{props.location}</h3>
      <h3>Gmail:yokeshk868@gmail.com</h3>
    </div>
  );
};

export default User;
