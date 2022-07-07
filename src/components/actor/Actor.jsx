import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./_actor.scss";

export default function Actor({ item }) {
  const [actor, setActor] = useState({});
  useEffect(() => {
    const getActor = async () => {
      try {
        const res = await axios.get("/actors/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU4YjZjOTUwMDJlYTJmZjFjYjMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzIxOTM5NywiZXhwIjoxNjU3NjUxMzk3fQ.3W2vH855a0mmE_hDbgNZZFg_m7d0HPgIE4e2P3Ek6SY",
          },
        });
        setActor(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getActor();
  }, [item]);
  return (
    <div className="actorPage">
      <div className="card">
        <div className="card-top">
          <img className="actorImg" src={actor.profilePic} alt="" />
        </div>
        <div className="card-bot">
          <span className="actorName">{actor.name}</span>
        </div>
      </div>
    </div>
  );
}
