import React, { useEffect, useState } from "react";

export default function LifeCycleDemo4() {
  const [userId, setUserId] = useState(1);
  const [userInfo, setUserInfo] = useState({});

  let increment = () => {
    setUserId(userId + 1);
  };

  let fetchUserData = async () => {
    let url = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    let response = await url.json();
    setUserInfo(response);
  };
  useEffect(() => {
    fetchUserData(); // componentDidMont
    return () => {
      console.log("component will unmount");
    };
  }, [userId]); // this dipendancy array for what you want to update if it is empty it will only render one time and not array then it render every time when state update component update .
  return (
    <>
      <h1>This Is User : {userId} Data</h1>
      <p>
        <button onClick={increment}>increment</button>
      </p>

      <div className="container border border-dark vw-100 container-fluid">
        <div className="row border border-dark">
          <div className="card col-sm-3 text-center me-1">
            <div className="card-header">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8ev8kP0T1DM8WFwNjZH72TkuuIg1uQs1vwH8F0IWHQ&s"
                alt="pic"
                className="container-fluid"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Name:{userInfo.name}</h5>
              <p className="card-subTitle">Email:{userInfo.email}</p>
              <p className="card-subTitle">Phone:{userInfo.phone}</p>
              <p className="card-subTitle">Address:{userInfo.street}</p>
            </div>
          </div>

          <div className="card col-sm-3 text-center me-1">
            <div className="card-header">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8ev8kP0T1DM8WFwNjZH72TkuuIg1uQs1vwH8F0IWHQ&s"
                alt="pic"
                className="container-fluid"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Name:{userInfo.name}</h5>
              <p className="card-subTitle">Email:{userInfo.email}</p>
              <p className="card-subTitle">Phone:{userInfo.phone}</p>
              <p className="card-subTitle">Address:{userInfo.street}</p>
            </div>
          </div>

          <div className="card col-sm-3 text-center me-1">
            <div className="card-header">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8ev8kP0T1DM8WFwNjZH72TkuuIg1uQs1vwH8F0IWHQ&s"
                alt="pic"
                className="container-fluid"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Name:{userInfo.name}</h5>
              <p className="card-subTitle">Email:{userInfo.email}</p>
              <p className="card-subTitle">Phone:{userInfo.phone}</p>
              <p className="card-subTitle">Address:{userInfo.street}</p>
            </div>
          </div>

          <div className="card col-sm-3 text-center me-1">
            <div className="card-header">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8ev8kP0T1DM8WFwNjZH72TkuuIg1uQs1vwH8F0IWHQ&s"
                alt="pic"
                className="container-fluid"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Name:{userInfo.name}</h5>
              <p className="card-subTitle">Email:{userInfo.email}</p>
              <p className="card-subTitle">Phone:{userInfo.phone}</p>
              <p className="card-subTitle">Address:{userInfo.street}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
