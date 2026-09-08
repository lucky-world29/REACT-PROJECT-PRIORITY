import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { supabase } from "../../services/supabaseClient";

import "./Register.css";

function Register() {
    const navigate = useNavigate();

    // ================================
    // STATE
    // ================================

    const [showPassword, setShowPassword] =
        useState(false);

    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [fullName, setFullName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [phone, setPhone] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [confirmPassword, setConfirmPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    // ================================
    // REGISTER USER
    // ================================

    const handleRegister = async (e) => {
        e.preventDefault();

        setError("");

        // Basic validation
        if (
            !fullName ||
            !email ||
            !phone ||
            !password ||
            !confirmPassword
        ) {
            setError(
                "Please fill all the required fields."
            );
            return;
        }

        // Password match
        if (password !== confirmPassword) {
            setError(
                "Passwords do not match."
            );
            return;
        }

        // Password length
        if (password.length < 6) {
            setError(
                "Password must be at least 6 characters."
            );
            return;
        }

        try {
            setLoading(true);

            // ================================
            // SUPABASE SIGN UP
            // ================================

            const { data, error } =
                await supabase.auth.signUp({
                    email: email.trim(),
                    password: password,
                    options: {
                        data: {
                            full_name: fullName.trim(),
                            phone: phone.trim(),
                        },
                    },
                });

            if (error) {
                throw error;
            }

            console.log(
                "Registration successful:",
                data
            );

            // ================================
            // SUCCESS
            // ================================

            alert(
                "Account created successfully! 🎉\n\n" +
                "Please check your email to confirm your account."
            );

            // Go to login page
            navigate("/login");

        } catch (error) {

            console.error(
                "Registration error:",
                error
            );

            setError(
                error.message ||
                "Registration failed. Please try again."
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-page">

            {/* Background Effects */}

            <div className="register-orb register-orb-1"></div>
            <div className="register-orb register-orb-2"></div>
            <div className="register-orb register-orb-3"></div>


            {/* Floating Medical Icons */}

            <div className="register-floating-icon icon-1">
                ✚
            </div>

            <div className="register-floating-icon icon-2">
                🩺
            </div>

            <div className="register-floating-icon icon-3">
                ♡
            </div>

            <div className="register-floating-icon icon-4">
                ⚕
            </div>


            <div className="container register-container">

                {/* =================================
                    LEFT SECTION
                ================================== */}

                <div className="register-intro">

                    <span className="register-label">
                        JOIN OUR COMMUNITY
                    </span>

                    <h1>
                        Your Health.
                        <br />
                        <strong>Your Journey.</strong>
                    </h1>

                    <p>
                        Create your account and take
                        the first step toward easier,
                        smarter and more convenient
                        healthcare.
                    </p>


                    <div className="register-benefits">

                        <div className="register-benefit">

                            <div className="benefit-icon">
                                ✓
                            </div>

                            <div>
                                <strong>
                                    Easy Appointment Booking
                                </strong>

                                <span>
                                    Book your doctor in just
                                    a few clicks.
                                </span>
                            </div>

                        </div>


                        <div className="register-benefit">

                            <div className="benefit-icon">
                                ✓
                            </div>

                            <div>
                                <strong>
                                    Trusted Doctors
                                </strong>

                                <span>
                                    Connect with experienced
                                    healthcare professionals.
                                </span>
                            </div>

                        </div>


                        <div className="register-benefit">

                            <div className="benefit-icon">
                                ✓
                            </div>

                            <div>
                                <strong>
                                    Manage Your Health
                                </strong>

                                <span>
                                    Keep your appointments
                                    organized in one place.
                                </span>
                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================
                    REGISTER CARD
                ================================== */}

                <div className="register-card">

                    <div className="register-card-header">

                        <div className="register-user-icon">
                            👤
                        </div>

                        <div>

                            <span>
                                GET STARTED
                            </span>

                            <h2>
                                Create Account
                            </h2>

                            <p>
                                Join DoctorApp today.
                            </p>

                        </div>

                    </div>


                    <form onSubmit={handleRegister}>

                        {/* Full Name */}

                        <div className="register-field">

                            <label>
                                Full Name <span>*</span>
                            </label>

                            <div className="register-input-wrapper">

                                <span className="input-icon">
                                    👤
                                </span>

                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) =>
                                        setFullName(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Enter your full name"
                                />

                            </div>

                        </div>


                        {/* Email */}

                        <div className="register-field">

                            <label>
                                Email Address <span>*</span>
                            </label>

                            <div className="register-input-wrapper">

                                <span className="input-icon">
                                    ✉
                                </span>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(
                                            e.target.value
                                        )
                                    }
                                    placeholder="example@email.com"
                                />

                            </div>

                        </div>


                        {/* Phone */}

                        <div className="register-field">

                            <label>
                                Phone Number <span>*</span>
                            </label>

                            <div className="register-input-wrapper">

                                <span className="input-icon">
                                    📱
                                </span>

                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(
                                            e.target.value
                                        )
                                    }
                                    placeholder="+91 98765 43210"
                                />

                            </div>

                        </div>


                        {/* Password */}

                        <div className="register-field">

                            <label>
                                Password <span>*</span>
                            </label>

                            <div className="register-input-wrapper">

                                <span className="input-icon">
                                    🔒
                                </span>

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Create a password"
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword
                                        ? "🙈"
                                        : "👁"}
                                </button>

                            </div>

                        </div>


                        {/* Confirm Password */}

                        <div className="register-field">

                            <label>
                                Confirm Password <span>*</span>
                            </label>

                            <div className="register-input-wrapper">

                                <span className="input-icon">
                                    🔐
                                </span>

                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Confirm your password"
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    aria-label="Toggle confirm password visibility"
                                >
                                    {showConfirmPassword
                                        ? "🙈"
                                        : "👁"}
                                </button>

                            </div>

                        </div>


                        {/* Error Message */}

                        {error && (
                            <div className="register-error">
                                ⚠️ {error}
                            </div>
                        )}


                        {/* Terms */}

                        <label className="terms-check">

                            <input
                                type="checkbox"
                                required
                            />

                            <span>
                                I agree to the{" "}

                                <Link to="/terms">
                                    Terms & Conditions
                                </Link>

                                {" "}and{" "}

                                <Link to="/privacy-policy">
                                    Privacy Policy
                                </Link>
                                .
                            </span>

                        </label>


                        {/* Register Button */}

                        <button
                            type="submit"
                            className="register-button"
                            disabled={loading}
                        >

                            <span>
                                {loading
                                    ? "Creating Account..."
                                    : "Create My Account"}
                            </span>

                            <strong>
                                {loading
                                    ? "..."
                                    : "→"}
                            </strong>

                        </button>

                    </form>


                    {/* Login Link */}

                    <div className="already-account">

                        <span>
                            Already have an account?
                        </span>

                        <Link to="/login">
                            Login here →
                        </Link>

                    </div>


                    <div className="register-security">
                        🔒 Your personal information is
                        secure and protected.
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;