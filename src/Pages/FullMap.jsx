import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup,  } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pointer from "../Pictures/pointer.png"
import { Nav } from '../Component/Nav';
import { NavLink } from 'react-router-dom';

// Sample marker icon setup
const customIcon = new L.Icon({
  iconUrl: pointer,
  iconSize: [25, 25], // size of the icon
  iconAnchor: [12, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
});

const FullMap = () => {
    let [data, setData]= useState([]);
    const [satelliteView, setSatelliteView] = useState(false); // Toggle state
    // const position = [37.7749, -122.4194]; // Example coordinates
  
    const handleToggle = () => {
      setSatelliteView(!satelliteView);
    };
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
    <>
    <Nav />
    <div style={{display : "flex", justifyContent : "center", alignItems : "center", width: "100%", paddingTop : "1%" }}>
    <button onClick={handleToggle} style={{border: "none", padding : "1%", backgroundColor : "#03055b", color : "white", cursor : "pointer",  position : 'fixed', top : "15%", right : "10px" , display: "flex", zIndex : 10000,  }}>
        {satelliteView ? "Switch to Normal View" : "Switch to Satellite View"}
      </button>
    </div>
   
    <MapContainer center={[30, 9]} zoom={7} style={{ height: "100vh", width: "100%" }}>

      {
        satelliteView

        ?
        
        <>
     <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2lnbWEtMTIzIiwiYSI6ImNsenI1N3owdDFpZG8ybHNpNzg0dXY1Z3YifQ.PWsoXsSJtwCmb0h8gsnkjA"
        attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
      /> 

       
       <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2lnbWEtMTIzIiwiYSI6ImNsenI1N3owdDFpZG8ybHNpNzg0dXY1Z3YifQ.PWsoXsSJtwCmb0h8gsnkjA"
        attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
      /> 
      </>

        :
         <>
           <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        /> 
        </>
      }

        
      

     


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

            <NavLink to={`/map/${marker.Stöð}/${p.lat}/${p.lng}`}>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Logbook</button>
            {/* <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button> */}
            </NavLink>
          </Popup>
        </Marker>
        </>
        )
        }
        
      })}
    </MapContainer>
    </>
  );
}

export {FullMap};
