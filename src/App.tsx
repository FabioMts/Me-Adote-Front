import Navbar from "./components/navbar/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Route, Routes } from "react-router";
import Contato from "./components/Contato";
import Home from "./components/Home";
import Pets from "./components/Pets";
import Doar from "./components/Doar";
import Anunciar from "./components/Anunciar";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#3B82F6" },
  },
} as any);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col w-full justify-between min-h-screen">
        <div>
          <Navbar />
        </div>
        <div className="flex mt-16 flex-col flex-1">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Pets" element={<Pets />} />
            <Route path="Doar" element={<Doar />} />
            <Route path="Contato" element={<Contato />} />
            <Route path="Anunciar" element={<Anunciar />} />
          </Routes>
        </div>

        <footer className="flex flex-row items-center justify-center">
          <Footer></Footer>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
