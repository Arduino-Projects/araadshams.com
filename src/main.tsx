import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UnderConstruction from "./UnderConstruction/UnderConstruction";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UnderConstruction />
  </StrictMode>
);
