import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function UsersDetails(props) {
  let [searchParams] = useSearchParams();

  let [users, setUsers] = useState({});

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams);
    setUsers({
      name: searchParams.get("name"),
      email: searchParams.get("email"),
      city: searchParams.get("city"),
    });
  }, [searchParams]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 offset-4">
            <div className="card text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZNQ6Pte02JNcAfeti0b-oiumHtdNOkXQrCZp7bfQYuxe44LbbaIN0MccovXN04stLDg&usqp=CAU"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{users.name}</h5>
                <p className="card-text">Email : {users.email}</p>
                <p className="card-text">Address : {users.city}</p>
                <p className="card-text">Phone : {users.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
