import { Box, CircularProgress } from "@mui/material";
import { memo, useCallback, useEffect, useRef, useState } from "react";

export const AngularPage = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef<HTMLIFrameElement>(null);

  const onLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

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
            color: 'blue'
          }}
        >
          <CircularProgress  variant="indeterminate" />
        </Box>
      )}
      <iframe
        ref={ref}
        onLoad={onLoad}
        src="https://uat.melistock.com/vaaptv2/?redirectTo=/metricas/maindashboard"
        style={{
          border: "none",
          visibility: isLoading ? "hidden" : "visible",
          width: "100%",
          height: "100%",
          borderStyle: "1px solid red",
        }}
      />
    </>
  );
});
