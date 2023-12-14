import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../Navigation/Navigation';
import './ProductCatalog.css';
import Catalog from '../Catalog/Catalog';
import ProductDetails from '../ProductDetails/ProductDetails';
import axios from 'axios';
import Spinner from '../Spinner/Spinner'

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [shoesData, setShoesData] = useState([]);
  const [loading, setLoading] = useState(true); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com/sneakers');

        console.log("response of sneakers", response)
        setShoesData(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  const filteredShoes = shoesData.filter((shoe) =>
    shoe.modelName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="catalog-container container-fluid">
      <Navigation onSearchChange={handleSearchChange}/>
      <Routes>
        <Route
          path="/"
          element={<Catalog shoesData={filteredShoes} />}
        />
        {filteredShoes.map((shoe) => (
          <Route
            key={shoe.modelName}
            path={`/product/${shoe.modelName}`}
            element={<ProductDetails shoe={shoe} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default ProductCatalog;
