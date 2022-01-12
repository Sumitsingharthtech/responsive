import React, {useState} from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { IoMdArrowDropleft } from "react-icons/io";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import "./Display4.css";

const Display4 = () => {
  let history = useHistory();

  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  }

  const SubmitHandler = (e) => {
    console.log(value);
    history.push("/")
  }
  
  return (
    <>
      <div className="black"> </div>
      <div className="icon">
        <div className="btn_back_div">
          {" "}
          <Link to="/6">
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
        <div className="text_div">
          {" "}
          <h2> Delivery Settings </h2>
        </div>
        <div className="main_div">
          <form onSubmit={() => SubmitHandler()}>
            <div className="form_div">
              <h5> Muhammed Waseem</h5>
              <label for="fname">
                <p>Jable Ali, Street 1, Dubai - Mobile:- +917 505201234</p>
              </label>

              <input
                placeholder=" Special Instructions"
                className="input_div"
                type="text"
                id="fname"
                value="value"
                onChange={() => changeHandler()}
              />
            </div>
            <div className="radio_div">
              <input type="radio" id="lname" name="lname" />
              <span>
                <button className="button_Class"> Express Delivery</button>
              </span>
            </div>
            <div className="select_div">
              <h5> Select Delivery Slot</h5>
            </div>
            <div>
              <div className="date_div">
                <div>
                  <p>February</p>
                </div>
                <div>
                  {" "}
                  <div className="dot_div">
                    <IoMdArrowDropleft className="Arrow" />
                    <span class="dot">1</span>
                    <span class="dot">2</span>
                    <span class="dot">3</span>
                    <span class="dot">4</span>
                    <span class="dot">5</span>
                    <span class="dot">6</span>
                    <span class="dot">7</span>
                    <RiArrowRightSFill className="Arrow" />
                  </div>
                </div>
              </div>
              <div className="slot_div">
                <div>
                  {" "}
                  <p> Slot 1</p> <p> 10-2</p>{" "}
                </div>
                <div>
                  {" "}
                  <p> Slot 2</p> <p> 2-6</p>{" "}
                </div>
                <div>
                  {" "}
                  <p> Slot 3</p> <p> 6-8</p>{" "}
                </div>
                <div>
                  {" "}
                  <p> Slot 4</p> <p> 10-2</p>{" "}
                </div>
                <div>
                  {" "}
                  <p> Slot 5</p> <p> 2-6</p>{" "}
                </div>
              </div>
              <div className="input_div1">
                <button type="submit"> SUBMIT</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Display4;
