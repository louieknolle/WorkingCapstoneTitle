import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setSelectedTrailById } from '../data/mapsSlice'
import { useSelector } from 'react-redux'

const TrailResults = () => {
  const dispatch = useDispatch();
  const trailsList = useSelector((state) => state.maps.trailsList)
  return (
    <section className="w-full">
      <h1 className="text-2xl my-5 text-center">Destinations</h1>
      <ul>
        {trailsList.map((trail) => (
          <li key={trail.place_id} className="text-center hover:underline my-4">
            <Link
              to="/placeDetails"
              onClick={() => dispatch(setSelectedTrailById(trail.place_id))}
            >
              {trail.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrailResults;
