import React from "react";
import classes from "./ProfileCard.module.css";

const ProfileCard = ({ userInfo }) => {
  return (
    <div className={classes.card}>
      <div className={classes.container}>
        <h2>{userInfo.fullname}</h2>
        <h5>User: {userInfo.username}</h5>
        <ul>
          <li>{userInfo.street}</li>
          <li>
            {userInfo.city}, {userInfo.state} {userInfo.postal}
          </li>

          <li>Email: {userInfo.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
