import { useEffect, useState } from 'react';
import { MapContainer, TileLayer,  Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom';
import '../App.css';



function Map() {

  const [infoData , setInfoData] = useState([]);

  useEffect(() => {
    fetch('https://tracker-backend-one.vercel.app/getProject')
        .then(res => res.json())
        .then(data => setInfoData(data));
}, [])

console.log(infoData)


  return (
    <MapContainer center={[23.749462, 90.402531]} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.facebook.com/Hira2810/">CryingObsidian</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
        infoData.map(info => 
          <Marker
            key={info.id}
            position={[info.lati, info.longi]}
          >
            <Popup>
              <p><b>Project Name:</b> {info.project_name}</p>
              <p><b>Category:</b> {info.category}</p>
              <p><b>Budget:</b> JPY {info.total_budget} M</p>
              <Link to={`/details/${info._id}`}><button type="button" class="btn btn-outline-info">Details</button></Link>
            </Popup>
          </Marker>
 
        ) 
      } 

    </MapContainer>
  );
}

export default Map;
