import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Target from "./components/Target";
import AwardsAchievement from "./components/AwardsAchievement";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Target />
      <AwardsAchievement />
      <Footer />
    </>
  );
};

export default App;
