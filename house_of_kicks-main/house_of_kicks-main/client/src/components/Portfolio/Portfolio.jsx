import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import Navigation from '../Navigation/Navigation';
import axios from 'axios';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([
        {
            "sneaker": {
                "assets": {
                    "img": [
                        "https://drive.google.com/uc?id=1cgzzMPzJV5ggTV-XjpGJgy_LrY6KXtjk",
                        "https://drive.google.com/uc?id=120jKRHZf9mzrsun4PgSZNsoLYJ_JKX1K",
                        "https://drive.google.com/uc?id=11BTvZTvECCdMRdONgxksNmlsxi5CalAg",
                        "https://drive.google.com/uc?id=1GPGHNg4F_4gFQUJXgTeSshaSrNTnSTmk",
                        "https://drive.google.com/uc?id=1MBNfO7IyRs_9W_YiIW5PUEvD3QbQeRt-",
                        "https://drive.google.com/uc?id=1RrMW-BWhtwwGf1c1q492qriffAcSKqee"
                    ],
                    "vid": [],
                    "mtl": []
                },
                "purchaseDate": "09-23-2023",
                "_id": "656ff7449a4b9b944922a13b",
                "brand": "Nike",
                "modelName": "Air Jordan 1",
                "gender": "Men",
                "availableSizes": [
                    5.5,
                    6,
                    6.5,
                    7,
                    8.5,
                    9,
                    9.5,
                    10,
                    12
                ],
                "rating": 5,
                "description": "The Nike Air Jordan 1, a legendary silhouette, marks the genesis of the iconic Jordan legacy, designed by Peter Moore in 1985. Its high-top profile, bold colorways, and iconic Wings logo celebrate basketball heritage and cultural influence. This groundbreaking sneaker, endorsed by Michael Jordan, revolutionized the game with its performance and style. Decades later, the Air Jordan 1 remains an enduring symbol of sneaker culture, cherished for its timeless design and lasting impact.",
                "ankleType": "Low",
                "createdAt": "2023-12-06T04:23:32.830Z",
                "updatedAt": "2023-12-08T18:03:59.096Z",
                "__v": 0,
                "price": "150",
                "priceHistory": [
                    {
                        "date": "2023-09-05",
                        "price": "150",
                        "_id": "657345a423c91f0115de5a9b"
                    },
                    {
                        "date": "2023-07-18",
                        "price": "142",
                        "_id": "657345a423c91f0115de5a9c"
                    },
                    {
                        "date": "2023-05-23",
                        "price": "155",
                        "_id": "657345a423c91f0115de5a9d"
                    },
                    {
                        "date": "2023-03-12",
                        "price": "147",
                        "_id": "657345a423c91f0115de5a9e"
                    }
                ],
                "marketPrice": "140"
            }
        },
        {
            "sneaker": {
                "assets": {
                    "img": [
                        "https://drive.google.com/uc?id=1Qorku7R9UmB_E2fkyvEHxrpe-L5mXSev",
                        "https://drive.google.com/uc?id=1CbzSDYKSvA2mBlTLcRElfKceuk1owiTB",
                        "https://drive.google.com/uc?id=1X3nKBIwD_VQEoJGLSm1LUsbwtYRfF4dv",
                        "https://drive.google.com/uc?id=1oHmH4z_g6ZzAkcDcaC3IBSEEFPvxa5Xo",
                        "https://drive.google.com/uc?id=16n0p_oI5Zh8jUSqMQ2bwGhdltoBYhBtH",
                        "https://drive.google.com/uc?id=16sH-ti_fk7_RtdABrGiHVNbi8J7NZxbK"
                    ],
                    "vid": [],
                    "mtl": []
                },
                "_id": "656ff96e9a4b9b944922a13d",
                "brand": "Nike",
                "modelName": "Air Jordan 2 Retro",
                "gender": "Men",
                "availableSizes": [
                    5.5,
                    6,
                    6.5,
                    7,
                    7.5,
                    8.5,
                    9,
                    9.5,
                    10,
                    10.5,
                    11,
                    12
                ],
                "rating": 5,
                "description": "The Air Jordan 2 Retro, released in 1986, marked a shift towards luxury with Italian leather and a faux lizard skin upper. Sporting the iconic Wings logo on the tongue, this shoe's innovative design and supportive build epitomize both style and performance. With various retro releases and limited colorways, it remains a prized choice, blending heritage and sophistication in the realm of sneaker culture.",
                "ankleType": "High",
                "createdAt": "2023-12-06T04:32:46.317Z",
                "updatedAt": "2023-12-08T18:47:53.206Z",
                "__v": 0,
                "price": "200",
                "priceHistory": [
                    {
                        "date": "2023-10-01",
                        "price": "200",
                        "_id": "6570ac58e236effd2544c6ec"
                    },
                    {
                        "date": "2023-09-15",
                        "price": "210",
                        "_id": "6570ac58e236effd2544c6ed"
                    },
                    {
                        "date": "2023-08-25",
                        "price": "195",
                        "_id": "6570ac58e236effd2544c6ee"
                    },
                    {
                        "date": "2023-07-30",
                        "price": "220",
                        "_id": "6570ac58e236effd2544c6ef"
                    },
                    {
                        "date": "2023-06-15",
                        "price": "205",
                        "_id": "6570ac58e236effd2544c6f0"
                    },
                    {
                        "date": "2023-05-20",
                        "price": "230",
                        "_id": "6570ac58e236effd2544c6f1"
                    },
                    {
                        "date": "2023-04-10",
                        "price": "190",
                        "_id": "6570ac58e236effd2544c6f2"
                    },
                    {
                        "date": "2023-03-05",
                        "price": "215",
                        "_id": "6570ac58e236effd2544c6f3"
                    },
                    {
                        "date": "2023-02-15",
                        "price": "200",
                        "_id": "6570ac58e236effd2544c6f4"
                    },
                    {
                        "date": "2023-01-10",
                        "price": "225",
                        "_id": "6570ac58e236effd2544c6f5"
                    },
                    {
                        "date": "2022-12-25",
                        "price": "190",
                        "_id": "6570ac58e236effd2544c6f6"
                    }
                ],
                "marketPrice": "260",
                "purchaseDate": "10-05-2023"
            }
        },
        {
            "sneaker": {
                "assets": {
                    "img": [
                        "https://drive.google.com/uc?id=1DKMnsMRiA8Cb2zphFaikfSuixKzBZc6C",
                        "https://drive.google.com/uc?id=1eYGErITSTURLa-pBfk1OrO6hYZodWb0U",
                        "https://drive.google.com/uc?id=1u4nDgPB4sI--0RtrzMlqK-QJyNHIH5qy",
                        "https://drive.google.com/uc?id=1X6eerniFxH6p3gW3ZKyi_9CZevazLWUt",
                        "https://drive.google.com/uc?id=1QPsajR33rLECjEK4eB80DKjg-kLLqdsn",
                        "https://drive.google.com/uc?id=1ghpiaFBz5C3jjqGTZZHrD64wDpEdVHkg"
                    ],
                    "vid": [],
                    "mtl": []
                },
                "purchaseDate": "12-09-2023",
                "_id": "656ffaa29a4b9b944922a140",
                "brand": "Nike",
                "modelName": "Air Jordan 4 Craft Olive",
                "gender": "Unisex",
                "availableSizes": [
                    5.5,
                    6,
                    6.5,
                    7,
                    9,
                    9.5,
                    10,
                    10.5,
                    11,
                    12
                ],
                "rating": 4,
                "description": "The Nike Air Jordan 4 Craft Olive is a modern rendition of the classic silhouette, offering a sophisticated and refined aesthetic. Crafted with premium materials, its olive-colored suede upper exudes luxury and style. Featuring the iconic Air cushioning for comfort and a durable rubber outsole, it seamlessly blends heritage and innovation. With its subtle yet distinct colorway, this iteration pays homage to the Jordan legacy while catering to contemporary tastes.",
                "ankleType": "High",
                "createdAt": "2023-12-06T04:37:54.180Z",
                "updatedAt": "2023-12-06T17:16:42.807Z",
                "marketPrice": "190",
                "__v": 0,
                "price": "180",
                "priceHistory": [
                    {
                        "date": "2023-10-01",
                        "price": "180",
                        "_id": "6570ac7ae236effd2544c703"
                    },
                    {
                        "date": "2023-09-15",
                        "price": "190",
                        "_id": "6570ac7ae236effd2544c704"
                    },
                    {
                        "date": "2023-08-25",
                        "price": "175",
                        "_id": "6570ac7ae236effd2544c705"
                    },
                    {
                        "date": "2023-07-30",
                        "price": "200",
                        "_id": "6570ac7ae236effd2544c706"
                    },
                    {
                        "date": "2023-06-15",
                        "price": "185",
                        "_id": "6570ac7ae236effd2544c707"
                    },
                    {
                        "date": "2023-05-20",
                        "price": "210",
                        "_id": "6570ac7ae236effd2544c708"
                    },
                    {
                        "date": "2023-04-10",
                        "price": "170",
                        "_id": "6570ac7ae236effd2544c709"
                    },
                    {
                        "date": "2023-03-05",
                        "price": "195",
                        "_id": "6570ac7ae236effd2544c70a"
                    },
                    {
                        "date": "2023-02-15",
                        "price": "180",
                        "_id": "6570ac7ae236effd2544c70b"
                    },
                    {
                        "date": "2023-01-10",
                        "price": "205",
                        "_id": "6570ac7ae236effd2544c70c"
                    },
                    {
                        "date": "2022-12-25",
                        "price": "170",
                        "_id": "6570ac7ae236effd2544c70d"
                    }
                ]
            }
        }
    ]);
    let totalProfitLossAmount = 0;
    let totalInvested = 0;

    // useEffect(() => {
    //     // Fetch data using Axios
    //     axios.get('http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com/user/65735864887a0040506a443e/cart/')
    //       .then(response => {
    //         {for (let index = 0; index < response.data.length; index++) {
    //             const element = response.data[index];
    //             portfolio.push(element)
                
    //         }}
    //         setPortfolio(portfolio);
    //       })
    //       .catch(error => {
    //         console.error('Error fetching data:', error);
    //       });
    //   }, []);


    portfolio.forEach((item) => {
        const purchase = parseFloat(item.sneaker.price);
        const market = parseFloat(item.sneaker.marketPrice);
        const difference = market - purchase;

        totalProfitLossAmount += difference;
        totalInvested += purchase;

    });

    // Function to calculate profit/loss color
    const calculateProfitLossColor = (price, marketPrice) => {
        const purchase = parseFloat(price);
        const market = parseFloat(marketPrice);

        const difference = market - purchase;
        return difference < 0 ? 'red' : 'green';
    }


    // Calculate total profit/loss percentage
    const totalProfitLossPercentage = ((totalProfitLossAmount / totalInvested) * 100).toFixed(2);

    return (
        <>
            <Navigation />
            <div className='d-flex justify-content-center'>
                <div className='row portfolio-container'>
                    <h4>Your purchases :</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Model Name</th>
                                <th>Purchase Date</th>
                                <th>Purchase Price</th>
                                <th>Market Price</th>
                                <th>Total Profit / Loss</th>
                            </tr>
                        </thead>
                        <tbody>
                            {portfolio.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={item.sneaker.assets.img[0]} height={60} width={60} alt="sneaker" style={{ borderRadius: '8px', marginRight: '10px' }} />
                                        <span className='model-name' style={{ verticalAlign: 'top' }}>{item.sneaker.modelName}</span>
                                    </td>
                                    <td>{item.sneaker.purchaseDate}</td>
                                    <td>${item.sneaker.price}</td>
                                    <td>${item.sneaker.marketPrice}</td>
                                    <td style={{ color: calculateProfitLossColor(item.sneaker.price, item.sneaker.marketPrice) }}>
                                        {calculateProfitLoss(item.sneaker.price, item.sneaker.marketPrice)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <div className='row portfolio-container'>
                    <h4 className='stats-title'>Adding up :</h4>
                    <div className='row'>
                        <div className='col-md-4 text-center'>
                            <h6>
                                Total Profit / Loss Amount :
                            </h6>
                            <h3  style={{ color: totalProfitLossAmount < 0 ? 'red' : 'green' }}>{totalProfitLossAmount < 0 ? '-$' : '$'}{Math.abs(totalProfitLossAmount).toFixed(2)}</h3>
                        </div>
                        <div className='col-md-4 text-center'>
                            <h6>
                                Total Profit / Loss % :
                            </h6>
                            <h3  style={{ color: totalProfitLossPercentage < 0 ? 'red' : 'green' }}>
                                {totalProfitLossPercentage}%
                            </h3>
                        </div>
                        <div className='col-md-4 text-center'>
                            <h6>
                                Total Invested :
                            </h6>
                            <h3>
                                ${totalInvested.toFixed(2)}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

// Function to calculate profit/loss
const calculateProfitLoss = (price, marketPrice) => {
    const purchase = parseFloat(price);
    const market = parseFloat(marketPrice);

    const difference = market - purchase;
    const percentage = ((difference / purchase) * 100).toFixed(2);

    const roundedDifference = Math.abs(difference).toFixed(2);
    return `${difference >= 0 ? '+' : '-'}$${roundedDifference} (${percentage}%)`;
}


export default Portfolio;