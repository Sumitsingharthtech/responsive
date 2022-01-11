import React from 'react'
import "./Display6.css";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from 'react-icons/bs';
function Display6() {
    return (
      <>
         <div className="black"> </div>
<div className="icon">
    <Link to="/5" >
  <button className="btn">  <BsArrowLeftShort /> Back </button>
  </Link>
  <h4 > <span>home</span>centre </h4>
</div>
        <div className='main'>
            

            <h1 className='Address-h1'>Add Address Details </h1>

            <div className='personal-1'>
                <h3 className='per-h1'> Personal Details </h3>
                <h3 className='per-h2'> Contact details </h3>
                <h3 className='per-h3'> Delivary Details </h3>
            </div>
            <hr />

            <div className='container'>
                <form className='form_1'>
                    <div>
                    <div className='main-div-1'>
                    <div className='div_1'>
                        <label> Address 1* </label> <br />
                        <input type="text" className='input-11' placeholder='Jabel Ali' required />
                    </div>
                    <div className='div-22'>
                    <label> Address 2* </label> <br />
                    <input type="text"  className='input-11' placeholder='Street 2' required />
                    </div>
                    </div>

                    <div className='main-div-2'>
                    <div className='div-1'>
                        <label> Floor No.* </label> <br />
                        <input type="text"  className='input-11' placeholder='22' required />
                    </div>

                    <div className='div-22'>
                    <label> Parking Availability* </label> <br />
                    <select name="Yes" id="select-1">
                            <option value="yes">Yes</option>
                            <option value="no"> No</option>
                        </select>
                    </div>
                    </div>

                    
                    <div className='main-div-2'>
                    <div className='div-11'>
                        <label> Access Restrictions* </label> <br />
                        <select name="Yes" id="select-2">
                            <option value="yes">Yes</option>
                            <option value="no"> No</option>
                        </select>
                    </div>

                    <div className='div-22'>
                  <div className='div-222' >  <label className='lift'> Lift Size* </label> <br />
                    <select name="Yes" id="select-3">
                            <option value="yes"> 2 Meter width and height </option>
                            <option value="no"> No</option>
                            <option value="city"> Other  </option>
                        </select></div>
                    </div>
                    </div>

                    
                    <div className='main-div-2'>
                    <div className='div-11'>
                        <label> Timing Restrictions* </label> <br />
                        <select name="Yes" id="select-4">
                            <option value="yes">Yes</option>
                            <option value="no"> No</option>
                        </select>
                    </div>

                    <div className='div-22'>
                    <div><label className="label-near"> Nearest landmark* </label> <br />
                    <input type="text"  className='nearest-1' placeholder='Near Jabel Ali Super Market'/></div>
                    </div>
                    </div>

                    
                    <div className='main-div-2'>
                    <div className='div-11'>
                        <label> Pinpoint SMS* </label> <br />
                        <select name="Yes" id="select-5">
                            <option value="yes">Yes</option>
                            <option value="no"> No</option>
                        </select>
                    </div>

                    <div className='div-22'>
                  <div>  <label className='state-1'> State/Region* </label> <br />
                    <select name="Yes" id="select-6">
                            <option value="country">Dubai</option>
                            <option value="city"> Saudi </option>
                            <option value="city"> Other </option>
                        </select></div>
                    </div>
                    </div>

                    <div className='main-div-2'>
                    <div className='div-11'>
                      <div>  <label> City* </label> <br />
                        <select name="Yes" id="select-7">
                            <option value="city">Jabel Ali</option>
                            <option value="city"> Other</option>
                        </select></div>
                    </div>

                    <div className='div-22'>
                    <label className='country-1'> Country* </label> <br />
                    <select name="Yes" id="select-8">
                            <option value="city"> United Arab Emirates </option>
                            <option value="city"> Other</option>
                        </select>
                    </div>
                    </div>
<Link to="/7">
                    <button className='last-btn'> ADD  ADDRESS </button>
                    </Link>
                    </div>
                   
                </form>
            </div>
            <footer className='foot-1'>
            </footer>
        </div></>
    )
}
export default Display6;
