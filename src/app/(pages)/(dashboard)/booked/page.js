'use client';
import './booked.css';


const bookings = [
  {
    id: 1,
    hotelName: 'სასტუმრო თბილისი',
    roomName: 'Deluxe Room',
    userName: 'გიორგი',
    status: 'Active',
    checkIn: '2024-10-20',
    checkOut: '2024-10-25',
    totalPrice: 600,
  },
  {
    id: 2,
    hotelName: 'სასტუმრო ბათუმი',
    roomName: 'Double Room',
    userName: 'ნინო',
    status: 'Cancelled',
    checkIn: '2024-11-01',
    checkOut: '2024-11-05',
    totalPrice: 360,
  },
];

export default function BookedRooms() {
  const handleCancel = (id) => {
    alert(`Booking with ID ${id} has been cancelled.`);
  };

  return (
    <>
      <main className="booked-main">
        <h1>Booked Rooms</h1>
        <table className="booked-table">
          <thead>
            <tr>
              <th>Hotel</th>
              <th>Room</th>
              <th>User</th>
              <th>Status</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.hotelName}</td>
                <td>{booking.roomName}</td>
                <td>{booking.userName}</td>
                <td>{booking.status}</td>
                <td>{booking.checkIn}</td>
                <td>{booking.checkOut}</td>
                <td>${booking.totalPrice}</td>
                <td>
                  <button onClick={() => handleCancel(booking.id)}>
                    Cancel Booking
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
