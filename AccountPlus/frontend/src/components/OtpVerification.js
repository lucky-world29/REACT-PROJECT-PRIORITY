  // import React, { useState } from "react";
  // import API from "../api";

  // const OtpVerification = () => {
  //   const [username, setUsername] = useState("");
  //   const [otp, setOtp] = useState("");
    
  //   const handleVerifyOtp = async () => {
  //     try {
  //       console.log("Submitted Username:", username);
  //       console.log("Submitted OTP:", otp);

  //       const response = await API.post("/auth/verify-otp", {  username,otp });
  //       alert(response.data.message);
  //       // Redirect to login or dashboard on success
  //       window.location.href = "/login";
  //     } catch (error) {
  //       alert(error.response?.data?.message || "Error verifying OTP.");
  //     }
  //   };

  //   return (
  //     <div className="container">
  //       <h2>Verify OTP</h2>
  //       <div className="form-group">
  //         <label htmlFor="username">Username</label>
  //         <input
  //           type="text"
  //           id="username"
  //           className="form-control"
  //           placeholder="Enter your username"
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="otp">OTP</label>
  //         <input
  //           type="text"
  //           id="otp"
  //           className="form-control"
  //           placeholder="Enter OTP"
  //           value={otp}
  //           onChange={(e) => setOtp(e.target.value)}
  //         />
  //       </div>
  //       <button onClick={handleVerifyOtp} className="btn btn-primary mt-3">
  //         Verify OTP
  //       </button>
  //     </div>
  //   );
  // };

  // export default OtpVerification;


  import React, { useState } from "react";
  import API from "../api";
  import { useNavigate } from "react-router-dom";
  
  const OtpVerification = () => {
    const [username, setUsername] = useState("");
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleVerifyOtp = async () => {
      console.log({ username, otp });
      setIsLoading(true);
      setMessage(""); // Clear previous messages
  
      if (!username.trim() || !otp.trim()) {
        setMessage("Username and OTP are required.");
        setIsLoading(false);
        return;
      }
  
      if (!/^\d{6}$/.test(otp)) { // Assuming OTP is 6 digits
        setMessage("Please enter a valid 6-digit OTP.");
        setIsLoading(false);
        return;
      }
  
      try {
        const response = await API.post("/auth/verify-otp", {
          username,
          otp: parseInt(otp, 10),
        });
        console.log("Response:", response.data);
  
        if (response.data.message === "OTP verified successfully") {
          setMessage("OTP Verified Successfully! Redirecting to login...");
          setTimeout(() => navigate("/login"), 1000);
        } else {
          setMessage(response.data.message || "Invalid OTP. Please try again.");
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
  
        if (error.response?.data?.message) {
          setMessage(error.response.data.message);
        } else {
          setMessage("An error occurred. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="container">
        <h2>OTP Verification</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="otp">Enter OTP</label>
          <input
            type="text"
            id="otp"
            className="form-control"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
          />
        </div>
        <button
          onClick={handleVerifyOtp}
          className="btn btn-primary mt-3"
          disabled={isLoading}
        >
          {isLoading ? "Verifying..." : "Verify OTP"}
        </button>
        {message && (
          <p
            style={{
              color: message.includes("Success") ? "green" : "red",
              marginTop: "10px",
            }}
          >
            {message}
          </p>
        )}
      </div>
    );
  };
  
  export default OtpVerification;
  