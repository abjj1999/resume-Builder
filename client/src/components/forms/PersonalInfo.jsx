import { Input } from 'antd'
import React from 'react'
import { AiOutlineClear, AiOutlineSave } from 'react-icons/ai'

const { TextArea } = Input
const PersonalInfo = () => {
  return (
    <div className="h-100">
      <div className="d-flex justify-content-center flex-column flex-wrap align-items-center">
        <h4 className="m-2 text-center mb-4">Personal Info</h4>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="mb-2 form-group col-lg-4 col-md-5 col-sm-10">
          <label htmlFor="firstname">
            First name <span className="text-danger">*</span>
          </label>
          <Input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="First name"
          />
        </div>
        <div className="mb-2 form-group col-lg-4 col-md-5 col-sm-10">
          <label htmlFor="lastname">
            Last name <span className="text-danger">*</span>
          </label>
          <Input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Last name"
          />
        </div>
      </div>
      <div className=" mt-3 row d-flex justify-content-center">
        <h6 className="text-center">Contact</h6>
        <div className="mb-2 form-group col-lg-3 col-md-5 col-sm-10">
          <label htmlFor="email">
            Email <span className="text-danger">*</span>
          </label>
          <Input
            type="email"
            className="form-control"
            id="email"
            placeholder="email@example.com"
          />
        </div>

        <div className="mb-2 form-group col-lg-3 col-md-5 col-sm-10">
          <label htmlFor="portfolio">
            Portfolio <span className="text-muted">(optional)</span>
          </label>
          <Input
            type="url"
            className="form-control "
            id="portfolio"
            placeholder="www.example.com"
          />
        </div>
        <div className="mb-2 form-group col-lg-2 col-md-5 col-sm-10">
          <label htmlFor="phone">
            Phone <span className="text-danger">*</span>
          </label>
          <Input
            type="text"
            className="form-control "
            id="phone"
            placeholder="(xxx) xxx-xxxx"
          />
        </div>
      </div>
      <div className=" mt-3 row d-flex justify-content-center">
        <h6 className="text-center">Objective</h6>
        <div className="mb-2 form-group col-8">
          <TextArea placeholder="Write a summery" rows={3} />
        </div>
      </div>
      <div className=" mt-3 row d-flex justify-content-center">
        <h6 className="text-center">Address</h6>
        <div className="mb-2 form-group col-lg-3 col-md-5 col-sm-10">
          <label htmlFor="City">
            City <span className="text-danger">*</span>
          </label>
          <Input
            type="text"
            className="form-control"
            id="City"
            placeholder="City"
          />
        </div>
        <div className="mb-2 form-group col-lg-3 col-md-5 col-sm-10">
          <label htmlFor="State">
            State <span className="text-danger">*</span>
          </label>
          <Input
            type="text"
            className="form-control"
            id="State"
            placeholder="State"
          />
        </div>
      </div>
      <div className=" d-flex m-4  justify-content-center ">
        <div className="  d-flex">
          <div className=" point m-3 d-flex flex-column">
            <AiOutlineSave className="m-1 text-primary fs-4" />
            <p className="text-center">Save</p>
          </div>
          <div className=" point m-3 d-flex flex-column">
            <AiOutlineClear className="m-1 text-danger fs-4" />
            <p className="text-center">Clear</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
