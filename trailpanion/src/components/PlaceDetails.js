import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// const styles = {
//   img: {
//     width: "25%",
//     height: "15%",
//   },
// };

const PlaceDetails = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const trail = location.state;

  return (
    <section className="container  bg-midnightBlue">
      <div className="flex justify-between">
        <button
          className="text-xl text-springGreen mt-2 hover:underline"
          onClick={() => navigate(-1)}
        >
          Back to results
        </button>
        <button className="text-xl text-springGreen mt-2 hover:underline">
          Save to favorites
        </button>
      </div>
      <h1 className="text-center text-4xl text-springGreen mt-8 border-2 border-springGreen p-6">
        <span className="p-2 border-2 border-springGreen bg-springGreen text-midnightBlue">
          {trail.name}
        </span>
      </h1>
      <article className="flex border-2 border-springGreen mt-2 p-1">
        <ul className="bg-springGreen text-midnightBlue m-4 p-4 border-4 border-midnightBlue">
          <div className="border-4 border-midnightBlue p-4">
            <li>
              <h3 className="text-2xl mt-2">Location:</h3> {trail.city},{" "}
              {trail.state}
            </li>
            <li>
              <h3 className="text-2xl mt-2">Description:</h3>{" "}
              {trail.description}
            </li>
            <li>
              <h3 className="text-2xl mt-2">Directions:</h3> {trail.directions}
            </li>
          </div>
        </ul>

        {/* <img
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/babbling-brook-rick-seymour.jpg"
          alt="a babbling brook"
          style={styles.img}
        /> */}
      </article>
    </section>
  );
};

export default PlaceDetails;
