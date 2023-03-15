import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContentDataManagement from "../../components/DashBoard/ContentDB/ContentDataManagement";
import { getAllDataManagement } from "../../store/Dashboard/DataManagement";

const DashboardDataManagement = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getAllDataManagement());
  },[])

  return (
    <ContentDataManagement />
  );
};

export default DashboardDataManagement;
