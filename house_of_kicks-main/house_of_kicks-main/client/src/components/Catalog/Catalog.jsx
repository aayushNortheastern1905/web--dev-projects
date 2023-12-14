// components/Catalog.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';

const Catalog = ({ shoesData }) => {
  const columnsPerRow = {
    lg: 4, 
    md: 6, 
    sm: 12, 
  };

  return (
    <div>
      {shoesData.reduce((rows, shoe, index) => {
        if (index % columnsPerRow.lg === 0) {
          rows.push([]);
        }
        rows[rows.length - 1].push(shoe);
        return rows;
      }, []).map((row, rowIndex) => (
        <div key={rowIndex} className="row my-3 mx-5">
          {row.map((shoe, columnIndex) => (
            <div
              key={columnIndex}
              className={`col-lg-${12 / columnsPerRow.lg} col-md-${12 / columnsPerRow.md} col-sm-${columnsPerRow.sm}`}
            >
              <Link to={`/product/${shoe.modelName}`} className="card-link">
                <div className="card border-0">
                  <img
                    src={shoe.assets.img[0]}
                    className="card-img-top img-fluid ${columnsPerRow.sm === 12 ? 'mobile-image' : ''}"
                    alt={`Card ${rowIndex * columnsPerRow.lg + columnIndex + 1}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{shoe.brand} {shoe.modelName}</h5>
                    <p className="card-text">{shoe.gender}</p>
                    <p className="shoe-price">${shoe.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Catalog;
