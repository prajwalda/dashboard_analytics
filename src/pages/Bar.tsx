import AdminSIdebar from "../components/AdminSIdebar";
// import Barchartgenerator from "../components/Barchartgenerator";
// import PlatformUsageChart from "../components/PlatformUsageChart";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import Barchartgenerator from "../components/Barchartgenerator";
import PlatformUsageChart from "../components/PlatformUsageChart";

const Bar = () => {
  return (
    <div className="adminContainer">
      <AdminSIdebar />

      <main className="charts">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img
            src={
              "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1494"
            }
            alt="User"
          />
        </div>
        <hr />

        <div className="chart-row">
          <Barchartgenerator />
          <PlatformUsageChart />
        </div>
      </main>
    </div>
  );
};

export default Bar;
