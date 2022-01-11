import React from "react";
import './Display5.css';
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from 'react-icons/bs';

function Display5() {
  return (
   <>
    <div className="black"> </div>
<div className="icon">
    <Link to="/4" >
  <button className="btn">  <BsArrowLeftShort /> Back </button>
  </Link>
  <h4 > <span>home</span>centre </h4>
</div>
    <div className="main">
      
      <hr />
      <h1 className="Address-h1">Add Address Details </h1>

      <div className="container">
        <div className="personal-details">
          <th className="th-1">
            {" "}
            <tr> Personal Details </tr>{" "}
          </th>
          <th className="th-2">
            {" "}
            <tr> Contact Details </tr>
          </th>
          <th className="th-3">
            {" "}
            <tr> Delivary Details </tr>
          </th>
        </div>

        <hr  />

        <form className="form-1">
          <label> Mobile No. </label>
          <input
            type="phone"
            className="input-1"
            placeholder="1111111111"
            required
          />

          <label> Alternate Mobile No. </label>
          <input
            type="phone"
            className="input-1"
            placeholder="2222222222"
            required
          />

          <label> Landphone </label>
          <select name="phone" className="select_1" placeholder="3333333">
            <option value="office"> office </option>
            <option value="Personal"> Personal </option>
            <option value="home"> Home </option>
            <option value="Alternate"> Alternate </option>
          </select>

          <label> Email </label>
          <input
            type="mail"
            className="input-1"
            placeholder="test@gmail.com"
            required
          />

        <div className="input_btn2" > 
        <Link to="/6" >
          <button className="btn-2"> Next </button>
          </Link>
          </div>
        </form>
      </div>
      <footer className="foot-1"></footer>
    </div></>
  );
}

export default Display5;
