import { createTheme } from "@mui/material/styles";

const fontStack = '"Plus Jakarta Sans", "Poppins", system-ui, sans-serif';

/** Mesh + glass tokens for translucent blurred UI */
const meshBackground = `
  radial-gradient(900px 520px at 82% -8%, rgba(99, 102, 241, 0.42), transparent 55%),
  radial-gradient(800px 480px at -12% 18%, rgba(56, 189, 248, 0.28), transparent 50%),
  radial-gradient(700px 440px at 55% 95%, rgba(244, 114, 182, 0.18), transparent 52%),
  radial-gradient(640px 400px at 5% 75%, rgba(129, 140, 248, 0.22), transparent 50%),
  linear-gradient(155deg, #c7d2fe 0%, #e0e7ff 38%, #cffafe 72%, #fae8ff 100%)
`;

export const glassTokens = {
  surface: "rgba(255, 255, 255, 0.42)",
  surfaceHover: "rgba(255, 255, 255, 0.55)",
  border: "rgba(255, 255, 255, 0.5)",
  borderSubtle: "rgba(15, 23, 42, 0.08)",
  shadow: "0 8px 32px rgba(15, 23, 42, 0.08)",
  blur: "18px",
  blurStrong: "24px",
  dark: "rgba(15, 23, 42, 0.62)",
  darkBorder: "rgba(255, 255, 255, 0.12)",
};

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f172a",
      light: "#e2e8f0",
      dark: "#020617",
      contrastText: "#f8fafc",
    },
    secondary: {
      main: "#6366f1",
      light: "#818cf8",
      dark: "#4f46e5",
      contrastText: "#ffffff",
    },
    background: {
      default: "#e0e7ff",
      paper: glassTokens.surface,
    },
    text: {
      primary: "#0f172a",
      secondary: "#64748b",
    },
    divider: "rgba(15, 23, 42, 0.09)",
    glass: glassTokens,
  },
  shape: {
    borderRadius: 14,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: fontStack,
    h1: {
      fontSize: "6rem",
      fontWeight: 700,
      letterSpacing: "-0.03em",
      "@media (max-width:960px)": { fontSize: "5rem" },
      "@media (max-width:600px)": { fontSize: "4rem" },
      "@media (max-width:414px)": { fontSize: "2.5rem" },
    },
    h2: {
      fontSize: "3.75rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      "@media (max-width:960px)": { fontSize: "3rem" },
      "@media (max-width:662px)": { fontSize: "2.3rem" },
      "@media (max-width:414px)": { fontSize: "2.2rem" },
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      "@media (max-width:960px)": { fontSize: "2.4rem" },
      "@media (max-width:662px)": { fontSize: "2rem" },
      "@media (max-width:414px)": { fontSize: "1.7rem" },
    },
    h4: {
      fontSize: "2.125rem",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      "@media (max-width:960px)": { fontSize: "1.5rem" },
      "@media (max-width:600px)": { fontSize: "1.25rem" },
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
      "@media (max-width:960px)": { fontSize: "1.25rem" },
      "@media (max-width:600px)": { fontSize: "1.1rem" },
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
      "@media (max-width:960px)": { fontSize: "1.1rem" },
      "@media (max-width:600px)": { fontSize: "1rem" },
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.65,
      "@media (max-width:600px)": { fontSize: ".95rem" },
    },
    body2: {
      fontSize: "0.9375rem",
      lineHeight: 1.6,
      "@media (max-width:480px)": { fontSize: ".9rem" },
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: "100%",
        },
        body: {
          minHeight: "100vh",
          backgroundColor: "#94a3b8",
          backgroundImage: meshBackground,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: "none",
          fontWeight: 600,
          paddingLeft: 20,
          paddingRight: 20,
        },
        containedPrimary: {
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(30, 41, 59, 0.95) 100%)",
          backdropFilter: `blur(${glassTokens.blur})`,
          WebkitBackdropFilter: `blur(${glassTokens.blur})`,
          border: `1px solid ${glassTokens.borderSubtle}`,
          "&:hover": {
            background: "linear-gradient(135deg, rgba(30, 41, 59, 0.96) 0%, rgba(51, 65, 85, 0.96) 100%)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.92) 0%, rgba(79, 70, 229, 0.95) 100%)",
          backdropFilter: `blur(${glassTokens.blur})`,
          WebkitBackdropFilter: `blur(${glassTokens.blur})`,
          border: "1px solid rgba(255, 255, 255, 0.35)",
          "&:hover": {
            background: "linear-gradient(135deg, rgba(79, 70, 229, 0.96) 0%, rgba(67, 56, 202, 0.96) 100%)",
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: glassTokens.surface,
          backdropFilter: `blur(${glassTokens.blur})`,
          WebkitBackdropFilter: `blur(${glassTokens.blur})`,
          border: `1px solid ${glassTokens.border}`,
          boxShadow: glassTokens.shadow,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(255, 255, 255, 0.38)",
          backdropFilter: `blur(${glassTokens.blur})`,
          WebkitBackdropFilter: `blur(${glassTokens.blur})`,
          borderBottom: `1px solid ${glassTokens.border}`,
          boxShadow: "none",
          color: "#0f172a",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(255, 255, 255, 0.78)",
          backdropFilter: `blur(${glassTokens.blurStrong})`,
          WebkitBackdropFilter: `blur(${glassTokens.blurStrong})`,
          border: `1px solid ${glassTokens.border}`,
          boxShadow: "0 24px 48px rgba(15, 23, 42, 0.18)",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backdropFilter: `blur(12px)`,
          WebkitBackdropFilter: `blur(12px)`,
        },
        outlined: {
          backgroundColor: "rgba(255, 255, 255, 0.35)",
          border: `1px solid ${glassTokens.border}`,
        },
      },
    },
  },
});

export default theme;
