import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FooterSection from "./pages/front-end/footer/FooterSection";
import Header from "./pages/front-end/header/Header";
import MainRoutes from "./routes/MainRoutes";
import { GetCurrentLocation } from "./services/ShareApi";

const App = () => {



  const [currentLocation, setCurrentLocation] = useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(GetCurrentLocation(position.coords))
      })

    }

  }, []);
  return (
    <>
      <Header />
      <MainRoutes currentLocation={currentLocation} />
      <FooterSection />
    </>
  );
};

export default App;
