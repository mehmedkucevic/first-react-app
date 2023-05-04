import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HotelCard from "../../components/Cards/HotelCard/HotelCard";
import hotels from "../../common/hotels.json";
import "./Hotel.css"


export default function Hotel() {
  const { id } = useParams();
  console.log(typeof id);
  console.log(hotels);
  const hotel = hotels.find((e) => {
    return e.id == id;
  });
  console.log(hotel);
  return (
    <div className="hotel1">
      <HotelCard
        imageUrl={hotel.imageURL}
        name={hotel.name}
        stars={hotel.stars}
        description={hotel.description}
        rating={hotel.rating}
        reviews={hotel.reviews}
      />
    </div>
  );
}
