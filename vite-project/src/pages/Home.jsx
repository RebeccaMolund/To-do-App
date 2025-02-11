import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import TodoList from '../components/TodoList'

const Home = () => {
  return (
    <div>
        <Header />
        <h1>Home</h1>
        <TodoList />
        <Navbar />
    </div>
  )
}

export default Home