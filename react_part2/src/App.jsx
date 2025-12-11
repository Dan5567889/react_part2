import { useState } from 'react'

import './App.css'
//import Navbar from './components/Navbar.jsx'
//import Dante from './pages/Dante.jsx'
//import Wilson from './pages/Wilson.jsx'
//import Goals from './pages/Goals.jsx'
//import Dummy from './components/Dummy.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import TopNavbar from './components/TopNavbar.jsx'
//import Mycard from './components/Mycard.jsx'

import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'



function App() {

  const [todos, setTodos] = useState([]);

  return (
      <>

<TodoList todos={todos} />
<AddTodo setTodos={setTodos} />



      {/* 
      <TopNavbar/>
      <Mycard/>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dummy/>}/>
        <Route path="/dante" element={<Dante/>}/>
        <Route path="/wilson" element={<Wilson/>}/>
        <Route path="/goals" element={<Goals/>}/>
      </Routes>
      </BrowserRouter>
        */}



      </>
  )
}

export default App
