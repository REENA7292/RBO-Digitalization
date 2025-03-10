import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  unit: {
    type: String,
    required: true,
  },
  function: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  roleCategory: {
    type: String,
    required: true,
  },
  roleCode: {
    type: String,
    required: true,
  },
  roleName: {
    type: String,
    required: true,
  },
  jobCode: {
    type: String,
    required: true,
  },
  jobName: {
    type: String,
    required: true,
  },
  empNo: {
    type: String,
    required: false,
  },
  empName: {
    type: String,
    required: false,
  },
  typeOfPosition: {
    type: String,
    required: false,
  },
  grade: {
    type: String,
    required: false,
  },
  designation: {
    type: String,
    required: false,
  },
  positionBandwidthLow: {
    type: String,
    required: false,
  },
  positionBandwidthHigh: {
    type: String,
    required: false,
  },
  positionMatch: {
    type: String,
    required: false,
  },
  availability: {
    type: String,
    required: false,
  },
  mprStatus: {
    type: String,
    required: false,
  },
  positionHoldDate: {
    type: String,
    required: false,
  },
  jdIssued: {
    type: String,
    required: false,
  },
  reportingEmpNo: {
    type: String,
    required: false,
  },
  reportingEmpName: {
    type: String,
    required: false,
  },
  reportingEmpDesignation: {
    type: String,
    required: false,
  },
});

export default mongoose.model("User", userSchema, "unit1");
