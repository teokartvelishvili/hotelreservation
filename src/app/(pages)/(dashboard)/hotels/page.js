
import './hotels.css';

import hotelsData from "../../../../components/data/hotelsData";
import "./hotels.css";

export default function HotelsPage() {
  return (
    <div className="hotels-container">
      {hotelsData.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <h2>{hotel.name}</h2>
          <p>ქალაქი: {hotel.city}</p>
          <p>ნომრების რაოდენობა: {hotel.rooms.length}</p>
          <a href={`/rooms/${hotel.id}`} className="view-rooms">
            ნახე ნომრები
          </a>
        </div>
      ))}
    </div>
  );
}
