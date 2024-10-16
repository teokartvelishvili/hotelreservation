import './styles.css';

export default function BookingTable({ bookings }) {
  return (
    <table className="booking-table">
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
        {bookings.map((booking, index) => (
          <tr key={index}>
            <td>{booking.hotelName}</td>
            <td>{booking.roomName}</td>
            <td>{booking.userName}</td>
            <td>{booking.status}</td>
            <td>{booking.checkIn}</td>
            <td>{booking.checkOut}</td>
            <td>{booking.totalPrice}</td>
            <td>
              <button>Cancel Booking</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
