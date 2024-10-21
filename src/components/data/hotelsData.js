const hotelsData = [
  {
    id: 1,
    name: "სასტუმრო თბილისი",
    city: "თბილისი",
    image: "./", // სასტუმრო თბილისის სურათი
    rooms: [
      {
        id: 101,
        type: "Single Room",
        price: 100,
        status: "available",
        image: "/images/single-room.jpg", // სინგლ ნომრის სურათი
      },
      {
        id: 102,
        type: "Single Room",
        price: 100,
        status: "booked",
        image: "/images/single-room.jpg", // იგივე სურათი სინგლ ნომრისთვის
      },
      {
        id: 103,
        type: "Single Room",
        price: 100,
        status: "available",
        image: "/images/single-room.jpg",
      },
      {
        id: 104,
        type: "Double Room",
        price: 150,
        status: "booked",
        image: "/images/double-room.jpg", // დაბლ რუმის სურათი
      },
    ],
  },
  {
    id: 2,
    name: "სასტუმრო ბათუმი",
    city: "ბათუმი",
    image: "/images/batumi-hotel.jpg", // სასტუმრო ბათუმის სურათი
    rooms: [
      {
        id: 201,
        type: "Deluxe Room",
        price: 200,
        status: "available",
        image: "/images/double-room.jpg", // იგივე სურათი დაბლ რუმისთვის
      },
      {
        id: 203,
        type: "Deluxe Room",
        price: 200,
        status: "available",
        image: "/images/double-room.jpg",
      },
      {
        id: 204,
        type: "Single Room",
        price: 90,
        status: "booked",
        image: "/images/single-room.jpg",
      },
      {
        id: 205,
        type: "Single Room",
        price: 90,
        status: "booked",
        image: "/images/single-room.jpg",
      },
      {
        id: 206,
        type: "Single Room",
        price: 90,
        status: "booked",
        image: "/images/single-room.jpg",
      },
    ],
  },
];

export default hotelsData;
