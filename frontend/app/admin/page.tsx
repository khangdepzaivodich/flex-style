import React from "react";
import PositionsPage from "./PositionsPage";
import { getAccessToken } from "@/lib/userInfo";
async function getQL() {
  const token = await getAccessToken();

  try {
    const res = await fetch("http://localhost:8080/api/ql", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.json();
  } catch (error) {
    console.log("error", error);
    return null;
  }
}

async function getNVVH() {
  const token = await getAccessToken();

  try {
    const res = await fetch("http://localhost:8080/api/nv", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.json();
  } catch (error) {
    console.log("error", error);
    return null;
  }
}

async function page() {
  const ql = await getQL();
  const nvvh = await getNVVH();
  console.log("nvvh data:", nvvh);
  const data = {
    data: [...(ql?.data || []), ...(nvvh?.data || [])],
  };
  return <PositionsPage initData={data.data} />;
}

export default page;
