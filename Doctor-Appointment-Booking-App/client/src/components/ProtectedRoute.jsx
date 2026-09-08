import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { supabase } from "../services/supabaseClient";

function ProtectedRoute({ children }) {
    const location = useLocation();

    const [session, setSession] = useState(null);

    const [loading, setLoading] = useState(true);


    // =========================================
    // CHECK SUPABASE SESSION
    // =========================================

    useEffect(() => {
        let mounted = true;

        const getSession = async () => {
            const {
                data,
                error,
            } = await supabase.auth.getSession();

            if (error) {
                console.error(
                    "Error getting session:",
                    error
                );
            }

            if (mounted) {
                setSession(data?.session || null);
                setLoading(false);
            }
        };

        getSession();


        // =========================================
        // LISTEN FOR LOGIN / LOGOUT CHANGES
        // =========================================

        const {
            data: authListener,
        } = supabase.auth.onAuthStateChange(
            (_event, session) => {

                if (mounted) {
                    setSession(session);
                }
            }
        );


        return () => {
            mounted = false;

            authListener?.subscription?.unsubscribe();
        };
    }, []);


    // =========================================
    // LOADING
    // =========================================

    if (loading) {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                }}
            >
                Checking authentication...
            </div>
        );
    }


    // =========================================
    // NOT LOGGED IN
    // =========================================

    if (!session) {
        return (
            <Navigate
                to="/login"
                replace
                state={{
                    from: location.pathname,
                }}
            />
        );
    }


    // =========================================
    // LOGGED IN
    // =========================================

    return children;
}

export default ProtectedRoute;