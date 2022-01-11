import React from "react";
import {BsArrowLeftShort} from 'react-icons/bs'
import "./Display3.css";
import { Link } from "react-router-dom";

const Display3 = () => {
  return (

<>
<div className="black"> </div>
<div className="icon">
   <div className="btn_back_div" > <Link to="/2" >
  <button className="btn_back"  >  <BsArrowLeftShort /> Back </button>
  </Link></div>
  <h4 > <span>Home</span>center </h4>
</div>
    
    <div className="container">
      <div className="heading">
        {" "}
        <h2>Select Delivery Code</h2>{" "}
      </div>
      <div className="subheading">
        {" "}
        <h3>BC VW UAE RDC for PWH - 1001000</h3>
        <h6>1001000 - Warehouse</h6>{" "}
      </div>
<div><div className="border_div" >

<table>
  <tr className="table_tr" >
    <th> Item Details</th>
    <th> Qty</th>

  </tr>
  <tr>
    <td>1. Castila 180*210 Bed Set W/Wdrb </td>
    <td> 1 </td>

  </tr>
  <tr>
    <td>2. Grandeur Drssr W/Mirr-Wge</td>
    <td>1 </td>
  
  </tr>
</table>


</div></div>
<div  className="form_div" >
<form>
  <label for="cars"> Select Delivey Code </label> <br/>
  <select name="cars" id="cars">
    <option value="volvo">WWD</option>
    <option value="saab">SSD</option>
    <option value="opel">OPD</option>
    <option value="audi">Audi</option>
  </select>
</form>
</div>
<div className="input_end" >
             
              <Link to="/4" ><input
                className="input_next"
                type="submit"
                value="NEXT"
              ></input></Link>
            </div>
    </div></>

   
  );
};

export default Display3;
