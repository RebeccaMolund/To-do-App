import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <TodoList />
    </div>
  );
};

export default Home;
