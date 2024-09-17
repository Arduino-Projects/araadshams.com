import { style } from "@vanilla-extract/css";

export const container = style({
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "-apple-system, BlinkMacSystemFont",
  width: "100vw",
  height: "100vh",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 1,
});

export const contentContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  pointerEvents: "none",
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.1rem",
  pointerEvents: "none",
});

export const heading = style({
  fontSize: "3.5rem",
  fontWeight: "bold",
  background: "linear-gradient(89deg, #11993C 16.14%, #638FFF 79%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
  color: "transparent",
});

export const subheading = style({
  fontSize: "2.2rem",
  background: "linear-gradient(126deg, #FFF 13.24%, #FFF 49.73%, #999 69.97%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
  color: "transparent",
});

export const buttonContainer = style({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
});

export const buttonText = style({
  textAlign: "center",
  fontSize: "1rem",
  color: "white",
  fontWeight: "lighter !important",
});

export const externalLinkButton = style({
  outline: "none",
  background: "#1d1d1d",
  display: "flex",
  padding: "10px 14px",
  border: "none",
  borderRadius: "20px",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  cursor: "pointer",
  pointerEvents: "auto",
  transition: "all 0.2s",
  ":hover": {
    filter: "opacity(0.9)",
    transform: "scale(1.02)",
  },
  ":active": {
    filter: "opacity(0.8)",
  },
});
