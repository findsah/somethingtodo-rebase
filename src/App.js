import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FooterSection from "./pages/front-end/footer/FooterSection";
import Header from "./pages/front-end/header/Header";
import MainRoutes from "./routes/MainRoutes";
import { GetCurrentLocation, GetLocationList } from "./services/ShareApi";
import { Loader } from "@googlemaps/js-api-loader"

const App = () => {

  const loader = new Loader({
    apiKey: "AIzaSyBR962qKrR2IwdYUmk8J4diZVZuV_L9pWw",
    version: "weekly",
    libraries: ["places"]

  });

  const [currentLocation, setCurrentLocation] = useState("")
  const [placesList, setPlacesList] = useState([])
  const dispatch = useDispatch();

  // fetch all places
  loader.load().then((google) => {

    var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    var service

    var request = {
      location: pyrmont,
      radius: '500',
      type: ['restaurant']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        setPlacesList(results)

      } else {
        // console.log(status)
        // console.log(results)
      }
    }

  });


  // useEffect(() => {
  //   dispatch(GetLocationList({ loader, setPlacesList, placesList }))
  // }, [loader])

  useEffect(() => {
    if ("geolocation" in navigator) {

    } else {
      console.log("Not Available");
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords)
        setCurrentLocation(position?.coords)
        dispatch(GetCurrentLocation(position.coords))
      })

    }

  }, []);
  return (
    <>

      <Header />
      <MainRoutes placesList={placesList} />
      <FooterSection />
    </>
  );
};

export default App;
