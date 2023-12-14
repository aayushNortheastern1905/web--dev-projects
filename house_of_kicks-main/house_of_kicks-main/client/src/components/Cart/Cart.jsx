import React, { useState, useEffect } from 'react';
import './Cart.css';
import Navigation from '../Navigation/Navigation';
import Spinner from '../Spinner/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import Paypal from '../PayPal/PayPal';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [checkout, setCheckOut] = useState(false);
    const userId = localStorage.getItem('_id');

    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        navigate({
          pathname: '/paypal',
          state: { totalPrice } // Send totalPrice as a prop through state
        });
      };

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await fetch('http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com/user/' + userId + '/cart/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setCartItems(data);
                    const totalPrice = data.reduce((acc, item) => acc + parseFloat(item.sneaker.price.replace('$', '')), 0).toFixed(2);
                    setTotalPrice(totalPrice);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (userId) {
            fetchCartData();
        }
    }, [userId]);

    const handleDelete = async (sneakerId) => {
        setIsDeleting(true);
        try {
            const response = await fetch(`http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com/user/cart/remove/${sneakerId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId }),
            });

            if (response.ok) {
                setCartItems(cartItems.filter(item => item.sneaker._id !== sneakerId));
                const updatedTotalPrice = cartItems
                    .filter(item => item.sneaker._id !== sneakerId)
                    .reduce((acc, item) => acc + parseFloat(item.sneaker.price.replace('$', '')), 0)
                    .toFixed(2);
                setTotalPrice(updatedTotalPrice);
                setIsDeleting(false);
            } else {
                throw new Error('Failed to delete');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
            setIsDeleting(false);
        }
    };

    return (
        <>
            <Navigation />
            {
                checkout ? <Paypal price={totalPrice}/> : <div className="d-flex justify-content-center">
                <div className='row cart-container'>
                    <h4 className='cart-title'>Sneakers in your bag :</h4>
                    {cartItems.map((item, index) => (
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={item.sneaker.assets.img[0]} height={60} width={60} alt="sneaker-image" style={{ borderRadius: '8px', marginRight: '10px' }} />
                                <h7>{item.sneaker.brand} {item.sneaker.modelName} - ${item.sneaker.price}</h7>
                            </div>
                            <div className='col-md-6'>
                                {isDeleting ? (
                                    <Spinner />
                                ) : (
                                    <button type="button" className='delete-button' onClick={() => handleDelete(item.sneaker._id)}>Delete</button>
                                )}
                            </div>
                        </div>
                    ))}
                    <h6 className='total-price'>Total : $ {totalPrice}</h6>
                    <form>
                        <h4 className='address-title'>Enter your address :</h4>
                        <div className="row mb-3 cart-form-row">
                            <div className="col">
                                <label htmlFor="streetAddress1" className="form-label">Street Address 1</label>
                                <input type="text" className="form-control" id="streetAddress1" />
                            </div>
                            <div className="col">
                                <label htmlFor="streetAddress2" className="form-label">Street Address 2</label>
                                <input type="text" className="form-control" id="streetAddress2" />
                            </div>
                        </div>
                        <div className="row mb-3 cart-form-row">
                            <div className="col">
                                <label htmlFor="city" className="form-label">City</label>
                                <input type="text" className="form-control" id="city" />
                            </div>
                            <div className="col">
                                <label htmlFor="state" className="form-label">State</label>
                                <input type="text" className="form-control" id="state" />
                            </div>
                        </div>
                        <div className="row mb-3 cart-form-row">
                            <div className="col">
                                <label htmlFor="pinCode" className="form-label">Pin Code</label>
                                <input type="text" className="form-control" id="pinCode" />
                            </div>
                        </div>
                        <div className="row mb-3 cart-form-row">
                            <div className="col">
                                    <button type="button" className='shop-now-button' onClick={() => {
                                        setCheckOut(true);
                                    }}>
                                        Place Order
                                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            }
        </>
    );
}

export default Cart;



// import React, { useState, useEffect } from 'react';
// import './Cart.css';
// import Navigation from '../Navigation/Navigation';
// import Spinner from '../Spinner/Spinner';
// import { Link, useNavigate } from 'react-router-dom';
// import Paypal from '../PayPal/PayPal';
// import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const userId = localStorage.getItem('_id');

//     const navigate = useNavigate();

//     const handlePlaceOrder = () => {
//         navigate({
//           pathname: '/paypal',
//           state: { totalPrice } // Send totalPrice as a prop through state
//         });
//       };

//     useEffect(() => {
//         const fetchCartData = async () => {
//             try {
//                 const response = await fetch('http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com/user/' + userId + '/cart/', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     setCartItems(data);
//                     const totalPrice = data.reduce((acc, item) => acc + parseFloat(item.sneaker.price.replace('$', '')), 0).toFixed(2);
//                     setTotalPrice(totalPrice);
//                 } else {
//                     throw new Error('Failed to fetch data');
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         if (userId) {
//             fetchCartData();
//         }
//     }, [userId]);

//     const handleDelete = async (sneakerId) => {
//         console.log(sneakerId);
//         setIsDeleting(true);
//         try {
//             const response = await fetch(`http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com/user/cart/remove/${sneakerId}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ userId }),
//             });

//             if (response.ok) {
//                 setCartItems(cartItems.filter(item => item.sneaker._id !== sneakerId));
//                 const updatedTotalPrice = cartItems
//                     .filter(item => item.sneaker._id !== sneakerId)
//                     .reduce((acc, item) => acc + parseFloat(item.sneaker.price.replace('$', '')), 0)
//                     .toFixed(2);
//                 setTotalPrice(updatedTotalPrice);
//                 setIsDeleting(false);
//             } else {
//                 throw new Error('Failed to delete');
//             }
//         } catch (error) {
//             console.error('Error deleting item:', error);
//             setIsDeleting(false);
//         }
//     };

//     return (
//         <>
//             <Navigation />
//             <div className="d-flex justify-content-center">
//                 <div className='row cart-container'>
//                     <h4 className='cart-title'>Sneakers in your bag :</h4>
//                     {cartItems.map((item, index) => (
//                         <div className='row'>
//                             <div className='col-md-6'>
//                                 <img src={item.sneaker.assets.img[0]} height={60} width={60} alt="sneaker-image" style={{ borderRadius: '8px', marginRight: '10px' }} />
//                                 <h7>{item.sneaker.brand} {item.sneaker.modelName} - ${item.sneaker.price}</h7>
//                             </div>
//                             <div className='col-md-6'>
//                                 {isDeleting ? (
//                                     <Spinner />
//                                 ) : (
//                                     <button type="button" className='delete-button' onClick={() => handleDelete(item.sneaker._id)}>Delete</button>
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                     <h6 className='total-price'>Total : $ {totalPrice}</h6>
//                     <form>
//                         <h4 className='address-title'>Enter your address :</h4>
//                         <div className="row mb-3 cart-form-row">
//                             <div className="col">
//                                 <label htmlFor="streetAddress1" className="form-label">Street Address 1</label>
//                                 <input type="text" className="form-control" id="streetAddress1" />
//                             </div>
//                             <div className="col">
//                                 <label htmlFor="streetAddress2" className="form-label">Street Address 2</label>
//                                 <input type="text" className="form-control" id="streetAddress2" />
//                             </div>
//                         </div>
//                         <div className="row mb-3 cart-form-row">
//                             <div className="col">
//                                 <label htmlFor="city" className="form-label">City</label>
//                                 <input type="text" className="form-control" id="city" />
//                             </div>
//                             <div className="col">
//                                 <label htmlFor="state" className="form-label">State</label>
//                                 <input type="text" className="form-control" id="state" />
//                             </div>
//                         </div>
//                         <div className="row mb-3 cart-form-row">
//                             <div className="col">
//                                 <label htmlFor="pinCode" className="form-label">Pin Code</label>
//                                 <input type="text" className="form-control" id="pinCode" />
//                             </div>
//                         </div>
//                         <div className="row mb-3 cart-form-row">
//                             <div className="col">
//                                     <button type="button" className='shop-now-button' onClick={() => {
//                                         navigate('/order-confirmation', { state: { word: 'example' } });
//                                     }}>
//                                         Place Order
//                                     </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Cart;

