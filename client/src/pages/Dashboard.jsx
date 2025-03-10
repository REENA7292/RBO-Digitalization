import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [unit1Data, setUnit1Data] = useState([]);
  const [unit2Data, setUnit2Data] = useState([]);

  useEffect(() => {
    // Fetch Unit 1 Data
    axios.get("https://rbo-digitalization-1.onrender.com/api/users")
      .then((response) => setUnit1Data(response.data))
      .catch((error) => console.error("Error fetching Unit 1 data", error));

    // Fetch Unit 2 Data
    axios.get("https://rbo-digitalization-1.onrender.com/api/unit2/users")
      .then((response) => setUnit2Data(response.data))
      .catch((error) => console.error("Error fetching Unit 2 data", error));
  }, []);

  // Helper function to get unique count of a field
  const getUniqueCount = (data, field) => {
    const uniqueSet = new Set(data.map(item => item[field]));
    return uniqueSet.size;
  };

  // Helper function to count occurrences of a specific value
  const getCountByValue = (data, field, value) => {
    return data.filter(item => item[field] === value).length;
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">RBO DIGITALIZATION</h1>

      <div className="dashboard-grid">
        {/* Unit 1 Section */}
        <div className="dashboard-section">
          <h2 className="unit-title">Unit 1</h2>
          <div className="dashboard-card approved-roles">
            No. of Approved Roles: <span className="font-bold">{getUniqueCount(unit1Data, "roleCode")}</span>
          </div>
          <div className="dashboard-card approved-jobs">
            No. of Approved Jobs: <span className="font-bold">{getUniqueCount(unit1Data, "jobCode")}</span>
          </div>
          <div className="dashboard-card occupied-jobs">
            No. of Occupied Jobs: <span className="font-bold">{getCountByValue(unit1Data, "availability", "OCCUPIED")}</span>
          </div>
          <div className="dashboard-card resigned-jobs">
            No. of Resigned Jobs: <span className="font-bold">{getCountByValue(unit1Data, "availability", "RESIGNED")}</span>
          </div>
          <div className="dashboard-card hold-jobs">
            No. of Hold Jobs: <span className="font-bold">{getCountByValue(unit1Data, "availability", "HOLD")}</span>
          </div>
          <div className="dashboard-card vacant-jobs">
            No. of Vacant Jobs: <span className="font-bold">{getCountByValue(unit1Data, "availability", "VACANT")}</span>
          </div>
        </div>

        {/* Unit 2 Section */}
        <div className="dashboard-section">
          <h2 className="unit-title">Unit 2</h2>
          <div className="dashboard-card approved-roles">
            No. of Approved Roles: <span className="font-bold">{getUniqueCount(unit2Data, "roleCode")}</span>
          </div>
          <div className="dashboard-card approved-jobs">
            No. of Approved Jobs: <span className="font-bold">{getUniqueCount(unit2Data, "jobCode")}</span>
          </div>
          <div className="dashboard-card occupied-jobs">
            No. of Occupied Jobs: <span className="font-bold">{getCountByValue(unit2Data, "availability", "OCCUPIED")}</span>
          </div>
          <div className="dashboard-card resigned-jobs">
            No. of Resigned Jobs: <span className="font-bold">{getCountByValue(unit2Data, "availability", "RESIGNED")}</span>
          </div>
          <div className="dashboard-card hold-jobs">
            No. of Hold Jobs: <span className="font-bold">{getCountByValue(unit2Data, "availability", "HOLD")}</span>
          </div>
          <div className="dashboard-card vacant-jobs">
            No. of Vacant Jobs: <span className="font-bold">{getCountByValue(unit2Data, "availability", "VACANT")}</span>
          </div>
        </div>
      </div>

      <div className="dashboard-buttons">
        <button className="dashboard-btn unit1-btn" onClick={() => navigate("/unit1")}>
          Unit 1
        </button>
        <button className="dashboard-btn unit2-btn" onClick={() => navigate("/unit2")}>
          Unit 2
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
