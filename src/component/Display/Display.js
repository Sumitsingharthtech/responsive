import React from 'react'
import './Display.css';
import { Link } from "react-router-dom";
const Display = () => {
    return (
        <>
          <div className='navbar'>
              {/* <div className='container'>
                  <button className='back-button'>
                     <BiArrowBack/> Back
                  </button>
                  <button className='assistance-button'>
                     <BsFillBellFill/> Assistance
                  </button>
              </div> */}
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
                             <td>Caslla 180X210 Bed Set W/Wdrb<p>143512589</p><button className='remove'>Remove Item</button></td>
                             <td>AED 3000</td>
                             <td>20</td>
                             <td>1</td>
                             <td>3000.00</td>
                         </table>
                         <table>
                         <td>Caslla 180X210 Bed Set W/Wdrb<p>143512589</p><button className='remove'>Remove Item</button></td>
                             <td>AED 3000</td>
                             <td>20</td>
                             <td>1</td>
                             <td>1500.00</td>
                         </table>
                         <p className='promotional'>*Promotional items will not have further discounts</p>
                     </div>
                     <div className='box-2'>
                         <div className='card'>
                         <p>Your Shukrans Balance</p>
                         <p className='bold'>5825</p>
                         <p>Value AED 250</p>
                         <p>21 Pending Shukrans</p>
                         <p>1800  0000  4778  7906</p>
                         </div>
                         <h6>HELPFUL TOOLS</h6>
                         <button className='currency-calculator'>CURRENCY CALCULATOR</button>
                         <h6 className='subtotal'>Subtotal (2 Items)</h6>
                         <h6 className='aed'>AED <span>4450</span></h6>
                         <h6 className='saved'>You have saved AED 50.00 today !</h6>
                         <button className='card-a'>CHECKOUT NOW</button>
                         <p>Your order could earn you 100 Shukrans</p>
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
