import React, { useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
// import Inventorynext from "./Inventorynext";
import "./Display2.css";
import { Link } from "react-router-dom";

const Display2 = () => {
    const [show, setShow] = useState(false);

    const showHandler = () => {
        setShow(true)
    }

    const closeHandler = () => {
        setShow(false)
    }

  return (
    <>
      <div className="black"> </div>

      <div className="icon">
        <div className="btn_back_div">
          {" "}
          <Link to="/">
            <button className="btn_back">
              {" "}
              <BsArrowLeftShort /> Back{" "}
            </button>
          </Link>
        </div>
        <h4>
          {" "}
          <span>Home</span>Center{" "}
        </h4>
      </div>
      <div className="container">
        <div className="inventory-box">
          <h3>Inventory Details</h3>
          <h6 className="caslla">Caslla 180X210 Bed Set W/Wdrb</h6>
          <div className="box">
            <div className="radio">
              <input type="radio" name="radio1" id="check1" onClick={() => showHandler()}/>
            </div>
            <div className="warehouse">
              <h4 className="were">Warehouse</h4>
              <p className="uae">BC VW UAE RDC for PWH - 1001000</p>
              <p className="qty">
                Qty <span className="bold">100</span>
              </p>
            </div>
          </div>
          <div className="box">
            <div className="radio">
              <input type="radio" name="radio1" id="check2" />
            </div>
            <div className="warehouse">
              <h4 className="were">Selling Store</h4>
              <p className="uae">HC - Sky Garden</p>
              <p className="qty">
                Qty <span className="bold">100</span>
              </p>
            </div>
          </div>
          <button>
            Check in Buddy Stores <BsFillCaretRightFill className="errow" />
          </button>

          <h6 className="grandeur">Grandeur Drssr W/Mirr-Wge</h6>
          <div className="box">
            <div className="radio">
              <input type="radio" name="radio1" id="check3" />
            </div>
            <div className="warehouse">
              <h4 className="were">Warehouse</h4>
              <p className="uae">BC VW UAE RDC for PWH - 1001000</p>
              <p className="qty">
                Qty <span className="bold">100</span>
              </p>
            </div>
          </div>
          <div className="box">
            <div className="radio">
              <input type="radio" name="radio1" id="check4" />
            </div>
            <div className="warehouse">
              <h4 className="were">Selling Store</h4>
              <p className="uae">HC - Sky Garden</p>
              <p className="qty">
                Qty <span className="bold">100</span>
              </p>
            </div>
          </div>
          <button>
            Check in Buddy Stores <BsFillCaretRightFill className="errow" />
          </button>
          <div className="next">
            <Link to="/3">
              <button>Next</button>
            </Link>
          </div>
        </div>
      </div>

    {show && <div className="inventorynext">
    <div className="heading">
        <p className="head">Buddy Store List</p>
        <p className="head-a">Qty</p>
    </div>
    <div className="heading">
        {/* <input className='check' type='radio'/> */}
        <p className="buddy">HC - Global Fesval City</p>
        <p className="qty">100</p>
    </div>
    <div className="heading">
        <input className="check" type="radio" />
        <p className="buddy">HC - Global Fesval City</p>
        <p className="qty">100</p>
    </div>
    <div className="heading">
        <input className="check" type="radio" />
        <p className="buddy">HC - Global Fesval City</p>
        <p className="qty">100</p>
    </div>
    <div className="heading">
        <input className="check" type="radio" />
        <p className="buddy">HC - Global Fesval City</p>
        <p className="qty">100</p>
    </div>
    <div className="heading">
        <input className="check" type="radio" />
        <p className="buddy">HC - Global Fesval City</p>
        <p className="qty">100</p>
    </div>
    <div className="heading">
        <input className="check" type="radio" />
        <p className="buddy">HC - Global Fesval City</p>
        <p className="qty">100</p>
    </div>
    <div className="heading">
        <input className="check" type="radio" />
        <p className="buddy">HC - Global Fesval City</p>
        <p className="qty">100</p>
    </div>
    <div className="heading">
        <input className="check" type="radio" />
        <p className="buddy">HC - Global Fesval City</p>
        <p className="qty">100</p>
    </div>
    <div className="heading">
        <input className="check" type="radio" />
        <p className="buddy">HC - Global Fesval City</p>
        <p className="qty">100</p>
    </div>
    {/* <div className="heading">
        <input className="check" type="radio" />
        <p className="buddy">HC - Global Fesval City</p>
        <p className="qty">100</p>
    </div> */}
    {/* <div className="heading">
        <input className="check" type="radio" />
        <p className="buddy">HC - Global Fesval City</p>
        <p className="qty">100</p>
    </div> */}
    <div className="heading">
        <input className="check" type="radio" />
        {/* <p className="buddy">HC - Global Fesval City</p>
        <p className="qty">100</p> */}
    </div>
    <div className="confirm">
        <button onClick={() => closeHandler()}>CONFIRM</button>
    </div>
    </div>}
    </>
  );
};

export default Display2;
