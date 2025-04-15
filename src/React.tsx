import { Box, CircularProgress } from "@mui/material";
import { memo, useCallback, useRef, useState } from "react";

export const ReactPage = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef<HTMLIFrameElement>(null);

  const onLoad = useCallback(() => {
    console.log("carregou");
    console.log("carregou");
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
          }}
        >
          <CircularProgress />
        </Box>
      )}

      <iframe
        ref={ref}
        onLoad={onLoad}
        src="https://superlative-horse-85bb5c.netlify.app/"
        style={{
          border: "none",
          visibility: isLoading ? "hidden" : "visible",
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
});
