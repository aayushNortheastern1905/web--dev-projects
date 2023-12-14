import React, { useState } from 'react';
import './ProductDetails.css';
import Rating from 'react-rating-stars-component';
import PriceHistoryGraph from '../PriceHistoryComponent/PriceHistoryGraph';

const ProductDetails = ({ shoe }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeClick = (size) => {
    if (!shoe.availableSizes.includes(size)) {
      setSelectedSize(size);
      console.log(selectedSize);
    }
  };

 

  const shoeId = shoe._id;
  const shoePriceHistory = shoe.priceHistory;
  console.log("shoe data",shoePriceHistory)
  const userId = localStorage.getItem('_id');
  const data = [
    { date: '2023-12-07', price: 180 },
    { date: '2023-12-09', price: 200 },
    { date: '2023-12-11', price: 170 },
    { date: '2023-12-13', price: 180 },
    { date: '2023-12-15', price: 200 },
    { date: '2023-12-17', price: 150 },
    { date: '2023-12-19', price: 90 },
    { date: '2023-12-21', price: 250 },
  ];

  


  if (!shoe) {
    return <div>Shoe not found</div>;
  }

  const addToCart = async () => {
    try {
      const response = await fetch(`http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com/user/cart/add/${shoeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });


      setIsAddedToCart(true);

      setTimeout(() => {
        setIsAddedToCart(false);
      }, 3000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const renderImages = () => {
    return shoe.assets.img.slice(1, 5).map((image, index) => (
      <div key={index} className="col-md-6 shoe-img-container">
        <img src={image} alt={`${shoe.modelName} - ${index + 1}`} className="shoe-img img-fluid" />
      </div>
    ));
  };

  const renderShoeSizes = () => {
    const shoeSizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14];



    const isMobileView = window.innerWidth < 768;

    if (isMobileView) {
      return (
        <div className="mt-3">
          <label htmlFor="shoe-sizes" className="form-label">Select Size:</label>
          <select id="shoe-sizes" className="form-select">
            {shoe.availableSizes.map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </select>
        </div>
      );
    } else {
      return (
        <div className="row mt-3 shoe-sizes-container">
      {shoeSizes.map((size, index) => {
        const isAvailable = !shoe.availableSizes.includes(size);
        const isSelected = selectedSize === size;

        const boxClassName = `col-md-4 shoe-size-box-container`;
        const sizeBoxClassName = `shoe-size-box ${isAvailable ? 'sold-out' : ''} ${isSelected ? 'selected' : ''}`;

        const handlePointerClick = () => {
          if (isAvailable) return; 
          setSelectedSize(size); 
        };

        return (
          <div key={index} className={boxClassName}>
            <div
              className={sizeBoxClassName}
              onClick={handlePointerClick}
              style={{
                cursor: isAvailable ? 'not-allowed' : 'pointer',
                backgroundColor: isSelected ? '#CF0A2C' : '',
                color: isSelected ? 'white' : 'black',
              }}
            >
              {size}
            </div>
          </div>
        );
      })}
    </div>
      );
    }
  };

  return (
    <div className="row">
      <div className="col-md-7">
        <div className="row">{renderImages()}</div>
      </div>
      <div className="col-md-5 shoe-details">
        <span>{`${shoe.gender}'s Shoes`}</span>
        <h4 className='shoetit'>{shoe.modelName}</h4>
        <span className="shoe-price">${shoe.price}</span>
        <Rating
          count={5}
          value={shoe.rating}
          size={24}
          edit={false}
          isHalf={true}
          activeColor="#cd0606"
        />
        {renderShoeSizes()}
        <div className="mt-3">
          <div className="custom-buy-now" onClick={addToCart}>
            BUY NOW
          </div>
        </div>
        <p className="shoe-description">{shoe.description}</p>

        <PriceHistoryGraph  data = {shoePriceHistory}/>

        {isAddedToCart && (
          <div className="popup">
            <div className="popup-message">
              <div className="tick-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="none"
                  stroke="#00cc00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>Sneakers Added to Cart</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
