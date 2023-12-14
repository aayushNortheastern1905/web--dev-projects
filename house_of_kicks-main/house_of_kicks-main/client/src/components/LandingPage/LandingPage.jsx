// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './LandingPage.css'; // Create a CSS file for styling
// import Catalog from '../Catalog/Catalog';
// import Footer from '../Footer/Footer'
// import Navigation from '../Navigation/Navigation';

// const LandingPage = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const bestSellers = [
//     {
//       "assets": {
//         "img": [
//           "https://drive.google.com/uc?id=1C2ZEIYj7uo-MY7wOo0JMApbOQ9S-F7b4",
//           "https://drive.google.com/uc?id=1xhhs7qbIAmk2_D8EYTRJots3kQsivMqK",
//           "https://drive.google.com/uc?id=1ZO48CxRoyF4256tYMEpamOyQ-tp3Oa1O",
//           "https://drive.google.com/uc?id=16DlqXmoRSue27vCGyfcaOWN0laMFj961",
//           "https://drive.google.com/uc?id=1oV5Aglyo8cFixqYrpbH1nXxIEJZw-Clu",
//           "https://drive.google.com/uc?id=1adMypitpvVNeuPrLnw3HorE9R_ajqoNH",
//           "https://drive.google.com/uc?id=1AbprzpjHjnQn8z6dtN7G61MSAVqq3NfO"
//         ],
//         "vid": [],
//         "mtl": []
//       },
//       "_id": "6570a0349a4b9b944922a1e7",
//       "brand": "Nike",
//       "modelName": "Dunk High Premium",
//       "gender": "Unisex",
//       "availableSizes": [
//         6,
//         7,
//         7.5,
//         8.5,
//         9,
//         9.5,
//         10,
//         10.5,
//         11,
//         11.5,
//         12
//       ],
//       "rating": 3,
//       "description": "The Nike Dunk High Premium, an iconic silhouette, epitomizes street-style culture with its bold design and premium materials. Its high-top profile, leather overlays, and padded collar offer both durability and comfort for everyday wear. Renowned for its versatility, the Dunk High Premium's colorways and collaborations continually captivate sneaker enthusiasts worldwide. From the basketball courts to urban fashion, this classic remains a symbol of self-expression and timeless sneaker culture.",
//       "ankleType": "High",
//       "createdAt": "2023-12-06T16:24:20.174Z",
//       "updatedAt": "2023-12-06T17:21:31.744Z",
//       "__v": 0,
//       "price": "170"
//     },
//     {
//       "assets": {
//         "img": [
//           "https://drive.google.com/uc?id=1K0ScdJJ0J9Rm8JTUEMtZskH7pX03mjvF",
//           "https://drive.google.com/uc?id=1LprkXfPpFfXKO78f2qrcKPVt0WG2ewLJ",
//           "https://drive.google.com/uc?id=1J5kB-A-H-DFEfOgRVhcWTNE6v9ERs6kU",
//           "https://drive.google.com/uc?id=1_wfEQlRpl74loo8g89lzj09m64tePtc8",
//           "https://drive.google.com/uc?id=1rtW9_6xaccUaX9xzuriH596jTmq7_JmT",
//           "https://drive.google.com/uc?id=1dn6Cyy2rCuDvMJO1drkY7LYIFRvniGse"
//         ],
//         "vid": [],
//         "mtl": []
//       },
//       "_id": "65709db99a4b9b944922a1e0",
//       "brand": "Nike",
//       "modelName": "Air Max 97",
//       "gender": "Unisex",
//       "availableSizes": [
//         6,
//         6.5,
//         7,
//         7.5,
//         8.5,
//         9,
//         9.5,
//         10,
//         10.5,
//         11,
//         12
//       ],
//       "rating": 3,
//       "description": "The Nike Air Max 97, introduced in 1997, boasts a distinctive silhouette with its full-length visible Air unit, offering unparalleled cushioning and style. Its sleek design, inspired by high-speed trains, features reflective elements and a streamlined upper, cementing its status as an icon of '90s sneaker culture. Renowned for its comfort and futuristic look, the Air Max 97 continues to captivate sneaker enthusiasts as a timeless and trendsetting shoe.",
//       "ankleType": "Low",
//       "createdAt": "2023-12-06T16:13:45.474Z",
//       "updatedAt": "2023-12-06T17:20:07.439Z",
//       "__v": 0,
//       "price": "200"
//     },
//     {
//       "assets": {
//         "img": [
//           "https://drive.google.com/uc?id=1PQrraUj7SnzGESpdeyYe-D2xBcIFW7Sy",
//           "https://drive.google.com/uc?id=1jlSHm3mwDqg2oWiTddLtykJkyBY-SXSj",
//           "https://drive.google.com/uc?id=1oCLqHubW7oopfgW4y2GS8q83aLXws0KR",
//           "https://drive.google.com/uc?id=1V3t1dkyEASlXglUMJQ3KNJExfyuZdGZS",
//           "https://drive.google.com/uc?id=1LE0htJoSOiOsKglohbmLanYL9oimeWow",
//           "https://drive.google.com/uc?id=1an8xg3RRpeu8kBKueJ6gxJP9FPIoBM8N"
//         ],
//         "vid": [],
//         "mtl": []
//       },
//       "_id": "65709f5d9a4b9b944922a1e4",
//       "brand": "Nike",
//       "modelName": "Blazer Mid 77 Vintage",
//       "gender": "Men",
//       "availableSizes": [
//         6,
//         7,
//         7.5,
//         8.5,
//         9,
//         9.5,
//         10,
//         10.5,
//         11,
//         11.5,
//         12
//       ],
//       "rating": 5,
//       "description": "The Nike Blazer Mid 77 Vintage, a timeless classic introduced in 1977, offers a retro-inspired silhouette with vintage detailing. Boasting a distressed leather upper and the iconic oversized Swoosh, it exudes a nostalgic '70s vibe while delivering modern comfort. With its vulcanized construction and Autoclave midsole, it's a fusion of heritage design and durable construction, making it a versatile choice for everyday wear. Revered for its simplicity and heritage, the Blazer Mid 77 Vintage remains an essential in sneaker collections worldwide.",
//       "ankleType": "High",
//       "createdAt": "2023-12-06T16:20:45.209Z",
//       "updatedAt": "2023-12-06T17:20:45.567Z",
//       "__v": 0,
//       "price": "140"
//     },
//     {
//       "assets": {
//         "img": [
//           "https://drive.google.com/uc?id=1cY0OaUBCutMCAhFYDUvGlJvn73D9MCRC",
//           "https://drive.google.com/uc?id=1bhIwqIqIjIGQbbpPKdg26wxL5bwF_Yo_",
//           "https://drive.google.com/uc?id=1X5PdlNAMp4c3xqK6FWhvOxhTiYvaEE2W",
//           "https://drive.google.com/uc?id=1-0l1467lh7mRRgfeqKaNG9sb0kA0PhFF",
//           "https://drive.google.com/uc?id=16saFDd-6YxJUTdnoFHnjXxREIsGxRp-d",
//           "https://drive.google.com/uc?id=1RiBetxcpmDyko620ldhZNVFAfuLAwEPn",
//           "https://drive.google.com/uc?id=1aJ-KSEtvUEDmPU5lWbkG6XFhj32hZSor"
//         ],
//         "vid": [],
//         "mtl": []
//       },
//       "_id": "6570a22d9a4b9b944922a1eb",
//       "brand": "Nike",
//       "modelName": "Pegasus 40",
//       "gender": "Women",
//       "availableSizes": [
//         6,
//         7,
//         7.5,
//         8.5,
//         9
//       ],
//       "rating": 2,
//       "description": "The Nike Pegasus 40, a pinnacle of running shoe innovation, merges responsive cushioning with lightweight support, ideal for both seasoned runners and enthusiasts. Featuring a mesh upper and Zoom Air units in the forefoot and heel, it offers a blend of comfort and energy return, ensuring a smooth ride. Renowned for its versatility and durability, the Pegasus 40 continues to evolve, staying at the forefront of performance footwear. With an emphasis on performance-driven design and technology, it remains a favorite among runners seeking superior comfort and performance.",
//       "ankleType": "Low",
//       "createdAt": "2023-12-06T16:32:45.213Z",
//       "updatedAt": "2023-12-06T17:23:16.430Z",
//       "__v": 0,
//       "price": "110"
//     },

