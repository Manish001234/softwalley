import React from 'react'
import Login from '../Authenctication/login'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../LandingPage/Homepage'

const Routers = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Homepage/>}></Route>

        </Routes>
    </div>
  )
}

export default Routers