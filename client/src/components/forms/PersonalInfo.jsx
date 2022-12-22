import { Input } from 'antd'
import React from 'react'
import { AiOutlineClear, AiOutlineSave } from 'react-icons/ai'
import { Form } from 'antd'

const { TextArea } = Input
const PersonalInfo = () => {
  const personalInfo = (values) => {
    console.log(values)
  }
  return (
    <Form onFinish={personalInfo} className="h-100">
      <div className="d-flex justify-content-center flex-column flex-wrap align-items-center">
        <h4 className="m-2 text-center mb-4">Personal Info</h4>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="mb-2 form-group col-lg-4 col-md-5 col-sm-10">
          <label htmlFor="firstname">
            First name <span className="text-danger">*</span>
          </label>
          <Form.Item name="FirstName">
            <Input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="First name"
            />
          </Form.Item>
        </div>
        <div className="mb-2 form-group col-lg-4 col-md-5 col-sm-10">
          <label htmlFor="lastname">
            Last name <span className="text-danger">*</span>
          </label>
          <Form.Item name="LastName">
            <Input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Last name"
            />
          </Form.Item>
        </div>
      </div>
      <div className=" mt-3 row d-flex justify-content-center">
        <h6 className="text-center">Contact</h6>
        <div className="mb-2 form-group col-lg-3 col-md-5 col-sm-10">
          <label htmlFor="email">
            Email <span className="text-danger">*</span>
          </label>
          <Form.Item name="Email">
            <Input
              type="email"
              className="form-control"
              id="email"
              placeholder="email@example.com"
            />
          </Form.Item>
        </div>

        <div className="mb-2 form-group col-lg-3 col-md-5 col-sm-10">
          <label htmlFor="portfolio">
            Portfolio <span className="text-muted">(optional)</span>
          </label>
          <Form.Item name="Portfolio">
            <Input
              type="url"
              required={false}
              className="form-control "
              id="portfolio"
              placeholder="www.example.com"
            />
          </Form.Item>
        </div>
        <div className="mb-2 form-group col-lg-2 col-md-5 col-sm-10">
          <label htmlFor="phone">
            Phone <span className="text-danger">*</span>
          </label>
          <Form.Item name="Phone">
            <Input
              type="text"
              className="form-control "
              id="phone"
              placeholder="(xxx) xxx-xxxx"
            />
          </Form.Item>
        </div>
      </div>
      <div className=" mt-3 row d-flex justify-content-center">
        <h6 className="text-center">Objective</h6>
        <div className="mb-2 form-group col-8">
          <Form.Item name="Objective">
            <TextArea placeholder="Write a summery" rows={3} />
          </Form.Item>
        </div>
      </div>
      <div className=" mt-3 row d-flex justify-content-center">
        <h6 className="text-center">Address</h6>
        <div className="mb-2 form-group col-lg-3 col-md-5 col-sm-10">
          <label htmlFor="City">
            City <span className="text-danger">*</span>
          </label>
          <Form.Item name="City">
            <Input
              type="text"
              className="form-control"
              id="City"
              placeholder="City"
            />
          </Form.Item>
        </div>
        <div className="mb-2 form-group col-lg-3 col-md-5 col-sm-10">
          <label htmlFor="State">
            State <span className="text-danger">*</span>
          </label>
          <Form.Item name="State">
            <Input
              type="text"
              className="form-control"
              id="State"
              placeholder="State"
            />
          </Form.Item>
        </div>
      </div>
      <div className=" d-flex   justify-content-center ">
        <button type="submit" className="btn btn-primary point m-2  d-flex">
          <AiOutlineSave className=" m-1 fs-4 " />
        </button>
        <button className=" btn btn-danger  d-flex m-2 ">
          <AiOutlineClear className="m-1  fs-4" />
        </button>
      </div>
    </Form>
  )
}

export default PersonalInfo
