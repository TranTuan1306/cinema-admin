import Chart from "../../components/chart/Chart";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTIyMTBlYTgzY2I2N2FiYjhjNzMxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzg4NDcwMCwiZXhwIjoxNjU4MzE2NzAwfQ.ZDyae5qHgGWgz42qbxjMnZaEh4ibkSDCw-QaTEYdFr8",
          },
        });

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Người dùng mới": item.total },
          ])
        );
      } catch (e) {
        console.log(e);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <Chart
        data={userStats}
        title="Thống kê số user gần đây"
        grid
        dataKey="Người dùng mới"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