//   ];

//   const carouselImages = [
//     'https://drive.google.com/uc?id=1Q2pO5LjHuM7srQ4Q50SvVWczgd532GzL',
//     'https://drive.google.com/uc?id=1RvJGcJcqBmB8zNkJ8-IlLsDcp2ieJ-Su',
//     'https://drive.google.com/uc?id=1fGIveY_OM2CqPfle-ItGlaQhqoNeXcWD',
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '25%',
//     beforeChange: (current, next) => setCurrentSlide(next),
//   };

//   return (
//     <div>
//       <Navigation />
//       <div className="carousel-container">
//         <Slider {...settings}>
//           {carouselImages.map((image, index) => (
//             <div key={index} className="carousel-slide">
//               <img
//                 src={image}
//                 alt={`carousel-${index}`}
//                 className={`carousel-image ${currentSlide !== index ? 'blur' : ''
//                   }`}
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className="left-aligned-text">
//         <h3>Look the bestselling sneakers :</h3>
//       </div>
//       <Catalog shoesData={bestSellers} />
//       <div className="left-aligned-text">
//         <h3>Know more about your favourite sneakers :</h3>
//       </div>
//       <div className="row sneaker-article" >
//         <div className="col-md-4">
//           <img
//             src="https://drive.google.com/uc?id=1yJ9M11hBp3Fqjjk_mDj8ZgfU7uZ7Q1MR" 
//             alt="Responsive"
//             className="img-fluid"
//           />
//         </div>
//         <div className="col-md-8">
//           <h3>The birth of American Sneaker</h3>
//           <p>Founded in 1906 in Boston, Massachusetts, New Balance began as the "New Balance Arch Support Company," specializing in arch supports and orthopedic footwear. The company pivoted to athletic shoes in the 1960s with the introduction of the "Trackster," the first running shoe with a ripple sole. This marked a turning point, establishing New Balance as a pioneer in the running shoe industry. Throughout the decades, the brand's focus on quality craftsmanship, support, and unique design, notably the iconic "N" logo, propelled it to international recognition. New Balance's commitment to domestic manufacturing, technological innovations, and collaborations has solidified its status as a global leader in athletic footwear.</p>
//           <p>
//             Despite facing competition, New Balance's dedication to quality, comfort, and innovation ensures its continued prominence in the athletic footwear.</p>
//           <button className='shop-now-button'>Shop Now</button>
//         </div>
//       </div>
//       <div className="row sneaker-article" >
//         <div className="col-md-8">
//           <h3>Tech in Sneaker culture</h3>
//           <p>Nike stands at the forefront of tech-infused footwear, integrating innovations like self-lacing capabilities with Nike Adapt technology. Advanced materials such as Flyknit ensure a lightweight and adaptive fit. The brand's commitment to sustainability is evident through the use of recycled materials and eco-friendly manufacturing. Nike consistently pushes the boundaries, aiming to create sneakers that not only meet athletic demands but also seamlessly integrate technology, offering a glimpse into the future of connected and smart footwear.</p>
//           <p>Advanced materials, such as Flyknit, ensure a lightweight and adaptive fit, showcasing the brand's commitment to cutting-edge design and technology.</p>
//           <button className='shop-now-button'>Shop Now</button>
//         </div>
//         <div className="col-md-4">
//           <img
//             src="https://drive.google.com/uc?id=1l_fmAtHAiQXXHFupJ6b3dBHDWfcRnCGT" 
//             alt="Responsive"
//             className="img-fluid"
//           />
//         </div>
//       </div>
//       <div className="row sneaker-article" >
//         <div className="col-md-4">
//           <img
//             src="https://drive.google.com/uc?id=1FMoQXGUGKzPOhfp3H_CAwxyaQxck9jeE" 
//             alt="Responsive"
//             className="img-fluid"
//           />
//         </div>
//         <div className="col-md-8">
//           <h3>Age of Athleisure</h3>
//           <p>Adidas, a global giant in sports apparel and footwear, has a profound impact on the athletic world. Founded in 1949 by Adolf Dassler, the brand's commitment to sports excellence is embedded in its DNA. Adidas sponsors top athletes, teams, and major sporting events, solidifying its presence across diverse disciplines, from soccer to basketball and running. Renowned for its iconic three-stripe logo, Adidas continually innovates, introducing performance-enhancing technologies like Boost cushioning. Beyond professional sports, Adidas fosters a culture of inclusivity and encourages active lifestyles, making its mark as a symbol of sportswear excellence globally, transcending boundaries and resonating with athletes of all levels.</p>
//           <button className='shop-now-button'>Shop Now</button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css'; 
import Catalog from '../Catalog/Catalog';
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation';

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobileView = window.innerWidth <= 768;

  const bestSellers = [
    {
      "assets": {
        "img": [
          "https://drive.google.com/uc?id=1C2ZEIYj7uo-MY7wOo0JMApbOQ9S-F7b4",
          "https://drive.google.com/uc?id=1xhhs7qbIAmk2_D8EYTRJots3kQsivMqK",
          "https://drive.google.com/uc?id=1ZO48CxRoyF4256tYMEpamOyQ-tp3Oa1O",
          "https://drive.google.com/uc?id=16DlqXmoRSue27vCGyfcaOWN0laMFj961",
          "https://drive.google.com/uc?id=1oV5Aglyo8cFixqYrpbH1nXxIEJZw-Clu",
          "https://drive.google.com/uc?id=1adMypitpvVNeuPrLnw3HorE9R_ajqoNH",
          "https://drive.google.com/uc?id=1AbprzpjHjnQn8z6dtN7G61MSAVqq3NfO"
        ],
        "vid": [],
        "mtl": []
      },
      "_id": "6570a0349a4b9b944922a1e7",
      "brand": "Nike",
      "modelName": "Dunk High Premium",
      "gender": "Unisex",
      "availableSizes": [
        6,
        7,
        7.5,
        8.5,
        9,
        9.5,
        10,
        10.5,
        11,
        11.5,
        12
      ],
      "rating": 3,
      "description": "The Nike Dunk High Premium, an iconic silhouette, epitomizes street-style culture with its bold design and premium materials. Its high-top profile, leather overlays, and padded collar offer both durability and comfort for everyday wear. Renowned for its versatility, the Dunk High Premium's colorways and collaborations continually captivate sneaker enthusiasts worldwide. From the basketball courts to urban fashion, this classic remains a symbol of self-expression and timeless sneaker culture.",
      "ankleType": "High",
      "createdAt": "2023-12-06T16:24:20.174Z",
      "updatedAt": "2023-12-06T17:21:31.744Z",
      "__v": 0,
      "price": "170"
    },
    {
      "assets": {
        "img": [
          "https://drive.google.com/uc?id=1K0ScdJJ0J9Rm8JTUEMtZskH7pX03mjvF",
          "https://drive.google.com/uc?id=1LprkXfPpFfXKO78f2qrcKPVt0WG2ewLJ",
          "https://drive.google.com/uc?id=1J5kB-A-H-DFEfOgRVhcWTNE6v9ERs6kU",
          "https://drive.google.com/uc?id=1_wfEQlRpl74loo8g89lzj09m64tePtc8",
          "https://drive.google.com/uc?id=1rtW9_6xaccUaX9xzuriH596jTmq7_JmT",
          "https://drive.google.com/uc?id=1dn6Cyy2rCuDvMJO1drkY7LYIFRvniGse"
        ],
        "vid": [],
        "mtl": []
      },
      "_id": "65709db99a4b9b944922a1e0",
      "brand": "Nike",
      "modelName": "Air Max 97",
      "gender": "Unisex",
      "availableSizes": [
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
      "rating": 3,
      "description": "The Nike Air Max 97, introduced in 1997, boasts a distinctive silhouette with its full-length visible Air unit, offering unparalleled cushioning and style. Its sleek design, inspired by high-speed trains, features reflective elements and a streamlined upper, cementing its status as an icon of '90s sneaker culture. Renowned for its comfort and futuristic look, the Air Max 97 continues to captivate sneaker enthusiasts as a timeless and trendsetting shoe.",
      "ankleType": "Low",
      "createdAt": "2023-12-06T16:13:45.474Z",
      "updatedAt": "2023-12-06T17:20:07.439Z",
      "__v": 0,
      "price": "200"
    },
    {
      "assets": {
        "img": [
          "https://drive.google.com/uc?id=1PQrraUj7SnzGESpdeyYe-D2xBcIFW7Sy",
          "https://drive.google.com/uc?id=1jlSHm3mwDqg2oWiTddLtykJkyBY-SXSj",
          "https://drive.google.com/uc?id=1oCLqHubW7oopfgW4y2GS8q83aLXws0KR",
          "https://drive.google.com/uc?id=1V3t1dkyEASlXglUMJQ3KNJExfyuZdGZS",
          "https://drive.google.com/uc?id=1LE0htJoSOiOsKglohbmLanYL9oimeWow",
          "https://drive.google.com/uc?id=1an8xg3RRpeu8kBKueJ6gxJP9FPIoBM8N"
        ],
        "vid": [],
        "mtl": []
      },
      "_id": "65709f5d9a4b9b944922a1e4",
      "brand": "Nike",
      "modelName": "Blazer Mid 77 Vintage",
      "gender": "Men",
      "availableSizes": [
        6,
        7,
        7.5,
        8.5,
        9,
        9.5,
        10,
        10.5,
        11,
        11.5,
        12
      ],
      "rating": 5,
      "description": "The Nike Blazer Mid 77 Vintage, a timeless classic introduced in 1977, offers a retro-inspired silhouette with vintage detailing. Boasting a distressed leather upper and the iconic oversized Swoosh, it exudes a nostalgic '70s vibe while delivering modern comfort. With its vulcanized construction and Autoclave midsole, it's a fusion of heritage design and durable construction, making it a versatile choice for everyday wear. Revered for its simplicity and heritage, the Blazer Mid 77 Vintage remains an essential in sneaker collections worldwide.",
      "ankleType": "High",
      "createdAt": "2023-12-06T16:20:45.209Z",
      "updatedAt": "2023-12-06T17:20:45.567Z",
      "__v": 0,
      "price": "140"
    },
    {
      "assets": {
        "img": [
          "https://drive.google.com/uc?id=1cY0OaUBCutMCAhFYDUvGlJvn73D9MCRC",
          "https://drive.google.com/uc?id=1bhIwqIqIjIGQbbpPKdg26wxL5bwF_Yo_",
          "https://drive.google.com/uc?id=1X5PdlNAMp4c3xqK6FWhvOxhTiYvaEE2W",
          "https://drive.google.com/uc?id=1-0l1467lh7mRRgfeqKaNG9sb0kA0PhFF",
          "https://drive.google.com/uc?id=16saFDd-6YxJUTdnoFHnjXxREIsGxRp-d",
          "https://drive.google.com/uc?id=1RiBetxcpmDyko620ldhZNVFAfuLAwEPn",
          "https://drive.google.com/uc?id=1aJ-KSEtvUEDmPU5lWbkG6XFhj32hZSor"
        ],
        "vid": [],
        "mtl": []
      },
      "_id": "6570a22d9a4b9b944922a1eb",
      "brand": "Nike",
      "modelName": "Pegasus 40",
      "gender": "Women",
      "availableSizes": [
        6,
        7,
        7.5,
        8.5,
        9
      ],
      "rating": 2,
      "description": "The Nike Pegasus 40, a pinnacle of running shoe innovation, merges responsive cushioning with lightweight support, ideal for both seasoned runners and enthusiasts. Featuring a mesh upper and Zoom Air units in the forefoot and heel, it offers a blend of comfort and energy return, ensuring a smooth ride. Renowned for its versatility and durability, the Pegasus 40 continues to evolve, staying at the forefront of performance footwear. With an emphasis on performance-driven design and technology, it remains a favorite among runners seeking superior comfort and performance.",
      "ankleType": "Low",
      "createdAt": "2023-12-06T16:32:45.213Z",
      "updatedAt": "2023-12-06T17:23:16.430Z",
      "__v": 0,
      "price": "110"
    },

  ];

  const carouselImages = [
    'https://drive.google.com/uc?id=120ep1ssoKLO3Z3t5UyzrT6jsPiB-AQLQ',
    'https://drive.google.com/uc?id=17PqL75Xh2-PK6OowZ0jH7bT-lsR0Egvh',
    'https://drive.google.com/uc?id=1F_3qyPR2Rm4MyXHQb2yEQSJEcdMOIQ3r',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '25%',
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div>
      <Navigation />
      <div className="carousel-container">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={image}
                alt={`carousel-${index}`}
                className={`carousel-image ${currentSlide !== index ? 'blur' : ''
                  } ${isMobileView ? 'mobile' : ''}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="left-aligned-text">
        <h3>Look the bestselling sneakers :</h3>
      </div>
      <Catalog shoesData={bestSellers} />
      <div className="left-aligned-text">
        <h3>Know more about your favourite sneakers :</h3>
      </div>
      <div className={`row sneaker-article ${isMobileView ? 'mobile' : ''}`} >
        <div className="col-md-4">
          <img
            src="https://drive.google.com/uc?id=1yJ9M11hBp3Fqjjk_mDj8ZgfU7uZ7Q1MR" 
            alt="Responsive"
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <h3 className='res'>The birth of American Sneaker</h3>
          <p className='res'>Founded in 1906 in Boston, Massachusetts, New Balance began as the "New Balance Arch Support Company," specializing in arch supports and orthopedic footwear. The company pivoted to athletic shoes in the 1960s with the introduction of the "Trackster," the first running shoe with a ripple sole. This marked a turning point, establishing New Balance as a pioneer in the running shoe industry. Throughout the decades, the brand's focus on quality craftsmanship, support, and unique design, notably the iconic "N" logo, propelled it to international recognition. New Balance's commitment to domestic manufacturing, technological innovations, and collaborations has solidified its status as a global leader in athletic footwear.</p>
          <p className='res'>
            Despite facing competition, New Balance's dedication to quality, comfort, and innovation ensures its continued prominence in the athletic footwear.</p>
          <button className='shop-now-button res'>Shop Now</button>
        </div>
      </div>
      <div className="row sneaker-article" >
        <div className="col-md-8">
          <h3 className='res'>Tech in Sneaker culture</h3>
          <p className='res'>Nike stands at the forefront of tech-infused footwear, integrating innovations like self-lacing capabilities with Nike Adapt technology. Advanced materials such as Flyknit ensure a lightweight and adaptive fit. The brand's commitment to sustainability is evident through the use of recycled materials and eco-friendly manufacturing. Nike consistently pushes the boundaries, aiming to create sneakers that not only meet athletic demands but also seamlessly integrate technology, offering a glimpse into the future of connected and smart footwear.</p>
          <p className='res'>Advanced materials, such as Flyknit, ensure a lightweight and adaptive fit, showcasing the brand's commitment to cutting-edge design and technology.</p>
          <button className='shop-now-button res'>Shop Now</button>
        </div>
        <div className="col-md-4">
          <img
            src="https://drive.google.com/uc?id=1l_fmAtHAiQXXHFupJ6b3dBHDWfcRnCGT" 
            alt="Responsive"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row sneaker-article" >
        <div className="col-md-4">
          <img
            src="https://drive.google.com/uc?id=1FMoQXGUGKzPOhfp3H_CAwxyaQxck9jeE" 
            alt="Responsive"
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <h3 className='res'>Age of Athleisure</h3>
          <p className='res'>Adidas, a global giant in sports apparel and footwear, has a profound impact on the athletic world. Founded in 1949 by Adolf Dassler, the brand's commitment to sports excellence is embedded in its DNA. Adidas sponsors top athletes, teams, and major sporting events, solidifying its presence across diverse disciplines, from soccer to basketball and running. Renowned for its iconic three-stripe logo, Adidas continually innovates, introducing performance-enhancing technologies like Boost cushioning. Beyond professional sports, Adidas fosters a culture of inclusivity and encourages active lifestyles, making its mark as a symbol of sportswear excellence globally, transcending boundaries and resonating with athletes of all levels.</p>
          <button className='shop-now-button res'>Shop Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;