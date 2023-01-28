import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
import { GetCurrentLocation } from "./services/ShareApi";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";


const App = () => {

  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState("")

  useEffect(() => {
    if ("geolocation" in navigator) {

    } else {

    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation(position?.coords)
        localStorage.setItem("lat", position.coords.latitude)
        localStorage.setItem("lag", position.coords.longitude)
        dispatch(GetCurrentLocation(position.coords))
      }
      )
    }

  }, []);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        {/* <Header /> */}
        <MainRoutes />
        {/* <FooterSection /> */}
      </DndProvider>
    </>
  );
};

export default App;
