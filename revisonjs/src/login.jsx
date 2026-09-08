import React, { useState } from "react";
import "./App.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log("Login Successful:", formData);
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Welcome Back</h2>

        {isSubmitted && (
          <div className="success-alert">
            Logged in successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit} className="form">
          {/* Email Field */}
          <div className="input-group">
            <label className="label">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. user@example.com"
              className={`input ${errors.email ? "input-error" : ""}`}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div className="input-group">
            <label className="label">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`input ${errors.password ? "input-error" : ""}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-btn"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="form-actions">
            <a href="#forgot" className="forgot-link">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
