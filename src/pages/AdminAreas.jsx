import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminLinks from "../components/AdminLinks";

const AdminAreas = () => {
  return (
    <>
      <AdminHeader />
      <AdminLinks />
      <div className="adminarea">
        <div className="adminarea-container"></div>
      </div>
    </>
  );
};

export default AdminAreas;
