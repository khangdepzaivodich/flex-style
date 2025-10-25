import React from "react";
import PositionsPage from "./PositionsPage";
import { getAccessToken } from "@/lib/userInfo";
async function getQL() {
  const token = await getAccessToken();
  console.log("token", token);
  try {
    const res = await fetch("http://localhost:8080/api/taikhoan/ql", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("res ql", res);
    return res.json();
  } catch (error) {
    console.log("error", error);
    return null;
  }
}

async function page() {
  const data = await getQL();
  console.log("data", data);
  return <PositionsPage />;
}

export default page;
