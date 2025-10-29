import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import "../assets/styles/LanguageSwitch.scss";
import { useLanguage } from "../hooks/useTranslation";
import { translations } from "../translations/translations";
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

interface NavigationProps {
  parentToChild: {
    mode: "light" | "dark";
  };
  modeChange: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  parentToChild,
  modeChange,
}) => {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navItems: [string, string][] = [
    [t.about, "about"],
    [t.experience, "experience"],
    [t.projects, "projects"],
    [t.education, "education"],
    [t.contact, "contact"],
  ];

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        setScrolled(window.scrollY > navbar.clientHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const navbar = document.getElementById("navigation");
    const offset = navbar ? navbar.offsetHeight + 24 : 80;
    if (section === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
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
        {navItems.map(([label, section]) => (
          <ListItem key={section} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(section)}
            >
              <ListItemText primary={label} />
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

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 0,
            }}
          >
            {navItems.map(([label, section], idx) => (
              <React.Fragment key={section}>
                <Button
                  onClick={() => scrollToSection(section)}
                  sx={{
                    color: label === t.contact ? "#fff" : "var(--accent)",
                    fontWeight: label === t.about ? 700 : 500,
                    background:
                      label === t.contact ? "var(--accent-strong)" : "none",
                    borderRadius: label === t.contact ? "8px" : "6px",
                    px: label === t.contact ? 2 : 1,
                    py: label === t.contact ? 1 : 0,
                    boxShadow:
                      label === t.contact
                        ? "0 2px 12px rgba(80,30,150,0.18)"
                        : "none",
                  }}
                >
                  {label}
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

          <div
            className="nav-right"
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <label className="language-switch">
              <input
                type="checkbox"
                checked={language === "en"}
                onChange={toggleLanguage}
              />
              <span className="slider">
                <span className="lang-label pt">EN</span>
                <span className="lang-label en">PT</span>
              </span>
            </label>

            {mode === "dark" ? (
              <LightModeIcon
                onClick={modeChange}
                style={{ cursor: "pointer", fontSize: "1.5em", color: "#fff" }}
              />
            ) : (
              <DarkModeIcon
                onClick={modeChange}
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
          ModalProps={{ keepMounted: true }}
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
};

export default Navigation;
