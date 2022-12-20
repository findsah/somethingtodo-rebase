import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FooterSection from "./pages/front-end/footer/FooterSection";
import Header from "./pages/front-end/header/Header";
import MainRoutes from "./routes/MainRoutes";
import { GetCurrentLocation } from "./services/ShareApi";
import { Loader } from "@googlemaps/js-api-loader"

const App = () => {

  const loader = new Loader({
    apiKey: "AIzaSyBR962qKrR2IwdYUmk8J4diZVZuV_L9pWw",
    version: "weekly",
    libraries: ["places"]

  });

  loader.load().then((google) => {
    var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
    console.log(pyrmont)
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
    console.log(service)
    service.nearbySearch(request, callback);

    function callback(results, status) {


      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(results)
        toast.success("places are fetch")
        // for (var i = 0; i < results.length; i++) {
        //   // createMarker(results[i]);
        //   // console.log(results[i])
        // }
      } else {
        console.log(status)
        console.log(results)
      }
    }
  });



  const [currentLocation, setCurrentLocation] = useState("")
  const dispatch = useDispatch();



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
      <MainRoutes currentLocation={currentLocation} />
      <FooterSection />
    </>
  );
};

export default App;
