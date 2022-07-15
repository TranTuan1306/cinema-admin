import axios from "axios";
import React, { useEffect, useState } from "react";
import "./_user.scss";
export default function User({ userId }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/users/find/" + userId, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTIyMTBlYTgzY2I2N2FiYjhjNzMxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzg4NDcwMCwiZXhwIjoxNjU4MzE2NzAwfQ.ZDyae5qHgGWgz42qbxjMnZaEh4ibkSDCw-QaTEYdFr8",
          },
        });
        setUser(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, [userId]);

  return (
    <div className="userInfo">
      <img
        src={user.profilePic ? user.profilePic : "https://picsum.photos/50/50"}
        alt=""
        className="imgUserFromAdmin"
      />
      <span className="userName">{user.username}</span>
    </div>
  );
}
