"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { createClient } from "@/lib/supabase/client";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: string[];
  fallbackUrl?: string;
}

export default function ProtectedRoute({
  children,
  requiredRoles = [],
  fallbackUrl = "/login",
}: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Get session from Supabase
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error || !session) {
          router.replace(fallbackUrl);
          return;
        }

        const user = session.user;
        const accessToken = session.access_token;
        if (!accessToken) {
          router.replace(fallbackUrl);
          return;
        }

        // Fetch user role from backend
        const res = await axios.get(
          `http://localhost:8080/api/taikhoan/${user.id}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        const role = res.data?.VAITRO;

        // Role validation logic
        if (!requiredRoles.length || requiredRoles.includes(role)) {
          setAuthorized(true);
        } else {
          router.replace("/unauthorized");
        }
      } catch (err) {
        console.error("Permission not allowed:", err);

        if (axios.isAxiosError(err)) {
          const status = err.response?.status;
          if (status === 401) {
            router.replace(fallbackUrl);
            return;
          }
          if (status === 403 || status === 500) {
            router.replace("/unauthorized");
            return;
          }
        }

        router.replace("/unauthorized");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, fallbackUrl, requiredRoles]);

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
