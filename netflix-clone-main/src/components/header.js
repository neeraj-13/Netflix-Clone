import React from "react"
import netimg from './netflix.png'
import "./header.css"
const Header=()=>{
return <React.Fragment>
    <nav>
           <img
           src={netimg}
           alt="logo"
           className="netflixlogo"
           >
           </img>
    
    
    <ul className="links">
    <li><span className="auto">UNLIMITED TV SHOWS AND MOVIES</span></li>
        <li className="nav__link">
            <button className="btn">Join now</button>
        </li>
        <li className="nav__link">
            <button className="btn2">Sign in</button>
        </li>
    </ul>
    
    </nav>

</React.Fragment>
};
export default Header;
