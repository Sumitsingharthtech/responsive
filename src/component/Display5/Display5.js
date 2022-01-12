import React from "react";
import './Display5.css';
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from 'react-icons/bs';

function Display5() {
  return (
   <>
    <div className="black"> </div>
<div className="icon">
   <div className="btn_back_div" > <Link to="/4" >
  <button className="btn_back">  <BsArrowLeftShort /> Back </button>
  </Link></div>
  <h4 > <span>Home</span>Center </h4>
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
            type="text"
            className="input-1"
            placeholder="xxx-xxxx-xxxx"
            required
            maxLength="13"
          />

          <label> Alternate Mobile No. </label>
          <input
            type="text"
            className="input-1"
            placeholder="xxx-xxxx-xxxx"
            required
            maxLength="13"
          />

          <label> Landphone </label>
          <select name="phone" className="select_1" placeholder="3333333"  >
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
   
    </div></>
  );
}

export default Display5;
