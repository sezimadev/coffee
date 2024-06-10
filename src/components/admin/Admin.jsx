/* eslint-disable no-unused-vars */
import React from 'react';
import '../admin/Admin.css'
import coffee2 from '../../assets/img/2cofee.png'
import coffee_more from '../../assets/img/morecoffee.png'
import cup_coffee from '../../assets/img/glasscoffee.png'
import svg from '../../assets/img/photo (1).svg'

const Admin = () => {
  return (
    <div id='admin'>
      <div className="container-admin">
        <div className="admin-item-activ">

          <div className='section1'>
          <img className='coffee1' src={coffee2} alt="" />
          <div className='admin_text'>
            <h3> FIND COMFORT <br /> OVER A CUP OF OUR</h3>
            <h1>Coffee</h1>
          </div>
          <img className='coffee2' src={coffee_more} alt="" />
          </div>

          <div className='section2'>
            <div>
              <p>The taste of the coffee is wonderful, but incomprehensible. You have <br />to#nbsp;learn to understand and love it, and only then can you truly <br /> enjoy it to#nbsp;the#nbsp;fullest.</p>
              <span>Explore our coffee ______</span>
            </div>
            <img className='cup_coffee' src={cup_coffee} alt="" />
          </div>
          <img className='block' src={svg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Admin;