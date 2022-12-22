import React, { useState } from 'react'
import { Card, Input, Form, message, Spin } from 'antd'

import { SiWolframlanguage } from 'react-icons/si'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('resumeBuilder-user')) {
      navigate('/home')
      message.info('You are already logged in')
    }
  }, [])

  const onFinish = async (values) => {
    const Input = document.querySelectorAll('Input')
    Input.forEach((input) => {
      input.setAttribute('disabled', 'disabled')
    })
    setLoading(true)
    try {
      const user = await axios.post('/api/auth/login', values)
      message.success('Login successfully')
      console.log(user.data.user)
      localStorage.setItem('resumeBuilder-user', JSON.stringify(user.data.user))
      setLoading(false)
      navigate('/home')
      Input.forEach((input) => {
        input.removeAttribute('disabled', 'disabled')
      })
    } catch (error) {
      message.error('Login failed')
      Input.forEach((input) => {
        input.removeAttribute('disabled', 'disabled')
      })
      setLoading(false)
    }
  }
  return (
    <div
      style={{ height: '100vh', backgroundColor: '#f0ecf3' }}
      className="row p-4 w-100  d-flex justify-content-around align-items-center "
    >
      <div className="col-lg-4 lh-base col-md-8 col-sm-10 t d-flex flex-column justify-content-around  ">
        <div className=" placeholder-glow d-flex p-3 justify-content-center align-items-center"></div>
        <h1>
          Welcome back to <br /> Resume Builder...{' '}
        </h1>
        <p className="text-muted ">#1 app to create your resume!</p>
      </div>
      <Card
        style={{ width: 400, backgroundColor: 'white' }}
        className="m-2 col-lg-6 col-md-8 col-sm-10"
      >
        <div className=" d-flex  align-items-center justify-content-center mb-2 ">
          <h3 className="text-center">Login</h3>
          <SiWolframlanguage className="hardhatIcon m-1" />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Form onFinish={onFinish} className="w-100">
            <div className="form-group mb-3">
              <label htmlFor="email">
                Email <span className="text-danger">*</span>
              </label>
              <Form.Item name="email">
                <Input
                  type="email"
                  className="form-control"
                  id="email input"
                  placeholder="Email"
                />
              </Form.Item>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">
                Password <span className="text-danger">*</span>
              </label>
              <Form.Item name="password">
                <Input
                  type="password"
                  className="form-control"
                  id="password input"
                  placeholder="Password"
                />
              </Form.Item>
            </div>

            <div className="form-group  d-flex justify-content-start align-items-center ">
              {loading ? (
                <Spin className="m-2" />
              ) : (
                <button type="submit" className="btn btn-primary ">
                  Login
                </button>
              )}
            </div>
          </Form>
          <p className="fw-bold mt-4">
            Don't have an account?{' '}
            <Link className="text-decoration-none text-danger" to="/register">
              Register
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}

export default Login
