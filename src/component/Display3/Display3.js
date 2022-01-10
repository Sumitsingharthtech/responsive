import React from "react";

import "./Display3.css";

const Display3 = () => {
  return (
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
<div className="border_div" >

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


</div>
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
             
              <input
                className="input_next"
                type="submit"
                value="NEXT"
              ></input>
            </div>
    </div>

   
  );
};

export default Display3;
