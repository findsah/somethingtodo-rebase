import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FooterSection from "./pages/front-end/footer/FooterSection";
import Header from "./pages/front-end/header/Header";
import MainRoutes from "./routes/MainRoutes";

const App = () => {

  const apiKey = "AIzaSyBR962qKrR2IwdYUmk8J4diZVZuV_L9pWw";
  const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
  const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';

  const [currentLocation, setCurrentLocation] = useState("")
  useEffect(() => {
    const reverseGeocode = ({ latitude: lat, longitude: lng }) => {
      const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
      // searchInput.current.value = "Getting your location...";
      fetch(url)
        .then(response => response.json())
        .then(location => {
          const place = location.results[0];
          setCurrentLocation(place?.address_components[1]?.short_name)
          console.log(place)
          console.log(place?.address_components[1]?.short_name)

          // const _address = extractAddress(place);
          // setAddress(_address);

          // searchInput.current.value = _address.plain();
        })
    }


    // const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        reverseGeocode(position.coords)
      })
      // }
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
