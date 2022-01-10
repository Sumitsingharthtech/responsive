import React, { useState } from "react";
import {BsFillCaretRightFill} from 'react-icons/bs'
import Inventorynext from './Inventorynext'
import './Display2.css';

const Display2 = () => {
    const[showSign, setshowSign]=useState(false);
    const onClickHandler=()=>{
        setshowSign(true);
    }
    return (
        <>
        <div className='container'>
                <div className='inventory-box'>
                    <h3>Inventory Details</h3>
                    <h6 className='caslla'>Caslla 180X210 Bed Set W/Wdrb</h6>
                    <div className='box'>
                        <div className='radio'><input type='radio' onClick={onClickHandler} />
                        {showSign && <Inventorynext/> }
                        </div>
                        <div className='warehouse'>
                            <h4 className='were'>Warehouse</h4>
                            <p className='uae'>BC VW UAE RDC for PWH - 1001000</p>
                            <p className='qty'>Qty <span className='bold'>100</span></p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='radio'><input type='radio'/></div>
                        <div className='warehouse'>
                            <h4 className='were'>Selling Store</h4>
                            <p className='uae'>HC - Sky Garden</p>
                            <p className='qty'>Qty <span className='bold'>100</span></p>
                        </div>
                    </div>
                    <button>Check in Buddy Stores <BsFillCaretRightFill className='errow'/></button>

                    <h6 className='grandeur'>Grandeur Drssr W/Mirr-Wge</h6>
                    <div className='box'>
                        <div className='radio'><input type='radio'/></div>
                        <div className='warehouse'>
                            <h4 className='were'>Warehouse</h4>
                            <p className='uae'>BC VW UAE RDC for PWH - 1001000</p>
                            <p className='qty'>Qty <span className='bold'>100</span></p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='radio'><input type='radio'/></div>
                        <div className='warehouse'>
                            <h4 className='were'>Selling Store</h4>
                            <p className='uae'>HC - Sky Garden</p>
                            <p className='qty'>Qty <span className='bold'>100</span></p>
                        </div>
                    </div>
                    <button>Check in Buddy Stores <BsFillCaretRightFill className='errow'/></button>
                    <div className='next'>
                    <button>Next</button>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default Display2;

