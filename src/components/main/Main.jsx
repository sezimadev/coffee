/* eslint-disable no-unused-vars */
import React from 'react';
import './Main.css'

const Main = () => {
  return (
    <div id='main'>
      <div className="container-main">
        <div className="main-item-activ">
          <div className='main-text'>
            <p>Our Process______</p>
            <h1>STAGES OF <br /> PRODUCTION</h1>
          </div>
          <div className='productions'>
            <div className='products-top'>
              <div className='num1'>
                <h2>1</h2>
                <div>
                  <h3>Сoffee selection</h3>
                  <h4>We are looking for the best coffee suppliers. <br />The coffee will then be delivered <br /> to#nbsp;the warehouse.</h4>
                </div>
              </div>
              <div className='num2'>
                <h2>2</h2>
                <div>
                  <h3>Сoffee processing</h3>
                  <h4>Coffee beans are carefully processed <br />
                  using modern technology.</h4>
                </div>
              </div>
            </div>
            <div className='num3'>
              <h2>3</h2>
              <div>
                <h3>Сoffee selection</h3>
                <h4>Fresh coffee arrives in our coffee shop, <br /> and you enjoy new flavors.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;