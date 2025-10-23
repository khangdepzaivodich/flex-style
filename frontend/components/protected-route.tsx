"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { createClient } from "@/lib/supabase/client";

interface ProtectedRouteProps {
  children: React.ReactNode;
  blockedRoles?: string[];
}

export default function ProtectedRoute({
  children,
  blockedRoles = [],
}: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if user is logged in
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (!session) {
          setAuthorized(true);
          return;
        }

        const user = session.user;
        console.log("Auth User info:", user);
        const accessToken = session.access_token;

        // Fetch user info from backend
        const res = await axios.get(
          `http://localhost:8080/api/taikhoan/${user.id}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        const role = res.data.data.VAITRO;
        console.log("User role:", role);

        // Allow if not in blockedRoles
        if (!blockedRoles.includes(role)) {
          setAuthorized(true);
        } else {
          router.replace("/unauthorized");
        }
      } catch (err) {
        console.error("Error verifying access:", err);
        setAuthorized(true); // allow if error fetching user
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router, blockedRoles, supabase]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary" />
      </div>
    );
  }

  if (!authorized) return null;

  return <>{children}</>;
}
