import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [positionMatchFilter, setPositionMatchFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  // Fetch Users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://rbo-digitalization-1.onrender.com/api/users");
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
        const response = await axios.delete(`https://rbo-digitalization-1.onrender.com/api/delete/user/${userId}`);
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
      <h1> UNIT 1</h1>
      
      {/* 🔹 Buttons Section */}
      <div className="button-container">
        <Link to="/add" className="btn-add">
          Add Employee <i className="fa-solid fa-user-plus"></i>
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
            <th>S.No</th>
            <th>Unit</th>
            <th>Function</th>
            <th>Department</th>
            <th>Role Category</th>
            <th>Role Code</th>
            <th>Role Name</th>
            <th>Job Code</th>
            <th>Job Name</th>
            <th>Emp No</th>
            <th>Emp Name</th>
            <th>Type of Position</th>
            <th>Grade</th>
            <th>Designation</th>
            <th>Position Bandwidth (Low)</th>
            <th>Position Bandwidth (High)</th>
            <th>Position Match</th>
            <th>Availability</th>
            <th>MPR Status</th>
            <th>Position Hold Date</th>
            <th>JD Issued</th>
            <th>Reporting Emp No</th>
            <th>Reporting Emp Name</th>
            <th>Reporting Emp Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.unit}</td>
              <td>{user.function}</td>
              <td>{user.department}</td>
              <td>{user.roleCategory}</td>
              <td>{user.roleCode}</td>
              <td>{user.roleName}</td>
              <td>{user.jobCode}</td>
              <td>{user.jobName}</td>
              <td>{user.empNo}</td>
              <td>{user.empName}</td>
              <td>{user.typeOfPosition}</td>
              <td>{user.grade}</td>
              <td>{user.designation}</td>
              <td>{user.positionBandwidthLow}</td>
              <td>{user.positionBandwidthHigh}</td>
              <td>{user.positionMatch}</td>
              <td>{user.availability}</td>
              <td>{user.mprStatus}</td>
              <td>{user.positionHoldDate}</td>
              <td>{user.jdIssued}</td>
              <td>{user.reportingEmpNo}</td>
              <td>{user.reportingEmpName}</td>
              <td>{user.reportingEmpDesignation}</td>
              <td className="actionButtons">
                <Link to={`/update/${user._id}`} type="button" className="btn btn-info">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button onClick={() => deleteUser(user._id)} type="button" className="btn btn-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
