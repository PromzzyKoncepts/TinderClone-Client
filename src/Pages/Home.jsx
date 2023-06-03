import React from "react";
import '../Stylesheets/SwipeButtons.css'
import Header from '../components/Header'
import SwipeButtons from "../components/SwipeButtons";
import TinderCards from "../components/TinderCards";

const Home = () => {
  return (
    <div>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default Home;
