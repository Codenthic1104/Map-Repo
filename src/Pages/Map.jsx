import React from 'react';
import { Nav } from '../Component/Nav';
import { MapContainer, TileLayer, Marker, Popup,  } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pointer from "../Pictures/pointer.png";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

const customIcon = new L.Icon({
    iconUrl: pointer,
    iconSize: [25, 25], // size of the icon
    iconAnchor: [12, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
  });

function Map(props) {
    let {name, lat , lng} = useParams();
  return (
    <>
        <Nav />
        <div className='w-[100%] h-[70vh] grid md:grid-cols-2 grid-cols-1 shadow-md shadow-gray-300'>
            <div className=' w-[100%] h-[90vh] px-[5%] py-[10%]'>
                
                <h2 className='m-[20px] text-[1.5rem] font-bold flex items-center capitalize font-sans'> <FaLocationDot className='mx-[3px] text-red-600' /> {name} </h2>
                <p className='wrap text-[.9rem] text-[gray] m-[20px] font-sans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur fugiat odio eveniet corrupti non officia, nobis unde, id corporis debitis vitae quae nostrum ea quod eos similique, natus minima aliquid!</p>
                
                
                <h2 className='m-[20px] text-[1.5rem] font-bold flex items-center capitalize text-red-500  '> 𝓛𝓸𝓰𝓫𝓸𝓸𝓴 2024</h2>

                <div className='flex gap-5 m-[20px] mt-[30px] text-[.8rem]'>
                    <p className='text-[.8rem]'><b>Latitude : </b>{lat}</p>
                    <p className='text-[.8rem]'><b>Longitude : </b>{lng}</p>
                </div>

            </div>
            <div className=' w-[100%] h-[90vh] px-[10%] py-[5%]'>
            <MapContainer center={[lat, lng]} zoom={7} style={{ height: "60vh", width: "70%", marginLeft : "10%" }}>
                <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            /> 
            
            <Marker position={[lat, lng]} icon={customIcon}>
                <Popup>
                <strong>{name}</strong><br />
                {/* {marker.description} */}

                <p><b>Latitude : </b>{lat}</p>
                <p><b>Longitude :</b> {lng}</p>
                </Popup>
            </Marker>
            
            </MapContainer>

            </div>
        </div>
    </>
  )
}

export {Map}