import { FaStar } from "react-icons/fa6";
import React, { useState } from 'react';
import './App.css';


function App({ noofStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  function handleclick(getcurrentindex) {

    setRating(getcurrentindex + 1);

  }
  function handleMouseMove(getcurrentindex) {

    setHover(getcurrentindex + 1);
  }
  function handleMouseLeave() {

    setHover(null);
  }

  return (
    <>
      <h2>Star Rating Component</h2>

      {
        [...Array(noofStars)].map((_, index) => {
          return <FaStar
            key={index}

            onClick={() => handleclick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            color={(hover || rating) > index ? "#ffc107" : "#e4e5e9"}
            size={40}

          />




        })
      }



    </>
  )
}

export default App
