import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset previous errors
    setIsLoading(true); // Set loading state

    console.log("Form Data Sent to Backend:", formData); // Debugging

    try {
      const response = await fetch("http://localhost:5002/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        console.log("User Data:", data); // Debug user data on success
        // Perform additional actions here, e.g., redirect or store token
      } else {
        console.error("API Error:", data); // Log API response for debugging
        setError(data.message || "Failed to login. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error); // Log unexpected errors
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
      <div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email} // Maintain controlled input
          required
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password} // Maintain controlled input
          required
        />
      </div>
      <div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </div>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </form>
  );
};

export default Login;
