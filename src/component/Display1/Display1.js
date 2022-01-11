import React from 'react'
import './Display1.css'

import {BsFillCaretRightFill} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BiCut} from 'react-icons/bi'
import {AiOutlineFileZip} from 'react-icons/ai'
import { Link } from "react-router-dom";



const Display1 = () => {
    return (
        <>
          {/* <div className='navbar'>
              <div className='container'>
                  <button className='back-button'><GiCancel className='icon'/>CANCEL</button>
                  <button className='back-button'><FiCircle className='icon'/> SELECT ALL</button>
                  <button className='back-button'><AiFillDelete className='icon'/>DELETE</button>
                  <button className='assistance-button'> <img  alt="delivery " src={Truck}/>  DELIVERY</button>
              </div>
             </div> */}
             <div className='about'>
             <div className="black"> </div>

<div className="icon">
    <Link to="/" >
  <button className="btn">  <BsArrowLeftShort /> Back </button>
  </Link>
  <h4 > <span>home</span>centre </h4>
</div>
                 <div className='container'>
                     <div className='box-1'>
                         <table>
                             <th>Item</th>
                             <th>Price</th>
                             <th>Points</th>
                             <th>Quantity</th>
                             <th>Total</th>
                         </table>
                         <table>
                         <input type="checkbox" id="box" name="box" value="box" />
                             <td>  <b>Caslla 180X210 Bed Set W/Wdrb<p>143512589</p></b> <button className='remove'>Remove Item</button></td>
                             <td>AED 3000</td>
                             <td>20</td>
                             <td>1</td>
                             <td>3000.00</td>
                         </table>
                         <table>
                         <input type="checkbox" id="box" name="box" value="box" />
                         <td> <b>Caslla 180X210 Bed Set W/Wdrb<p>143512589</p></b> <button className='remove'>Remove Item</button></td>
                             <td>AED 3000</td>
                             <td>20</td>
                             <td>1</td>
                             <td>3000.00</td>
                         </table>
                         <p className='promotional'>*Promotional items will not have further discounts</p>
                     </div>
                     <div><div className='box-2'>
                         <h5>Select A Discount Type</h5>
                         <ul>
                             <li> <BiCut/> Round Off  <BsFillCaretRightFill className='errow' />  </li>
                             <li><AiOutlineFileZip/>   Normal Discount <BsFillCaretRightFill className='errow'/>  </li>
                             <li>Employee Discount<BsFillCaretRightFill className='errow'/></li>
                             <li>Damage Discount<BsFillCaretRightFill className='errow'/></li>
                             <li>Auto Discount<BsFillCaretRightFill className='errow'/></li>
                         </ul>
                     </div></div>
                 </div>
                 
             </div>
             <Link to="/2" >
             <div className='btn_ahead' > <button>  Next</button>
             
              </div>
              </Link>
        </>
        
    )
}

export default Display1
