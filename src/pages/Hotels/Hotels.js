import React from 'react';
import hotels from '../common/hotels.json';
import HotelCard from '../../components/Cards/HotelCard/HotelCard';

export default function Hotels() {
  return (
    <div>
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          imageURL={hotel.imageURL}
          name={hotel.name}
          stars={hotel.stars}
          description={hotel.description}
          rating={hotel.rating}
          reviews={hotel.reviews}
        />
      ))}
    </div>
  );
}
