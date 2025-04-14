import { Box, CircularProgress } from "@mui/material";
import { useRef, useState } from "react";

export const AngularPage2 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef<HTMLIFrameElement>(null);

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            height: "100%",
            with: "100%",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      <iframe
        ref={ref}
        onLoad={() => {
          setIsLoading(false);
        }}
        src="https://uat.melistock.com/vaaptv2/?redirectTo=/veiculos/pecas?strOperation=3"
        style={{
          border: "none",
          visibility: isLoading ? "hidden" : "visible",
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
};
