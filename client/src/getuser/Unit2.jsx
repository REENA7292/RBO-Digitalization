import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Unit2 = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [positionMatchFilter, setPositionMatchFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  // Fetch Users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://rbo-digitalization-1.onrender.com/api/unit2/users");
        setUsers(response.data);
        setFilteredUsers(response.data); // Initially show all users
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Delete User
  const deleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await axios.delete(`https://rbo-digitalization-1.onrender.com/api/delete/unit2/user/${userId}`);
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
        setFilteredUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId)); // Update filtered list
        toast.success(response.data.message, { position: "top-right" });
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Apply Search & Filter
  useEffect(() => {
    let filtered = users;

    // Search Filter
    if (searchTerm) {
      filtered = filtered.filter(
        (user) =>
          user.empName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.jobCode?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Position Match Filter
    if (positionMatchFilter) {
      filtered = filtered.filter((user) => user.positionMatch?.trim().toLowerCase() === positionMatchFilter.toLowerCase());
    }

    // Availability Filter
    if (availabilityFilter) {
      filtered = filtered.filter((user) => user.availability?.trim().toLowerCase() === availabilityFilter.toLowerCase());
    }

    setFilteredUsers(filtered);
  }, [searchTerm, positionMatchFilter, availabilityFilter, users]);

  // ✅ Reset Filters Function
  const resetFilters = () => {
    setSearchTerm(""); // Clear search box
    setPositionMatchFilter(""); // Reset Position Match filter
    setAvailabilityFilter(""); // Reset Availability filter
    setFilteredUsers(users); // Restore full employee list
  };

  return (
    <div className="userTable">
      <h1> UNIT 2</h1>
      
      {/* 🔹 Buttons Section */}
      <div className="button-container">
        <Link to="/add/unit2" className="btn-add">
         Add New Job and Role <i className="fa-solid fa-user-plus"></i>
        </Link>
        
        <Link to="/" className="btn-home">
          <i className="fa-solid fa-backward"></i> Home
        </Link>
      </div>

      {/* 🔍 Search & Filter Section */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search by Employee Name or Job Code..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {/* Position Match Filter */}
        <select className="filter-dropdown" value={positionMatchFilter} onChange={(e) => setPositionMatchFilter(e.target.value)}>
          <option value="">Filter by Position Match</option>
          <option value="Match">Match</option>
          <option value="Mismatch">Mismatch</option>
        </select>

        {/* Availability Filter */}
        <select className="filter-dropdown" value={availabilityFilter} onChange={(e) => setAvailabilityFilter(e.target.value)}>
          <option value="">Filter by Availability</option>
          <option value="Occupied">Occupied</option>
          <option value="Hold">Hold</option>
          <option value="Resigned">Resigned</option>
          <option value="Vacant">Vacant</option>
        </select>

        {/* ✅ Reset Filters Button */}
        <button className="reset-button" onClick={resetFilters}>Reset Filters</button>
      </div>

      {/* 🔽 Table with Filtered Data */}
      <table className="table table-bordered">
        <thead>
          <tr className="center-align">
            <th scope="col">S.No</th>
            <th scope="col">Unit</th>
            <th scope="col">Division</th>
            <th scope="col">Function</th>
            <th scope="col">Department</th>
            <th scope="col">Role Category</th>
            <th scope="col">Role Code</th>
            <th scope="col">Role Name</th>
            <th scope="col">Job Code</th>
            <th scope="col">Job Name</th>
            <th scope="col">Emp No</th>
            <th scope="col">Emp Name</th>
            <th scope="col">Grade</th>
            <th scope="col">Designation</th>
            <th scope="col">Type of Position</th>
            <th scope="col">Position Bandwidth (Low)</th>
            <th scope="col">Position Bandwidth (High)</th>
            <th scope="col">Position Match</th>
            <th scope="col">Availability</th>
            <th scope="col">Remarks</th>
            <th scope="col">MPR Status</th>
            <th scope="col">Position Hold Date</th>
            <th scope="col">JD Issued</th>
            <th scope="col">Reporting Emp No</th>
            <th scope="col">Reporting Emp Name</th>
            <th scope="col">Reporting Emp Designation</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.unit}</td>
              <td>{user.division}</td>
              <td>{user.function}</td>
              <td>{user.department}</td>
              <td>{user.roleCategory}</td>
              <td>{user.roleCode}</td>
              <td>{user.roleName}</td>
              <td>{user.jobCode}</td>
              <td>{user.jobName}</td>
              <td>{user.empNo}</td>
              <td>{user.empName}</td>
              <td>{user.grade}</td>
              <td>{user.designation}</td>
              <td>{user.typeOfPosition}</td>
              <td>{user.positionBandwidthLow}</td>
              <td>{user.positionBandwidthHigh}</td>
              <td>{user.positionMatch}</td>
              <td>{user.availability}</td>
              <td>{user.remarks}</td>
              <td>{user.mprStatus}</td>
              <td>{user.positionHoldDate}</td>
              <td>{user.jdIssued}</td>
              <td>{user.reportingEmpNo}</td>
              <td>{user.reportingEmpName}</td>
              <td>{user.reportingEmpDesignation}</td>
<td className="actionButtons">
  <Link to={`/update/${user._id}`} className="btn-update">
    Update
  </Link>
  <button onClick={() => deleteUser(user._id)} className="btn-delete">
    Delete
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Unit2;
