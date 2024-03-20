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
  // first load the sidebar then the search bar then the graphs for each types
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
        {/* a line chart for response_times to demonstrate trends over time on a daily
and weekly basis */}
          <div className="chart">
            <LineChartGenerator />
          </div>
          {/* usage_statistics through different types of charts to show the
distribution by platform */}
          <div className="chart">
            <PlatformUsageChart />
          </div>
          {/* usage_statistics through different types of charts to show the
distribution by Country */}
          <div className="chart">
            <CountryUsageChart />
          </div>
          {/* a bar chart for the category_distribution to show the number of queries per
category */}
          <div className="chart">
            <Barchartgenerator />
          </div>
          {/* pie chart or bar graph to represent user_satisfaction based on ratings */}
          <div className="chart">
            <PieChartGenerator />
          </div>
        </div>
      </main>
    </div>
  );
};

export default dashboard;
