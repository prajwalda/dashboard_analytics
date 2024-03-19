import React from "react";
import AdminSIdebar from "../components/AdminSIdebar";
import Barchartgenerator from "../components/Barchartgenerator";
import LineChartGenerator from "../components/LineChartgenerator";
import PieChartGenerator from "../components/PieChartGenerator";
import PlatformUsageChart from "../components/PlatformUsageChart";
import CountryUsageChart from "../components/CountryUsageChart";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";

const dashboard = () => {
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
        <div className="chart" >
            <LineChartGenerator />
          </div>
         
          <div className="chart" >
            <PlatformUsageChart />
          </div>
          <div className="chart" >
            <CountryUsageChart />
          </div>
          <div className="chart" >
            <Barchartgenerator />
          </div>
          <div className="chart" >
            <PieChartGenerator />
          </div>
          
          
        </div>
      </main>
    </div>
  );
};

export default dashboard;
