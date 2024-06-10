import React from 'react'; React
import { IoReorderThreeOutline } from "react-icons/io5";
import './Header.css'



const Header = () => {
  return (
    <div id='header'>
      <div className="container">
        <div className="header">
          <span><IoReorderThreeOutline /></span>
          <h1>GO TO COFFEE</h1>
          <select >
            <option value="">EN</option>
            <option value="">RUS</option>
            <option value="">KYR</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;