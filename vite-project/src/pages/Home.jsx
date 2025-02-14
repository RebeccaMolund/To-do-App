import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className="homeContent">
      <Header />
      <TodoList />
    </div>
  );
};

export default Home;
