const hotelsData = [
  {
    id: 1,
    name: "სასტუმრო თბილისი",
    city: "თბილისი",
    image: "/images/tbilisi-hotel.jpg",
    rooms: [
      {
        id: 101,
        type: "Single Room",
        price: 100,
        status: "available",
      },
      {
        id: 102,
        type: "Single Room",
        price: 100,
        status: "booked",
      },
      {
        id: 103,
        type: "Single Room",
        price: 100,
        status: "available",
      },
      {
        id: 104,
        type: "Double Room",
        price: 150,
        status: "booked",
      },
    ],
  },
  {
    id: 2,
    name: "სასტუმრო ბათუმი",
    city: "ბათუმი",
    image: "/images/batumi-hotel.jpg",
    rooms: [
      {
        id: 201,
        type: "Deluxe Room",
        price: 200,
        status: "available",
      },
      {
        id: 203,
        type: "Deluxe Room",
        price: 200,
        status: "available",
      },
      {
        id: 204,
        type: "Single Room",
        price: 90,
        status: "booked",
      },
      {
        id: 205,
        type: "Single Room",
        price: 90,
        status: "booked",
      },
      {
        id: 206,
        type: "Single Room",
        price: 90,
        status: "booked",
      },
    ],
  },
];

export default hotelsData;
