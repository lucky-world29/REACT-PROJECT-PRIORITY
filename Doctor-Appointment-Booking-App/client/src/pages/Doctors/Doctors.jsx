import { useEffect, useState } from "react";

import DoctorCard from "../../components/DoctorCard/DoctorCard";
import { supabase } from "../../services/supabaseClient";

function Doctors() {
    // ================================
    // STATE
    // ================================

    const [doctors, setDoctors] = useState([]);

    const [search, setSearch] = useState("");

    const [specialization, setSpecialization] =
        useState("All");

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    // ================================
    // FETCH DOCTORS FROM SUPABASE
    // ================================

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        setLoading(true);
        setError("");

        const { data, error } = await supabase
            .from("doctors")
            .select("*")
            .order("id", { ascending: true });

        if (error) {
            console.error(
                "Error fetching doctors:",
                error
            );

            setError(
                "Unable to load doctors. Please try again."
            );

            setDoctors([]);
        } else {
            setDoctors(data || []);
        }

        setLoading(false);
    };


    // ================================
    // SPECIALIZATIONS
    // ================================

    const specializations = [
        "All",
        ...new Set(
            doctors.map(
                (doctor) => doctor.specialization
            )
        ),
    ];


    // ================================
    // SEARCH + FILTER
    // ================================

    const filteredDoctors = doctors.filter(
        (doctor) => {
            const searchText =
                search.toLowerCase();

            const matchesSearch =
                doctor.name
                    .toLowerCase()
                    .includes(searchText) ||

                doctor.specialization
                    .toLowerCase()
                    .includes(searchText);

            const matchesSpecialization =
                specialization === "All" ||
                doctor.specialization ===
                    specialization;

            return (
                matchesSearch &&
                matchesSpecialization
            );
        }
    );


    // ================================
    // UI
    // ================================

    return (
        <div className="doctors-page">

            {/* =================================
                HERO SECTION
            ================================== */}

            <section className="doctors-hero">
                <div className="container">

                    <div className="doctors-hero-content">

                        <div>

                            <span className="hero-badge">
                                ✨ Trusted Healthcare Professionals
                            </span>

                            <h1>
                                Find the Right Doctor
                                <span>
                                    {" "}for Your Health
                                </span>
                            </h1>

                            <p>
                                Browse our network of
                                experienced doctors and
                                find the specialist who
                                fits your healthcare needs.
                            </p>

                        </div>

                        <div className="doctor-hero-icon">
                            🩺
                        </div>

                    </div>

                </div>
            </section>


            {/* =================================
                SEARCH & FILTER
            ================================== */}

            <section className="doctor-search-section">

                <div className="container">

                    <div className="doctor-search-box">

                        <div className="search-input-wrapper">

                            <span className="search-icon">
                                🔍
                            </span>

                            <input
                                type="text"
                                placeholder="Search doctor or specialization..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(
                                        e.target.value
                                    )
                                }
                            />

                        </div>


                        <div className="filter-wrapper">

                            <span>
                                Specialization
                            </span>

                            <select
                                value={specialization}
                                onChange={(e) =>
                                    setSpecialization(
                                        e.target.value
                                    )
                                }
                            >

                                {specializations.map(
                                    (speciality) => (
                                        <option
                                            key={speciality}
                                            value={speciality}
                                        >
                                            {speciality}
                                        </option>
                                    )
                                )}

                            </select>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================
                DOCTORS LIST
            ================================== */}

            <section className="doctors-list-section">

                <div className="container">

                    <div className="doctors-section-header">

                        <div>

                            <h2>
                                Our Doctors
                            </h2>

                            <p>
                                {loading
                                    ? "Loading doctors..."
                                    : `${filteredDoctors.length} doctors available`
                                }
                            </p>

                        </div>

                    </div>


                    {/* ==========================
                        LOADING
                    =========================== */}

                    {loading && (
                        <div className="no-doctors">

                            <div className="no-doctors-icon">
                                🩺
                            </div>

                            <h3>
                                Loading doctors...
                            </h3>

                            <p>
                                Please wait while we
                                load our doctors.
                            </p>

                        </div>
                    )}


                    {/* ==========================
                        ERROR
                    =========================== */}

                    {!loading && error && (
                        <div className="no-doctors">

                            <div className="no-doctors-icon">
                                ⚠️
                            </div>

                            <h3>
                                Something went wrong
                            </h3>

                            <p>
                                {error}
                            </p>

                            <button
                                onClick={fetchDoctors}
                            >
                                Try Again
                            </button>

                        </div>
                    )}


                    {/* ==========================
                        DOCTORS
                    =========================== */}

                    {!loading &&
                        !error &&
                        filteredDoctors.length > 0 && (

                            <div className="doctors-grid">

                                {filteredDoctors.map(
                                    (doctor) => (

                                        <DoctorCard
                                            key={doctor.id}
                                            doctor={doctor}
                                        />

                                    )
                                )}

                            </div>
                        )}


                    {/* ==========================
                        NO DOCTORS FOUND
                    =========================== */}

                    {!loading &&
                        !error &&
                        filteredDoctors.length === 0 && (

                            <div className="no-doctors">

                                <div className="no-doctors-icon">
                                    🔍
                                </div>

                                <h3>
                                    No doctors found
                                </h3>

                                <p>
                                    Try searching with a
                                    different doctor name
                                    or specialization.
                                </p>

                                <button
                                    onClick={() => {
                                        setSearch("");
                                        setSpecialization(
                                            "All"
                                        );
                                    }}
                                >
                                    Clear Filters
                                </button>

                            </div>
                        )}

                </div>

            </section>

        </div>
    );
}

export default Doctors;