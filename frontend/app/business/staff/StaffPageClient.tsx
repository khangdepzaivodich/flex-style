"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import StaffCard from "@/components/business/StaffCard";
import { Button } from "@/components/ui/button";
import StaffPopup from "@/components/business/StaffPopup";
import { useEffect, useState } from "react";
import axios from "axios";
import StaffMember from "@/interfaces/staffMember";
export default function StaffPageClient({
  staffData,
  sessionData,
}: {
  staffData: StaffMember[];
  sessionData: any;
}) {
  const [open, setOpen] = useState(false);
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [editing, setEditing] = useState<StaffMember | null>(null);
  const [search, setSearch] = useState("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  // Save handler
  const handleSave = async (data: StaffMember | undefined) => {
    if (!data) {
      console.error("No data to save");
      return;
    }
    if (editing) {
      // Editing existing staff
      setStaff((prev) =>
        prev.map((p) => (p.MaTK === data.MaTK ? { ...p, ...data } : p))
      );
    } else {
      // Adding new staff
      console.log("Adding new staff:", data);
      try {
        const res = await axios.post(
          "http://localhost:8080/api/nv/dangky",
          {
            DisplayName: data.DisplayName,
            Email: data.Email,
            Username: data.Email.split("@")[0],
            MatKhau: data.Password,
            VAITRO: data.VAITRO,
            Status: data.Status,
          },
          {
            headers: {
              Authorization: `Bearer ${sessionData.access_token}`,
            },
          }
        );
        console.log("Registered new staff:", res.data);
        setStaff((prev) => [...prev, data]);
      } catch (error) {
        console.error("Error registering new staff:", error);
        setErrorMsg("Lỗi khi thêm nhân viên mới.");
      }
    }
    setOpen(false);
    setEditing(null);
  };

  // Edit handler
  const handleEdit = (staffMember: StaffMember) => {
    setEditing(staffMember);
    setOpen(true);
  };

  // Fetch staff from API
  useEffect(() => {
    setStaff(staffData);
  }, [staffData]);

  // Fetch staff from API on mount
  useEffect(() => {
    return () => {
      setStaff([]);
    };
  }, []);

  // Filter staff by search term
  const filteredStaff = staff.filter((s) =>
    (s.DisplayName ?? s.Username ?? s.Email)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="space-y-6">
      {/* Search bar and Add button */}
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Tìm kiếm..."
            className="pl-10 bg-muted border-0 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button
          onClick={() => {
            setEditing(null);
            setOpen(true);
          }}
        >
          Thêm nhân viên
        </Button>
      </div>

      {/* Danh sách nhân viên */}
      <div className="grid grid-cols-1 gap-4">
        {filteredStaff.length > 0 ? (
          filteredStaff.map((s) => (
            <StaffCard
              key={s.MaTK}
              id={s.MaTK}
              name={s.DisplayName}
              userName={s.Username}
              email={s.Email}
              position={s.VAITRO}
              status={s.Status === "ACTIVE" ? "ACTIVE" : "INACTIVE"}
              onEdit={() => handleEdit(s)}
            />
          ))
        ) : (
          <p className="text-muted-foreground text-center py-6">
            Không có nhân viên nào.
          </p>
        )}
      </div>

      {/* Popup for add/edit */}
      <StaffPopup
        open={open}
        onClose={() => {
          setOpen(false);
          setEditing(null);
        }}
        onSave={handleSave}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
        initialData={editing ?? undefined}
      />
    </main>
  );
}
