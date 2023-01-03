import L from 'leaflet';

const iconBlue = new L.Icon({
    iconUrl: require('./marker-icon.png'),
    iconRetinaUrl: require('./marker-icon.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    // iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconBlue };