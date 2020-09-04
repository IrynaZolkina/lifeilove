import React from "react";
import { storage } from "../../firebase/firebaseUtils";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <div
        className="background-image-home"
        style={{
          backgroundImage: `url( "https://firebasestorage.googleapis.com/v0/b/lifeilove-63924.appspot.com/o/images%2FIMG_2325.jpg?alt=media&token=2aba4a08-3342-4953-8384-3997f49feb12")`,
        }}
      ></div>
    </div>
  );
};

export default Home;
