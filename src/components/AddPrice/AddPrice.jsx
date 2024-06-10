/* eslint-disable no-unused-vars */
import React from 'react';
import '../AddPrice/AddPrice.css'
import photo1 from '../../assets/img/1000_F_471423073_3T0hDR979XEoagEtVVNQ0Oi5jl7s1HCh.jpg'
import photo2 from '../../assets/img/1_6VtZsivSyrp8fUDG0wUezQ.jpg'
import photo3 from '../../assets/img/photo-1605187151664-9d89904d62d0.avif'
import photo4 from '../../assets/img/photo-1616091216791-a5360b5fc78a.avif'
import photo5 from '../../assets/img/autumn-aesthetic-271.jpg'
import photo6 from '../../assets/img/c19731b53c08b6c289a37326ce4ed158.jpg'
import chocolate from '../../assets/img/hotCHoco.webp'
import icetea from '../../assets/img/icetea.jpg'
import latte from '../../assets/img/latte.jpg'
const AddPrice = () => {
  return (
    <>
      <div id='programmes'>
        <div className="container-programmes">
          <div className="container-programmes-active">
            <h2>Photos______</h2>
            <h1>GALLERY</h1>
            <div className='contant-gallery'>
              <div className='contant-gallery-div'>
                <img style={{
                  width: "250px",
                  height: "250px"
                }} src={photo1} alt="" />
                <img style={{
                  width: "200px",
                  height: "200px"
                }} src={photo2} alt="" />
                <img style={{
                  width: "230px",
                  height: "230px"
                }} src={photo3} alt="" />
                <img style={{
                  width: "200px",
                  height: "200px"
                }} src={photo4} alt="" />
                <img style={{
                  width: "220px",
                  height: "220px"
                }} src={photo5} alt="" />
                <img style={{
                  width: "220px",
                  height: "220px"
                }} src={photo6} alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div id="price">
        <div className="container-price">
          <p>PrIcE</p>
          <div className="price_item_active">
            <div className='price-card'>
              <div>
                <h3>Date</h3>
                <h1>Hot chocolate</h1>
              </div>
              <div>
                <h3>Event Title</h3>
                <h1>$2 — S</h1>
                <h1>$3 — L</h1>
                <h1>$4 — M</h1>
              </div>
              <div>
                <h3>Photo</h3>
                <img style={{
                  width: "200px",
                  height: "150px",
                  borderRadius: "10px"
                }} src={chocolate} alt="" />
              </div>
            </div>
            <div className='price-card'>
              <div>
                <h3>Date</h3>
                <h1>Ice tea coffee</h1>
              </div>
              <div>
                <h3>Event Title</h3>
                <h1>$1 — S</h1>
                <h1>$2 — L</h1>
                <h1>$3 — M</h1>
              </div>
              <div>
                <h3>Photo</h3>
                <img style={{
                  width: "200px",
                  height: "150px",
                  borderRadius: "10px"
                }} src={icetea} alt="" />
              </div>
            </div>
            <div className='price-card'>
              <div>
                <h3>Date</h3>
                <h1>Latte coffee</h1>
              </div>
              <div>
                <h3>Event Title</h3>
                <h1>$1 — S</h1>
                <h1>$2 — L</h1>
                <h1>$3 — M</h1>
              </div>
              <div>
                <h3>Photo</h3>
                <img style={{
                  width: "200px",
                  height: "150px",
                  borderRadius: "10px"
                }} src={latte} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPrice;