"use client";
import { useParams } from "next/navigation";
import hotelsData from "../../../../../components/data/hotelsData";
import "./rooms.css";

export default function RoomsPage() {
  const { hotelId } = useParams();
  const hotel = hotelsData.find((h) => h.id === parseInt(hotelId));

  if (!hotel) {
    return <p>სასტუმრო ვერ მოიძებნა.</p>;
  }

  const handleBooking = (roomId) => {
    alert(`ოთახი ID: ${roomId} წარმატებით დაჯავშნილია!`);
 
  };

  return (
    <div className="rooms-container">
      <h1>{hotel.name} - ნომრები</h1>
      <div className="rooms-grid">
        {hotel.rooms.map((room) => (
          <div
            className={`room-card ${room.status === "available" ? "available" : "booked"}`}
            key={room.id}
          >
            <img src={room.image} alt={room.type} />
            <h2>{room.type}</h2>
            <p>ფასი: {room.price}₾</p>
            <p>Status: {room.status === "available" ? "თავისუფალი" : "დაკავებული"}</p>

         
            {room.status === "available" && (
              <button className="book-button" onClick={() => handleBooking(room.id)}>
                დაჯავშნა
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
