import React from "react";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className="homeContent">
      <Navbar />
      <TodoList />
    </div>
  );
};

export default Home;
