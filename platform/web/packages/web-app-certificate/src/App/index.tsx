import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <main
        style={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Outlet />
      </main>
    </>
  )
};

