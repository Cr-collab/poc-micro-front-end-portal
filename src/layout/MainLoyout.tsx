import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Drawer,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import { useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import { Dashboard as DashboardIcon } from "@mui/icons-material";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  const theme = useTheme();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Box
      component="div"
      className={className}
      sx={{
        width: 256,
        height: "100%",
        border: "1px solid blue",
        bgcolor: "background.paper",
        borderRight: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 64,
          px: 3,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: 32, width: "auto" }}
          />
        </Link>
      </Box>

      <Box sx={{ flex: 1, py: 2, overflowY: "auto" }}>
        <List component="nav" disablePadding>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/react"
              selected={isActive("/react")}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 0,
                "&.Mui-selected": {
                  bgcolor: "#FFF8F0",
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  "&:hover": {
                    bgcolor: "#FFF8F0",
                  },
                  "& .MuiListItemIcon-root": {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="React" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/angular"
              selected={isActive("/angular")}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 0,
                "&.Mui-selected": {
                  bgcolor: "#FFF8F0",
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  "&:hover": {
                    bgcolor: "#FFF8F0",
                  },
                  "& .MuiListItemIcon-root": {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {/* <BarChartIcon fontSize="small" /> */}
              </ListItemIcon>
              <ListItemText primary="Angular" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/angular2"
              selected={isActive("/angular2")}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 0,
                "&.Mui-selected": {
                  bgcolor: "#FFF8F0",
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  "&:hover": {
                    bgcolor: "#FFF8F0",
                  },
                  "& .MuiListItemIcon-root": {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {/* <BarChartIcon fontSize="small" /> */}
              </ListItemIcon>
              <ListItemText primary="Angular 2" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      

      <Divider />
      <Box sx={{ p: 2 }}>
        <div className="text-xs text-gray-500">v1.0.0</div>
      </Box>
    </Box>
  );
}

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={1}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "background.paper",
        }}
      >
        <Toolbar sx={{ height: 64, px: { xs: 2, md: 3 } }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Link
                to="/"
                style={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  style={{ height: 32, width: "auto" }}
                />
              </Link>
            </Box>
          )}

          {title && (
            <Box sx={{ ml: isMobile ? "auto" : 0, mr: "auto" }}>
              <Typography variant="h6" fontWeight={500}>
                {title}
              </Typography>
            </Box>
          )}

          <Box
            sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: "grey.300",
                color: "grey.700",
              }}
            >
              AD
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 256,
            borderRight: "1px solid",
            borderColor: "divider",
          },
        }}
      >
        <Sidebar />
      </Drawer>
    </>
  );
}

export function DashboardLayout() {
  useEffect(() => {
    localStorage.setItem("Teste", "Local storage compartilhado");
  }, []);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <Header title="Dashboard" />
      <Box sx={{ display: "flex", flex: 1, overflow: "auto" }}>
        <Box
          component="aside"
          sx={{
            width: { xs: 0, md: 256 },
            flexShrink: 0,
            display: { xs: "none", md: "block" },
            overflow: "hidden",
            height: "calc(100vh - 64px)",
          }}
        >
          <Sidebar />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: "#FAFAFA",
            minWidth: 0, // Previne problemas de overflow
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
