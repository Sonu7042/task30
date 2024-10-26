import React from "react";

const Display = ({ createUser }) => {
  return (
    <div className="displayUser">
      <h1>Display Users</h1>
      {createUser.map((value, index) => {
        return (
          <div key={index} className="displayData">
            <p>{value.name}</p>
            <p>{value.email}</p>
            <p>{value.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
