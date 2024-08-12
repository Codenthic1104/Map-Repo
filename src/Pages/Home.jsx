import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pointer from "../Pictures/pointer.png"

// Sample marker icon setup
const customIcon = new L.Icon({
  iconUrl: pointer,
  iconSize: [25, 25], // size of the icon
  iconAnchor: [12, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
});

const Home = () => {
    let [data, setData]= useState([]);
    useEffect(()=>{
        async function getData(){
          try{
            let data = await fetch("https://sheetdb.io/api/v1/2s5abtk0fxrtm");
            let res= await data.json();
            // console.log(res);
            setData(res);
            
          }
          catch(e){
            console.log("Error while fetching data", e);
          }
        };
        getData();
      }, [])
  const markers = [
    { lat: 64.9631, lng: -19.0208, name: 'Place 1', description: 'Description for Place 1' },
    { lat: 65.0131, lng: -18.0208, name: 'Place 2', description: 'Description for Place 2' },
    { lat: 63.0131, lng: -19.0208, name: 'Place 3', description: 'Description for Place 3' },
    { lat: 64.0131, lng: -19.0298, name: 'Place 4', description: 'Description for Place 4' },
    { lat: 65.1131, lng: -19.0278, name: 'Place 5', description: 'Description for Place 5' },
    { lat: 65.3231, lng: -19.0308, name: 'Place 6', description: 'Description for Place 6' },
    // Add more marker objects here with name and description
  ];
//   function cleanWord(word){
//     console.log("Word", word);
//   }
  const parseCoordinates = (coordString) => {
    // console.log(coordString)
    let co = parseFloat(coordString.split("°")[1].trim());
    // let n1 = cleanWord(coordString.split("°")[0]);
    // let n2 = coordString.split("°");
    // console.log(n2);
    // console.log(coordString , coordString.split("°")[0].split(`W`));
    return(co);
  };

  return (
    <MapContainer center={[30, 9]} zoom={7} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((marker, i)=>{
        // console.log(marker)
        if(i<=10){
            parseCoordinates(marker.Location);
            parseCoordinates(marker.GPS);
            let p = {
            lat:  parseCoordinates(marker.Location),
             lng :  parseCoordinates(marker.GPS)
            }
            // console.log(p)
        return(
        <>
        <Marker key={i} position={[p.lat, p.lng]} icon={customIcon}>
          <Popup>
            <strong>{marker.Stöð}</strong><br />
            {/* {marker.description} */}

            <p><b>Latitude : </b>{p.lat}</p>
            <p><b>Longitude :</b> {p.lng}</p>
          </Popup>
        </Marker>
        </>
        )
        }
        
      })}
    </MapContainer>
  );
}

export {Home};
