import axios from "axios";

const checkAuthentication = async () => {
  try {
    const response = await axios.get("http://localhost:5001/api/auth/users/protected-route", {
      withCredentials: true,  // Ensures that cookies are sent along with the request
    });

    console.log("response kk",response)

    // If authentication is successful, the user object should be returned
    return { isAuthenticated: true, user: response.data.user };
  } catch (error) {
    console.error("Authentication check failed:", error);
    console.log("response kk")

    // Log the response if it's available
    if (error.response) {
      console.error("Error response:", error.response);
      console.error("Error status:", error.response.status);
    }

    // Return false if authentication failed
    return { isAuthenticated: false };
  }
};

export default checkAuthentication;
