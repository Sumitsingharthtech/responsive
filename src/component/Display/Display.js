import React from 'react'
import './Display.css';
import { Link } from "react-router-dom";
import { BsFillBellFill } from 'react-icons/bs';
import { BsMicrosoft } from 'react-icons/bs';
import { BiDollarCircle } from 'react-icons/bi';

const Display = () => {
    return (
        <>
          <div className="black"> </div>

<div className="icon">
    


  <h4 > <span>home</span>centre </h4>
</div>
          <div className='navbar'>


              
              <div className='container'>
                  {/* <button className='back-button'>
                     <BiArrowBack/> Back
                  </button> */}
                  <div className='assistance-button1_div'  ><button className='assistance-button1'>
                     <BsFillBellFill/>  CALL FOR ASSITANCE 
                  </button></div>
              </div>
             </div>
             <div className='about'>
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
                             <td><b>Caslla 180X210 Bed Set W/Wdrb</b>  <p><b>143512589</b></p> <div className='button_remove' ><button className='remove'>Remove Item</button></div>  </td>
                             <td>AED 3000</td>
                             <td>20</td>
                             <td>1</td>
                             <td>3000.00</td>
                         </table>
                         <table>
                         <td><b>Caslla 180X210 Bed Set W/Wdrb</b><p><b>143512589</b>  </p> <div className='button_remove' ><button className='remove'>Remove Item</button></div>  </td>
                             <td>AED 3000</td>
                             <td>20</td>
                             <td>1</td>
                             <td>1500.00</td>
                         </table>
                         <p className='promotional'>*Promotional items will not have further discounts</p>
                     </div>
                     <div className='box-2'>
                         <div className='card'>
                        <div className='card_div' > <p   >Your Shukrans Balance</p></div>
                         <p className='bold'>5825  <span className='dollar' > <BiDollarCircle/> </span> </p>
                         <p>Value AED 250</p>
                         <p>21 Pending Shukrans</p>
                         <p>1800  0000  4778  7906</p>
                         </div>
                         <h6>HELPFUL TOOLS</h6>
                         <div className='currency-calculator-div' ><button className='currency-calculator'> <BsMicrosoft/>  CURRENCY CALCULATOR</button></div>
                         <h6 className='subtotal'>Subtotal (4 Items)</h6>
                         <h6 className='aed'>AED <span>4600</span></h6>
                         <h6 className='saved'>You have saved AED 50.00 today !</h6>
                         <button className='card-a'>CHECKOUT NOW</button>
                         <p className='order_div_text' > <BiDollarCircle className='order_div' /> Your order could earn you 100 Shukrans</p>
                     </div>
                 </div>

             
             </div>
             <Link to="/1" >
             <div className='btn_ahead' > <button>  Next</button>
             
              </div>
              </Link>
       
        </>
    )
}

export default Display;
