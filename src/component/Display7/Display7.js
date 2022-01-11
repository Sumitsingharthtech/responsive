import React from "react";
import "./Display7.css";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from 'react-icons/bs';


function Display7() {
  return (
   <>
    <div className="black"> </div>
<div className="icon">
    <div className="btn_back_div" ><Link to="/3" >
  <button className="btn_back">  <BsArrowLeftShort /> Back </button>
  </Link></div>
  <h4 > <span>home</span>centre </h4>
</div>
    <div className="main">
      <h1 className="Address-h1">Add Address Details </h1>
      <div className="container">
        <div className="personal-details">
          <th className="th-1">
            {" "}
            <tr> Personal Details </tr>{" "}
          </th>
          <th className="th-2">
            {" "}
            <tr> Contact Details </tr>{" "}
          </th>
          <th className="th-3">
            {" "}
            <tr> Delivary Details </tr>{" "}
          </th>
        </div>{" "}
        <hr />
        <form className="form1">
          <div>
            {" "}
            <label className="id-label"> Customer ID </label>
            <br />
            <input
              type="phone"
              className="input_1"
              placeholder="456543124"
              required
            />{" "}
          </div>

          <div>
            {" "}
            <label className="name-label"> Full Name </label>
            <input
              type="text"
              className="input-2"
              placeholder="Mohammad Waseem "
              required
            />{" "}
          </div>

          <div>
            {" "}
            <div className="gender-div">
              <label className="gender-label">Gender</label> <br />
              <div className="checkboxes">
                <label>
                  <input
                    id="male"
                    type="radio"
                    name="gender"
                    value="male"
                    className="hidden"
                    required
                  />
                  <span className="span_div" > UNSPECIFIED </span>
                </label>
                <label>
                  <input
                    id="female"
                    type="radio"
                    name="gender"
                    value="male"
                    className="hidden"
                    required
                  />
                  <span>MALE </span>
                </label>
                <label>
                  <input
                    id="other"
                    type="radio"
                    name="gender"
                    value="male"
                    className="hidden"
                    required
                  />
                  <span>FEMALE</span>
                </label>
              </div>
              <div className="language-1">
                <label className="language-label"> Language </label> <br />
                <select className="select-1">
                  <option value="English"> English </option>
                  <option value="Hindi"> Hindi </option>
                  <option value="Arabic"> Arabic </option>
                </select>
              </div>
            </div>
          </div>

          <div className="customer-div">
            <div className="nation">
              <label className="nationality-1"> Nationality </label> <br />
              <div className="nation_div">
                {" "}
                <select className="select-2">
                  <option value="Arab"> Arab </option>
                  <option value="indian"> Indian </option>
                </select>
              </div>
            </div>

            <div className="vip_div">
              <div className="vip">
                {" "}
                <label className="vip-customer"> Vip Customer </label> <br />
              </div>
              <div>
                <select className="select-3">
                  <option value="yes"> Yes </option>
                  <option value="no"> No </option>
                </select>
              </div>
            </div>
          </div>
          <Link to="/5" >
          <button className="btn-2"> Next </button>
        </Link>
        </form>
      </div>
      <footer className="foot-1"></footer>
    </div></>
  );
}

export default Display7;
