// import React from 'react'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("users");
    localStorage.removeItem("LoggedInUsers");
    // console.log(local)
    toast.success("Log Out Successfully");
    navigate("/");
  };
  return (
    <div>
      <button
        type="button"
        className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition cursor-pointer"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
