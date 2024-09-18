import React, { useState } from "react";
import { BrowserRouter as Router, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import About from './About';
import Student_Form from './student_form';
import Managment_form from './managment_form';
import ClgName from './clgname';
import Home from './Home';

export default function App() {
  return (
    <Router basename="/exam_seat_allotment_system">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/getSeat-Allotment(for_Student)" element={<Student_Form />} />
        {/* Login route where the user will enter ID and password */}
        <Route path="/login-for-seat" element={<LoginForm />} />
        <Route path="/Allot-Seat(for_mangment)" element={<Managment_form />} />
      </Routes>
    </Router>
  );
}

function Navbar() {
  return (
    <>
      <ClgName />
      <nav className="flex bg-gray-200 max-h-24 w-full sm:justify-end">
        <ul className="p-2 flex align-middle">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "pr-5 pt-1 font-bold text-blue-600" : "pr-5 pt-1"
            }
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "pr-5 pt-1 font-bold text-blue-600" : "pr-5 pt-1"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/getSeat-Allotment(for_Student)"
            className={({ isActive }) =>
              isActive ? "pr-5 pt-1 font-bold text-blue-600" : "pr-5 pt-1"
            }
          >
            Seat_Allotment
          </NavLink>

          {/* Navigates to the login form for Allot the Seat */}
          <NavLink
            to="/login-for-seat"
            className={({ isActive }) =>
              isActive ? "pr-5 pt-1 font-bold text-blue-600" : "pr-5 pt-1"
            }
          >
            Allot_the_Seat
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const users = [
    { id: "user1", password: "pass123" },
    { id: "user2", password: "pass456" },
    { id: "user3", password: "pass789" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedUser = users.find((user) => user.id === userId);

    if (selectedUser && selectedUser.password === password) {
      navigate("/Allot-Seat(for_mangment)"); // Navigate to the management form page if the credentials are correct
    } else {
      alert("Invalid user ID or password.");
    }
  };

  return (
    <div className="p-4 border-gray-300  w-full flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:w-1/3 border-solid border-3 m-3 p-5  rounded-lg ">
        <label>
          Select User ID:
          <select
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full h-10 px-4 py-2 border border-gray-300"//
          > 
            <option value="" disabled>
              Select User ID
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.id}
              </option>
            ))}
          </select>
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 px-4 py-2 border border-gray-300"
            placeholder="Enter Password"
            required
          />
        </label>

        <button type="submit" className="w-full h-10 bg-blue-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
