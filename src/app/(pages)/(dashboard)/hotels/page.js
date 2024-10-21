import './hotels.css';
import hotelsData from "../../../../components/data/hotelsData";

// Helper ფუნქცია სურათის ბილიკის დასადგენად
const getHotelImage = (hotelName) => {
  const imageMap = {
    "სასტუმრო თბილისი":" ../../../hotelTbilisi.webp",
    "სასტუმრო ბათუმი": "../../../../assets/hotelBatumi.png",
  };
  return imageMap[hotelName] || "/assets/default-hotel.png"; // Default სურათი, თუ ვერ იპოვა
};

export default function HotelsPage() {
  return (
    <div className="hotels-container">
      {hotelsData.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <img 
            src={getHotelImage(hotel.name)} 
            alt={hotel.name} 
            className="hotel-image" 
          />
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
