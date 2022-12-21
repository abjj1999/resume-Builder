import React from "react";
import {Card, Input} from "antd"
import {SiWolframlanguage} from "react-icons/si"
const Register = () => {
  return (
    <div style={{height: "100vh", backgroundColor: "#f0ecf3"}}  className="  d-flex justify-content-around align-items-center " >
      <Card  style={{ width: 400, backgroundColor: "white" }} className="m-2" >
        <div className=" d-flex  align-items-center justify-content-center mb-2 ">
          <h3 className="text-center">Register</h3>
          <SiWolframlanguage className="hardhatIcon m-1" />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <form className="w-100">
            <div className="form-group mb-3">
              <label htmlFor="username">Username <span className="text-danger">*</span></label>
              <Input type="text" className="form-control" id="Username" placeholder="Username" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email <span className="text-danger">*</span></label>
              <Input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password <span className="text-danger">*</span></label>
              <Input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password"> Confirm password <span className="text-danger">*</span></label>
              <Input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-group  d-flex justify-content-start align-items-center ">
              <button type="submit" className="btn btn-primary ">Register</button>
            </div>

          </form>
          <p className="fw-bold mt-4">
            Already have an account? <a className="text-decoration-none text-danger" href="/login">Login</a>
          </p>
        </div>
      </Card>
    </div>
  )
};

export default Register;
