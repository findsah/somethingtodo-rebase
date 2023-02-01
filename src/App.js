import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
import { GetCurrentLocation } from "./services/ShareApi";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import FullPageLoader from "./pages/front-end/components/FullPageLoader";



const App = () => {

  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState("")

  // useSlector to get State from store
  const { isLoading } = useSelector((state) => state?.shareSlice);


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
      {
        isLoading &&
        <FullPageLoader />
      }
    </>
  );
};

export default App;
