import React from 'react'
import './App.css'
const App = ({ name, email, mob }) => {
  return (
    <div id="disp">
      <h1>Student Details</h1>
      <h2>Name: {name}</h2>
      <h2>Email Id:{email}</h2>
      <h2>Mobile Number:{mob}</h2>
    </div>
  )
}

