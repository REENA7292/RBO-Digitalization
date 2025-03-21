import React, { useEffect, useState } from "react";
import "./update.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUnit2 = () => {
  const initialFormState = {
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
    positionHoldDate: "",
    jdIssued: "",
    reportingEmpNo: "",
    reportingEmpName: "",
    reportingEmpDesignation: "",
  };

  const [user, setUser] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams(); // Get user ID from URL

  useEffect(() => {
    axios
      .get(`https://rbo-digitalization-1.onrender.com/api/unit2/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://rbo-digitalization-1.onrender.com/api/unit2/update/user/${id}`, user);
      toast.success(response.data.message, { position: "top-right" });
      navigate("/unit2"); // Redirect to Unit2 table page
    } catch (error) {
      console.error(error);
      toast.error("Error updating the form", { position: "top-right" });
    }
  };

  // Dropdown options
  const unitOptions = ["LLS U2"];
  const divisionOptions = ["LIFE SCIENCES", "TOOLING"];
  const functionOptions = [
    "BUSINESS DEVELOPMENT",
    "BUSINESS UNIT HEAD",
    "CUSTOMER SERVICE",
    "DESIGN",
    "FINANCE & ACCOUNTS",
    "HUMAN RESOURCE",
    "INFORMATION TECHNOLOGY",
    "MANUFACTURING",
    "PRODUCTION PLANNING&CONTROL",
    "PROJECT MANAGEMENT",
    "QUALITY ASSURANCE",
    "SUPPLY CHAIN MANAGEMENT",
  ];
  const departmentOptions = [
    "ACCOUNTS PAYABLE",
    "ACCOUNTS RECEIVABLE",
    "ASSEMBLY",
    "BUH",
    "COST ACCOUNTS",
    "DESIGN",
    "DESIGN (ELECTRODE)",
    "DESIGN (MOULD)",
    "DEVELOPMENT",
    "FINANCE & ACCOUNTS",
    "HUMAN RESOURCES",
    "IT",
    "MACHINE SHOP",
    "MANUFACTURING-TOOLING",
    "MARKETING",
    "MARKETING - TOOLING",
    "MOULD MAINTENANCE",
    "POLISHING",
    "PROCESS PLANNING",
    "PRODUCT PLANNING",
    "PRODUCTION",
    "PROJECT PLANNING",
    "PURCHASE",
    "QUALITY ASSURANCE",
    "SCM",
    "STORES",
    "TOOL ASSEMBLY",
    "TPM",
  ];
  const roleCategoryOptions = ["FUNCTIONAL", "MANAGERIAL", "OPERATOR", "STRATEGIC"];
  const positionMatchOptions = ["MATCH", "MISMATCH"];
  const availabilityOptions = ["HOLD", "OCCUPIED", "RESIGNED", "VACANT"];

  return (
    <div className="addUser">
      <Link to="/unit2" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Update Unit2 Employee</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        {/* Unit Dropdown */}
        <div className="inputGroup">
          <label htmlFor="unit">Unit:</label>
          <select id="unit" name="unit" value={user.unit} onChange={inputHandler} required>
            <option value="">Select Unit</option>
            {unitOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Division Dropdown */}
        <div className="inputGroup">
          <label htmlFor="division">Division:</label>
          <select id="division" name="division" value={user.division} onChange={inputHandler} required>
            <option value="">Select Division</option>
            {divisionOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Function Dropdown */}
        <div className="inputGroup">
          <label htmlFor="function">Function:</label>
          <select id="function" name="function" value={user.function} onChange={inputHandler} required>
            <option value="">Select Function</option>
            {functionOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Department Dropdown */}
        <div className="inputGroup">
          <label htmlFor="department">Department:</label>
          <select id="department" name="department" value={user.department} onChange={inputHandler} required>
            <option value="">Select Department</option>
            {departmentOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Role Category Dropdown */}
        <div className="inputGroup">
          <label htmlFor="roleCategory">Role Category:</label>
          <select id="roleCategory" name="roleCategory" value={user.roleCategory} onChange={inputHandler} required>
            <option value="">Select Role Category</option>
            {roleCategoryOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>


        <div className="inputGroup">
          <label htmlFor="roleCode">Role Code:</label>
          <input type="text" id="roleCode" name="roleCode" value={user.roleCode} onChange={inputHandler} required />
        </div>

        <div className="inputGroup">
          <label htmlFor="roleName">Role Name:</label>
          <input type="text" id="roleName" name="roleName" value={user.roleName} onChange={inputHandler} required />
        </div>

        <div className="inputGroup">
          <label htmlFor="jobCode">Job Code:</label>
          <input type="text" id="jobCode" name="jobCode" value={user.jobCode} onChange={inputHandler} required />
        </div>

        <div className="inputGroup">
          <label htmlFor="jobName">Job Name:</label>
          <input type="text" id="jobName" name="jobName" value={user.jobName} onChange={inputHandler} required />
        </div>

        <div className="inputGroup">
          <label htmlFor="empNo">Employee Number:</label>
          <input type="number" id="empNo" name="empNo" value={user.empNo} onChange={inputHandler}/>
        </div>

        <div className="inputGroup">
          <label htmlFor="empName">Employee Name:</label>
          <input type="text" id="empName" name="empName" value={user.empName} onChange={inputHandler}/>
        </div>

        <div className="inputGroup">
          <label htmlFor="grade">Grade:</label>
          <input type="text" id="grade" name="grade" value={user.grade} onChange={inputHandler}/>
        </div>

        <div className="inputGroup">
          <label htmlFor="designation">Designation:</label>
          <input type="text" id="designation" name="designation" value={user.designation} onChange={inputHandler}/>
        </div>

        <div className="inputGroup">
          <label htmlFor="typeOfPosition">Type of Position:</label>
          <input type="text" id="typeOfPosition" name="typeOfPosition" value={user.typeOfPosition} onChange={inputHandler} />
        </div>

        <div className="inputGroup">
          <label htmlFor="positionBandwidthLow">Position Bandwidth (Low):</label>
          <input type="text" id="positionBandwidthLow" name="positionBandwidthLow" value={user.positionBandwidthLow} onChange={inputHandler}/>
        </div>

        <div className="inputGroup">
          <label htmlFor="positionBandwidthHigh">Position Bandwidth (High):</label>
          <input type="text" id="positionBandwidthHigh" name="positionBandwidthHigh" value={user.positionBandwidthHigh} onChange={inputHandler} />
        </div>

        {/* Position Match Dropdown */}
        <div className="inputGroup">
          <label htmlFor="positionMatch">Position Match:</label>
          <select id="positionMatch" name="positionMatch" value={user.positionMatch} onChange={inputHandler}>
            <option value="">Select Position Match</option>
            {positionMatchOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Availability Dropdown */}
        <div className="inputGroup">
          <label htmlFor="availability">Availability:</label>
          <select id="availability" name="availability" value={user.availability} onChange={inputHandler}>
            <option value="">Select Availability</option>
            {availabilityOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="inputGroup">
          <label htmlFor="remarks">Remarks:</label>
          <input type="text" id="remarks" name="remarks" value={user.remarks} onChange={inputHandler}/>
        </div>

                <div className="inputGroup">
          <label htmlFor="mprStatus">MPR Status:</label>
          <input type="text" id="mprStatus" name="mprStatus" value={user.mprStatus} onChange={inputHandler} />
        </div>

        <div className="inputGroup">
          <label htmlFor="positionHoldDate">Position Hold Date:</label>
          <input type="text" id="positionHoldDate" name="positionHoldDate" value={user.positionHoldDate} onChange={inputHandler}/>
        </div>

        <div className="inputGroup">
          <label htmlFor="jdIssued">JD Issued:</label>
          <input type="text" id="jdIssued" name="jdIssued" value={user.jdIssued} onChange={inputHandler}/>
        </div>

        <div className="inputGroup">
          <label htmlFor="reportingEmpNo">Reporting Emp No:</label>
          <input type="text" id="reportingEmpNo" name="reportingEmpNo" value={user.reportingEmpNo} onChange={inputHandler}/>
        </div>

        <div className="inputGroup">
          <label htmlFor="reportingEmpName">Reporting Emp Name:</label>
          <input type="text" id="reportingEmpName" name="reportingEmpName" value={user.reportingEmpName} onChange={inputHandler}/>
        </div>

        <div className="inputGroup">
          <label htmlFor="reportingEmpDesignation">Reporting Emp Designation:</label>
          <input type="text" id="reportingEmpDesignation" name="reportingEmpDesignation" value={user.reportingEmpDesignation} onChange={inputHandler}/>
        </div>


        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUnit2;
