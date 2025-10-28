import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;
const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["History", "history"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const navbar = document.getElementById("navigation");
    const offset = navbar ? navbar.offsetHeight + 24 : 80; // 24px extra spacing
    if (section === "about") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const top = rect.top + scrollTop - offset;
      window.scrollTo({ top, left: 0, behavior: "smooth" });
    }
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon />
        Menu
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar
          className="navigation-bar"
          style={{ justifyContent: "space-between", gap: 0 }}
        >
          {/* Left: Name */}
          <div
            className="nav-left"
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: 700,
              fontSize: "1.2em",
              color: "var(--accent)",
            }}
          >
            Caio Caminha
          </div>
          {/* Center: Nav Items with separators */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 0,
            }}
          >
            {navItems.map((item, idx) => (
              <React.Fragment key={item[0]}>
                <Button
                  onClick={() => scrollToSection(item[1])}
                  sx={{
                    color: item[0] === "Contact" ? "#fff" : "var(--accent)",
                    fontWeight: item[0] === "About" ? 700 : 500,
                    background:
                      item[0] === "Contact" ? "var(--accent-strong)" : "none",
                    borderRadius: item[0] === "Contact" ? "8px" : "6px",
                    px: item[0] === "Contact" ? 2 : 1,
                    py: item[0] === "Contact" ? 1 : 0,
                    boxShadow:
                      item[0] === "Contact"
                        ? "0 2px 12px rgba(80,30,150,0.18)"
                        : "none",
                  }}
                >
                  {item[0]}
                </Button>
                {idx < navItems.length - 1 && (
                  <span
                    className="nav-separator"
                    style={{
                      margin: "0 8px",
                      color: "var(--accent-strong)",
                      fontSize: "1.2em",
                    }}
                  >
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </Box>
          {/* Right: Dark mode toggle */}
          <div
            className="nav-right"
            style={{ display: "flex", alignItems: "center" }}
          >
            {mode === "dark" ? (
              <LightModeIcon
                onClick={() => modeChange()}
                style={{
                  cursor: "pointer",
                  fontSize: "1.5em",
                  color: "#fff",
                }}
              />
            ) : (
              <DarkModeIcon
                onClick={() => modeChange()}
                style={{
                  cursor: "pointer",
                  fontSize: "1.5em",
                  color: "var(--accent)",
                }}
              />
            )}
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
