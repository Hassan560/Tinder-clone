import React, { useEffect, useState } from "react";

//tindercss
import "../TinderCard/TinderCard.css";

//images
import girlone from "../../Assets/Images/girl.jpg";
import girltwo from "../../Assets/Images/girl2.jpg";

// tindercard
import TinderCard from "react-tinder-card";

//asiox
import axios from "../../Axios";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);
  console.log(people);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div className="tindercardcontainer">
      {people.map((item, index) => (
        <TinderCard
          className="swipe"
          key={index}
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["right", "left"]}
        >
          <div
            style={{ backgroundImage: `url("${item.imgUrl}")` }}
            className="card"
          >
            <h3>{item.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
