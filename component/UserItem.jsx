import React from "react";

const UserItem = ({ user }) => {
  return (
    <li className="user-card">
      <div>
        {user.name.title} {user.name.first} {user.name.last}
      </div>
      <img src={user.picture.large} alt="" />
    </li>
  );
};

export default UserItem;