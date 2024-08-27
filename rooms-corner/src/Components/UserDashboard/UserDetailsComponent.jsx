import React, { useState } from "react";
import { getUserById } from "../../API/Services/UserService/RestrictedApi/GetUserById";

const UserDetailsComponent = () => {
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await getUserById(userId);
      console.log("user info fetch success:", response);
    } catch (error) {
      console.log("Invalid userId:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button type="submit">Show user info</button>
    </form>
  );
};

export default UserDetailsComponent;
