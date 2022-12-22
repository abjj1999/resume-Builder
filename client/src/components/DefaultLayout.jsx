import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../public/css/auth.css'

const DefaultLayout = ({ children }) => {
  const navigate = useNavigate()
  const usernameLS = JSON.parse(localStorage.getItem('resumeBuilder-user'))
  const handleLogout = () => {
    localStorage.removeItem('resumeBuilder-user')
    navigate('/login')
  }
  return (
    <div className="layout">
      <div className=" navv d-flex flex-wrap  justify-content-between align-items-center">
        <h2 className="text-dark text-center m-2">
          <span className="text-danger">R</span>
          esume <span className="text-info">B</span>
          uilder
        </h2>
        <div className="d-flex justify-content-between align-items-center">
          <Link className="text-decoration-none" to="/home">
            <span className="m-1 p-1 point  text-dark  ">
              {usernameLS ? usernameLS.username : 'Guest'}
            </span>
          </Link>

          <Link className="text-decoration-none" to="/profile">
            <span className=" point m-1 p-1 text-dark ">Profile</span>
          </Link>
          <Link className="text-decoration-none" to="/template">
            <p className="point m-1 p-1 text-dark">Template</p>
          </Link>

          <p
            className=" point m-1 p-1 text-dark  fw-bold  "
            onClick={handleLogout}
          >
            Logout
          </p>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}

export default DefaultLayout
