import React, { useState } from "react";
import "./adduser.css"; // Ensure this CSS file exists and applies styles correctly
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUnit2 = () => {
  const initialState = {
    unit: "",
    division: "",
    function: "",
    department: "",
    roleCategory: "",
    roleCode: "",
    roleName: "",
    jobCode: "",
    jobName: "",
    empNo: "",
    empName: "",
    grade: "",
    designation: "",
    typeOfPosition: "",
    positionBandwidthLow: "",
    positionBandwidthHigh: "",
    positionMatch: "",
    availability: "",
    remarks: "",
    mprStatus: "",
    positionHoldData: "",
    jdIssued: "",
    reportingEmpNo: "",
    reportingEmpName: "",
    reportingEmpDesignation: "",
  };

  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://rbo-digitalization-1.onrender.com/api/unit2/user", user);
      toast.success(response.data.message, { position: "top-right" });
      navigate("/unit2");
    } catch (error) {
      console.error(error);
      toast.error("Error submitting the form", { position: "top-right" });
    }
  };

  return (
    <div className="addUser">
      <Link to="/unit2" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Add New Employee - Unit 2</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="unit">Unit:</label>
          <input type="text" id="unit" name="unit" value={user.unit} onChange={inputHandler} placeholder="Enter Unit" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="division">Division:</label>
          <input type="text" id="division" name="division" value={user.division} onChange={inputHandler} placeholder="Enter Division" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="function">Function:</label>
          <input type="text" id="function" name="function" value={user.function} onChange={inputHandler} placeholder="Enter Function" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" name="department" value={user.department} onChange={inputHandler} placeholder="Enter Department" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="roleCategory">Role Category:</label>
          <input type="text" id="roleCategory" name="roleCategory" value={user.roleCategory} onChange={inputHandler} placeholder="Enter Role Category" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="roleCode">Role Code:</label>
          <input type="text" id="roleCode" name="roleCode" value={user.roleCode} onChange={inputHandler} placeholder="Enter Role Code" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="roleName">Role Name:</label>
          <input type="text" id="roleName" name="roleName" value={user.roleName} onChange={inputHandler} placeholder="Enter Role Name" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="jobCode">Job Code:</label>
          <input type="text" id="jobCode" name="jobCode" value={user.jobCode} onChange={inputHandler} placeholder="Enter Job Code" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="jobName">Job Name:</label>
          <input type="text" id="jobName" name="jobName" value={user.jobName} onChange={inputHandler} placeholder="Enter Job Name" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="empNo">Employee Number:</label>
          <input type="number" id="empNo" name="empNo" value={user.empNo} onChange={inputHandler} placeholder="Enter Employee Number" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="empName">Employee Name:</label>
          <input type="text" id="empName" name="empName" value={user.empName} onChange={inputHandler} placeholder="Enter Employee Name" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="grade">Grade:</label>
          <input type="text" id="grade" name="grade" value={user.grade} onChange={inputHandler} placeholder="Enter Grade" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="designation">Designation:</label>
          <input type="text" id="designation" name="designation" value={user.designation} onChange={inputHandler} placeholder="Enter Designation" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="typeOfPosition">Type of Position:</label>
          <input type="text" id="typeOfPosition" name="typeOfPosition" value={user.typeOfPosition} onChange={inputHandler} placeholder="Enter Type of Position" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="positionBandwidthLow">Position Bandwidth (Low):</label>
          <input type="text" id="positionBandwidthLow" name="positionBandwidthLow" value={user.positionBandwidthLow} onChange={inputHandler} placeholder="Enter Low Bandwidth" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="positionBandwidthHigh">Position Bandwidth (High):</label>
          <input type="text" id="positionBandwidthHigh" name="positionBandwidthHigh" value={user.positionBandwidthHigh} onChange={inputHandler} placeholder="Enter High Bandwidth" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="availability">Availability:</label>
          <select id="availability" name="availability" value={user.availability} onChange={inputHandler} required>
            <option value="">Select Availability</option>
            <option value="Occupied">Occupied</option>
            <option value="Hold">Hold</option>
            <option value="Resigned">Resigned</option>
            <option value="Vacant">Vacant</option>
          </select>
        </div>

        <div className="inputGroup">
          <label htmlFor="remarks">Remarks:</label>
          <input type="text" id="remarks" name="remarks" value={user.remarks} onChange={inputHandler} placeholder="Enter Remarks" />
        </div>



        <div className="inputGroup">
          <label htmlFor="mprStatus">MPR Status:</label>
          <input type="text" id="mprStatus" name="mprStatus" value={user.mprStatus} onChange={inputHandler} placeholder="Enter MPR Status" />
        </div>

        <div className="inputGroup">
  <label htmlFor="positionHoldDate">Position Hold Date:</label>
  <input 
    type="text" 
    id="positionHoldDate" 
    name="positionHoldDate" 
    value={user.positionHoldDate} 
    onChange={inputHandler} 
    placeholder="Enter Position Hold Date" 
    required 
  />
</div>

<div className="inputGroup">
  <label htmlFor="jdIssued">JD Issued:</label>
  <input 
    type="text" 
    id="jdIssued" 
    name="jdIssued" 
    value={user.jdIssued} 
    onChange={inputHandler} 
    placeholder="Enter JD Issued" 
    required 
  />
</div>

<div className="inputGroup">
  <label htmlFor="reportingEmpNo">Reporting Emp No:</label>
  <input 
    type="text" 
    id="reportingEmpNo" 
    name="reportingEmpNo" 
    value={user.reportingEmpNo} 
    onChange={inputHandler} 
    placeholder="Enter Reporting Employee Number" 
    required 
  />
</div>

<div className="inputGroup">
  <label htmlFor="reportingEmpName">Reporting Emp Name:</label>
  <input 
    type="text" 
    id="reportingEmpName" 
    name="reportingEmpName" 
    value={user.reportingEmpName} 
    onChange={inputHandler} 
    placeholder="Enter Reporting Employee Name" 
    required 
  />
</div>

<div className="inputGroup">
  <label htmlFor="reportingEmpDesignation">Reporting Emp Designation:</label>
  <input 
    type="text" 
    id="reportingEmpDesignation" 
    name="reportingEmpDesignation" 
    value={user.reportingEmpDesignation} 
    onChange={inputHandler} 
    placeholder="Enter Reporting Employee Designation" 
    required 
  />
</div>


        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddUnit2;
