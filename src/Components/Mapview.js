import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, LayersControl,GeoJSON,FeatureGroup} from 'react-leaflet'
import {Icon} from 'leaflet'
import "../Components/Mapview.css"
import "leaflet/dist/leaflet.css"

function Mapview(props) {
    const {filterStation} = props;
    const icon1 = new Icon({
        iconUrl :'location-pointer.svg',
        iconSize :[25,25]
    });
    const markerStation = filterStation.map((datanew)=>{
        const{
            properties :{RRSTID,KMMIDDLE,NAMET},
            geometry:{coordinates}
        } =datanew;
        return(
                <Marker key={`${RRSTID}`} position={[coordinates[1],coordinates[0]]} icon={icon1}>
                    <Popup className="station-popup">
                        <li>{`${NAMET}`}</li>
                        <li>{`กม.${KMMIDDLE}`}</li>
                    </Popup>
                </Marker>
        )
    }); console.log(Marker)
    return (
        <MapContainer className="mapview" center={[13.736717, 100.523186]} zoom={13} scrollWheelZoom={true}>
            <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        minZoom='2'
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
                    <TileLayer
                        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.Overlay name ="Train Station">
                <FeatureGroup>
                    {markerStation}
                </FeatureGroup>
                </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>
    );
}
export default Mapview;