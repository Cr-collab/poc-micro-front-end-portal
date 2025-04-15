import React, { useEffect, useRef, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { DashboardLayout } from "../layout/MainLoyout";
import { ReactPage } from "../React";
import { AngularPage } from "../pages/home";
import { AngularPage2 } from "../pages/home2";
import { Box, Button, styled } from "@mui/material";

const AngularRoutesContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const AngularRouteManager = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("🚀 ~ AngularRouteManager ~ currentPath:", currentPath)

  return (
    <AngularRoutesContainer>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: currentPath === "/angular" ? "block" : "none",
        }}
      >
        <AngularPage />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: currentPath === "/angular2" ? "block" : "none",
        }}
      >
        <AngularPage2 />
      </Box>
    </AngularRoutesContainer>
  );
};

export function AppRouter() {
  return (
    <DashboardLayout>
      <Box
        sx={{
          border: "1px solid red",
          width: "100%",
          height: "100%",
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/react" replace />} />

          {/* Cache the content of these routes */}
          <Route path="/*" element={<AngularRouteManager />} />

          <Route path="/react" element={<ReactPage />} />
        </Routes>
      </Box>
    </DashboardLayout>
  );
}
