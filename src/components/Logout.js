import React from "react";

const Logout = () => {
  const handleLogout = () => {
    // Perform logout logic here, such as clearing tokens or user data
    console.log("Logged out");
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <button
      className="logout-btn"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
