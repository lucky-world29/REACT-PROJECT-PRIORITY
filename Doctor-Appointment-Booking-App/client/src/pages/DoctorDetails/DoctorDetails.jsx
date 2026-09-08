import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { supabase } from "../../services/supabaseClient";

import "./DoctorDetails.css";

function DoctorDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchDoctor();
    }, [id]);

    const fetchDoctor = async () => {
        try {
            setLoading(true);
            setError("");

            const { data, error } = await supabase
                .from("doctors")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                throw error;
            }

            setDoctor(data);
        } catch (error) {
            console.error("Error fetching doctor:", error);
            setError("Unable to load doctor details.");
        } finally {
            setLoading(false);
        }
    };

    const handleBookAppointment = () => {
        navigate(`/book/${doctor.id}`);
    };

    if (loading) {
        return (
            <div className="doctor-details-page">
                <div className="doctor-details-loading">
                    Loading doctor details...
                </div>
            </div>
        );
    }

    if (error || !doctor) {
        return (
            <div className="doctor-details-page">
                <div className="doctor-details-error">
                    ⚠️ {error || "Doctor not found."}
                </div>
            </div>
        );
    }

    return (
        <div className="doctor-details-page">

            <div className="doctor-details-container">

                {/* BACK BUTTON */}

                <button
                    className="doctor-back-button"
                    onClick={() => navigate("/doctors")}
                >
                    ← Back to Doctors
                </button>


                {/* DOCTOR CARD */}

                <div className="doctor-details-card">

                    {/* IMAGE */}

                    <div className="doctor-details-image-section">

                        {doctor.image_url ? (
                            <img
                                src={doctor.image_url}
                                alt={doctor.name}
                                className="doctor-details-image"
                            />
                        ) : (
                            <div className="doctor-details-placeholder">
                                👨‍⚕️
                            </div>
                        )}

                    </div>


                    {/* INFORMATION */}

                    <div className="doctor-details-info">

                        <span className="doctor-details-specialization">
                            {doctor.specialization}
                        </span>

                        <h1>{doctor.name}</h1>

                        <div className="doctor-details-rating">
                            ⭐ {doctor.rating || "N/A"}
                        </div>


                        {/* DETAILS */}

                        <div className="doctor-details-fields">

                            <div className="doctor-detail-item">
                                <span>Experience</span>

                                <strong>
                                    {doctor.experience || 0} years
                                </strong>
                            </div>


                            <div className="doctor-detail-item">
                                <span>Location</span>

                                <strong>
                                    {doctor.location || "Not available"}
                                </strong>
                            </div>


                            <div className="doctor-detail-item">
                                <span>Phone</span>

                                <strong>
                                    {doctor.phone || "Not available"}
                                </strong>
                            </div>


                            <div className="doctor-detail-item">
                                <span>Email</span>

                                <strong>
                                    {doctor.email || "Not available"}
                                </strong>
                            </div>

                        </div>


                        {/* BOOK APPOINTMENT */}

                        <button
                            type="button"
                            className="doctor-book-button"
                            onClick={handleBookAppointment}
                        >
                            Book Appointment →
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default DoctorDetails;