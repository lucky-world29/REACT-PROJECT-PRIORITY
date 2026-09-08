import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import "./Profile.css";

function Profile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            setLoading(true);
            setError("");

            const {
                data: { user },
                error: userError,
            } = await supabase.auth.getUser();

            if (userError) {
                throw userError;
            }

            if (!user) {
                setError("User is not logged in.");
                return;
            }

            const { data, error: profileError } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", user.id)
                .single();

            if (profileError) {
                throw profileError;
            }

            setProfile(data);
        } catch (error) {
            console.error("Profile error:", error);
            setError(
                error.message || "Unable to load your profile."
            );
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="profile-page">
                <div className="profile-loading">
                    Loading your profile...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="profile-page">
                <div className="profile-error">
                    ⚠️ {error}
                </div>
            </div>
        );
    }

    return (
        <div className="profile-page">
            <div className="profile-container">

                <div className="profile-header">
                    <div className="profile-avatar">
                        👤
                    </div>

                    <div>
                        <h1>My Profile</h1>
                        <p>
                            Manage your personal information
                        </p>
                    </div>
                </div>

                <div className="profile-card">

                    <div className="profile-field">
                        <span className="profile-label">
                            Full Name
                        </span>

                        <span className="profile-value">
                            {profile?.full_name || "Not available"}
                        </span>
                    </div>

                    <div className="profile-field">
                        <span className="profile-label">
                            Phone
                        </span>

                        <span className="profile-value">
                            {profile?.phone || "Not available"}
                        </span>
                    </div>

                    <div className="profile-field">
                        <span className="profile-label">
                            Email
                        </span>

                        <span className="profile-value">
                            {profile?.email || "Your login email"}
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Profile;