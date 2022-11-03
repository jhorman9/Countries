import React from "react";
import usersList from "../src/user.json";

const Users = () => {
  console.log(usersList);

  return (
    <ul>
      {usersList.map((user) => (
        <li key={user.cell}>
          {user.name.title} {user.name.first} {user.name.last}
        </li>
      ))}
    </ul>
  );
};

export default Users;