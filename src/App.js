import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterSection from "./pages/front-end/footer/FooterSection";
import Header from "./pages/front-end/header/Header";
import MainRoutes from "./routes/MainRoutes";
import { GetCurrentLocation } from "./services/ShareApi";
import { Loader } from "@googlemaps/js-api-loader"
import { GetPlacesDetailbyId, GetPlacesList } from "./services/GoogleSlice";


const App = () => {
  // loader to load api key for google
  const loader = new Loader({
    apiKey: "AIzaSyBR962qKrR2IwdYUmk8J4diZVZuV_L9pWw",
    version: "weekly",
    libraries: ["places"]

  });

  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState("")

  const { getPlacesList } = useSelector((state) => state?.googleSlice)
  const { getPlacesDetailbyId } = useSelector((state) => state?.googleSlice)
  useEffect(() => {

    // fetch google api
    loader.load().then((google) => {
      var pyrmont = new google.maps.LatLng(currentLocation?.latitude, currentLocation?.longitude);
      // var pyrmont = new google.maps.LatLng(33.1415552, 73.7476608);
      let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.1415552, lng: 73.7476608 },
        zoom: 8,
      });
      var service

      var request = {
        location: pyrmont,
        radius: '500',
        type: ['restaurant']
      };

      var reqestplacebyid = {
        placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
      }
      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, getNearPlaces);
      // service.getDetails(reqestplacebyid, getplaceDetail)

      function getNearPlaces(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          dispatch(GetPlacesList(results))

        } else {
          // console.log(status)
          // console.log(results)
        }
      }

      // function getplaceDetail(results, status) {
      //   if (status == google.maps.places.PlacesServiceStatus.OK) {
      //     dispatch(GetPlacesDetailbyId(results))

      //   } else {
      //     // console.log(status)
      //     // console.log(results)
      //   }
      // }

    });
  }, [currentLocation])

  console.log(getPlacesDetailbyId)

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
      <MainRoutes />
      <FooterSection />
    </>
  );
};

export default App;
