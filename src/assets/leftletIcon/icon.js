import L from 'leaflet';

const iconBlue = new L.Icon({
    iconUrl: require('./marker-icon.png'),
    iconRetinaUrl: require('./marker-icon.png'),
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
});

const iconGreen = new L.Icon({
    iconUrl: require('./marker-icon-2x-green.png'),
    iconRetinaUrl: require('./marker-icon-2x-green.png'),
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
});

var iconRed = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    draggable: true,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export { iconBlue, iconGreen, iconRed };