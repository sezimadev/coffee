/* eslint-disable no-unused-vars */
import React from 'react';
import './BlockAbout.css'
import svg from '../../assets/img/Union.svg'
import volna from '../../assets/img/photo (1).svg'
import cafe from '../../assets/img/bf1315fd65aa0da13f601d88325a7a3a.jpg'

const BlockAbout = () => {
  return (
    <div id='block'>
      <div className="block-about">
        <div className="block-about-active">
          <div className='imglog'>
            <p>____________________________________</p>
            <img className='union' src={svg} alt="" />
            <p>____________________________________</p>

          </div>
          <div className='block-title'>
            <h2>OUR ADVANTAGES ARE IN</h2>
            <h1>THE GRAIN</h1>
          </div>
          <div className='big-block'>
            <div>
              <h1>ABOUT</h1>
              <p>Name Coffee is a#nbsp;network <br /> of#nbsp;coffee shops operating <br /> throughout Europe, providing#nbsp;a <br /> wide selection of#nbsp;coffee drinks, <br /> desserts and sandwiches at <br /> an#nbsp;affordable price.</p>
              <h3>Instagram</h3>
            </div>
            <img className='block_img' width={500} height={560} src={cafe} alt="" />
          </div>
          <div className="imgVol">
            <img src={volna} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlockAbout;