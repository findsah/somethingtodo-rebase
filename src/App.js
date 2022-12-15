import { useEffect } from "react";
import FooterSection from "./pages/front-end/footer/FooterSection";
import Header from "./pages/front-end/header/Header";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  useEffect(() => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        localStorage.setItem("lat", lat);
        localStorage.setItem("lng", lng);
      }
    );
  }, []);
  return (
    <>
      <Header />
      <MainRoutes />
      <FooterSection />
    </>
  );
};

export default App;
