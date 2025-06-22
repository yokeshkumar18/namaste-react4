import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <>
        <h1>count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          increase count
        </button>
        <h3>name:{name}</h3>
        <h3>Location:{location}</h3>
        <h3>Gmail:yokeshk868@gmail.com</h3>
      </>
    );
  }
}

export default UserClass;
