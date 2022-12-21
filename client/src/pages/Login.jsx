import React from "react";
import {Card, Input} from "antd"
import {FaHardHat} from "react-icons/fa"
import {SiWolframlanguage} from "react-icons/si"
const Login = () => {
  return (
    <div style={{height: "100vh", backgroundColor: "#f0ecf3"}}  className="  d-flex justify-content-around align-items-center " >
      <Card  style={{ width: 400, backgroundColor: "white" }} className="" >
        <div className=" d-flex  align-items-center justify-content-center mb-2 ">
          <h3 className="text-center">Login</h3>
          <SiWolframlanguage className="hardhatIcon m-1" />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <form className="w-100">
            <div className="form-group mb-3">
              <label htmlFor="email">Email <span className="text-danger">*</span></label>
              <Input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password <span className="text-danger">*</span></label>
              <Input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-group  d-flex justify-content-start align-items-center ">
              <button type="submit" className="btn btn-primary ">Login</button>
            </div>

          </form>
          <p className="fw-bold mt-4">
            Don't have an account? <a className="text-decoration-none text-danger" href="/register">Register</a>
          </p>
        </div>
      </Card>
    </div>
  )
};

export default Login;
