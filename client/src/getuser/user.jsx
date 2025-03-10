import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await axios.delete(`http://localhost:8000/api/delete/user/${userId}`);
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
        toast.success(response.data.message, { position: "top-right" });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    
    <div className="userTable">
      <h1> UNIT 1</h1>
      <Link to="/add" type="button" className="btn btn-primary">
        Add Employee <i className="fa-solid fa-user-plus"></i>
      </Link><tr></tr>

      <Link to="/" className="btn btn-secondary">
              <i className="fa-solid fa-backward"></i> Home
            </Link>
      <table className="table table-bordered">
        <thead>
          <tr className="center-align">
            <th scope="col">S.No</th>
            <th scope="col">Unit</th>
            <th scope="col">Function</th>
            <th scope="col">Department</th>
            <th scope="col">Role Category</th>
            <th scope="col">Role Code</th>
            <th scope="col">Role Name</th>
            <th scope="col">Job Code</th>
            <th scope="col">Job Name</th>
            <th scope="col">Emp No</th>
            <th scope="col">Emp Name</th>
            <th scope="col">Type of Position</th>
            <th scope="col">Grade</th>
            <th scope="col">Designation</th>
            <th scope="col">Position Bandwidth (Low)</th>
            <th scope="col">Position Bandwidth (High)</th>
            <th scope="col">Position Match</th>
            <th scope="col">Availability</th>
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
          {users.map((user, index) => (
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
