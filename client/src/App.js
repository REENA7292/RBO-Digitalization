// import './App.css';
// import AddUser from "./adduser/AddUser";
// import User from "./getuser/user";
// import {createBrowserRouter, RouterProvider } from "react-router-dom";
// import Update from "./updateuser/Update";

// function App() {
//   const route = createBrowserRouter([
//     {
//       path: "/",
//       element: <User />,
//     },
//     {
//       path: "/add",
//       element: <AddUser />,
//     },
//     {
//       path: "/update/:id",
//       element: <Update />,
//     },
//   ]);
//   return (
//     <div className="App">
//       <RouterProvider router = {route}></RouterProvider>
//     </div>
//   );
// }

// export default App;




import "./App.css";
import AddUser from "./adduser/AddUser";
import AddUnit2 from "./adduser/AddUnit2"; // ✅ Add Unit2 Employee
import User from "./getuser/user"; // ✅ Unit 1 Page
import Unit2 from "./getuser/Unit2"; // ✅ Unit 2 Page
import Dashboard from "./pages/Dashboard"; // ✅ Dashboard Page
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Update from "./updateuser/Update"; // ✅ Update Unit1 Employee
import UpdateUnit2 from "./updateuser/UpdateUnit2"; // ✅ Update Unit2 Employee

const route = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />, // Show Dashboard as the home page
  },
  {
    path: "/unit1",
    element: <User />, // Unit 1 Page
  },
  {
    path: "/unit2",
    element: <Unit2 />, // Unit 2 Page
  },
  {
    path: "/add",
    element: <AddUser />, // Add Employee for Unit1
  },
  {
    path: "/add/unit2",
    element: <AddUnit2 />, // Add Employee for Unit2
  },
  {
    path: "/update/:id",
    element: <Update />, // Update Employee for Unit1
  },
  {
    path: "/update/unit2/:id",
    element: <UpdateUnit2 />, // ✅ Update Employee for Unit2
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;

