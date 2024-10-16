

import HotelCard from '../../../components/hotelCard/hotelCard';


export default function Home() {
  const favoriteRooms = [/* ფავორიტი ნომრების მონაცემები */];

  return (
    <>
      <main className="main">
        <h1>Favorite Rooms</h1>
        <div className="card-container">
          {favoriteRooms.map((room, index) => (
            <HotelCard key={index} {...room} />
          ))}
        </div>
      </main>
    </>
  );
}
