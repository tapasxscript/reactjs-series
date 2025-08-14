import React,{useState} from "react";
const Navbar=()=>{
    const [btnName,setBtnName] = useState("Light")
    return(
      <div className='navbar'>
        <h1>LOGO</h1>
        <ul className='menu-items'>
          <li>Men</li>
          <li>WoMen</li>
          <li>Kids</li>
          <li>Cart</li>
          <button onClick={()=>{btnName=== "Light"? setBtnName("Dark"): setBtnName("Light")}}>{btnName}</button>
        </ul>
      </div>
    )
  }
  export default Navbar;