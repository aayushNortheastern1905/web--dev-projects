// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { fetchForecast } from '../api/api';
// // import './FiveDayForecast.css';

// // const FiveDayForecast = ({ location, search, setSearch, handleSearch, error }) => {
// //   const [forecastData, setForecastData] = useState(null);

// //   const handleForecastClick = async (selectedLocation) => {
// //     try {
// //       const data = await fetchForecast(selectedLocation);
// //       setForecastData(data);
// //     } catch (error) {
// //       console.error('Error fetching forecast:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     if (location) {
// //       handleForecastClick(location);
// //     }
// //   }, [location]);

// //   const renderForecast = () => {
// //     if (!forecastData || !forecastData.forecast || !forecastData.forecast.forecastday) {
// //       return <p className="error-message">No forecast data available</p>;
// //     }

// //     const { forecastday } = forecastData.forecast;
// //     return (
// //       <div className="forecast-cards">
// //         {forecastday.map((day) => (
// //           <div key={day.date} className="forecast-card">
// //             <h3>{day.date}</h3>
// //             <p>High: {day.day.maxtemp_c}°C</p>
// //             <p>Average: {day.day.avgtemp_c}°C</p>
// //             <p>Low: {day.day.mintemp_c}°C</p>
// //             <img src={day.day.condition.icon} alt={day.day.condition.text} />
// //             <p>{day.day.condition.text}</p>
// //             <Link to={`/${day.date}`} className="forecast-link">
// //               View Hourly Forecast
// //             </Link>
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="forecast-container">
// //       <h2 className="forecast-header">5-Day Forecast in {location || '...'}</h2>
// //       <div className="search-bar">
// //         <input
// //           type="text"
// //           value={search}
// //           onChange={(e) => {
// //             setSearch(e.target.value);
// //             if (error && e.target.value.trim().length > 0) {
// //               error('');
// //             }
// //           }}
// //           placeholder="Enter location"
// //         />
// //         <button onClick={handleSearch} disabled={search.trim().length === 0 || error}>
// //           Search
// //         </button>
// //         {error && <p className="error-message">{error}</p>}
// //       </div>
// //       {renderForecast()}
// //     </div>
// //   );
// // };

// // export default FiveDayForecast;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { fetchForecast } from '../api/api';
// import './FiveDayForecast.css';

// const FiveDayForecast = ({ location }) => {
//   const [forecastData, setForecastData] = useState(null);

//   const fetchFiveDayForecast = async (selectedLocation) => {
//     try {
//       const data = await fetchForecast(selectedLocation);
//       setForecastData(data);
//     } catch (error) {
//       console.error('Error fetching forecast:', error);
//     }
//   };

//   useEffect(() => {
//     if (location) {
//       fetchFiveDayForecast(location);
//     }
//   }, [location]);

//   const renderForecast = () => {
//     if (!forecastData || !forecastData.forecast || !forecastData.forecast.forecastday) {
//       return <p className="error-message">No forecast data available</p>;
//     }

//     const { forecastday } = forecastData.forecast;
//     return (
//       <div className="forecast-cards">
//         {forecastday.map((day) => (
//           <div key={day.date} className="forecast-card">
//             <h3>{day.date}</h3>
//             <p>High: {day.day.maxtemp_c}°C</p>
//             <p>Average: {day.day.avgtemp_c}°C</p>
//             <p>Low: {day.day.mintemp_c}°C</p>
//             <img src={day.day.condition.icon} alt={day.day.condition.text} />
//             <p>{day.day.condition.text}</p>
//             <Link to={`/${day.date}`} className="forecast-link">
//               View Hourly Forecast
//             </Link>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="forecast-container">
//       <h2 className="forecast-header">5-Day Forecast in {location || '...'}</h2>
//       {renderForecast()}
//     </div>
//   );
// };

// export default FiveDayForecast;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchForecast } from '../api/api';
import './FiveDayForecast.css';

const FiveDayForecast = ({ location }) => {
  const [forecastData, setForecastData] = useState(null);

  const handleForecastClick = async (selectedLocation) => {
    try {
      const data = await fetchForecast(selectedLocation);
      setForecastData(data);
    } catch (error) {
      console.error('Error fetching forecast:', error);
    }
  };

  useEffect(() => {
    if (location) {
      handleForecastClick(location);
    }
  }, [location]);

  const renderForecast = () => {
    if (!forecastData || !forecastData.forecast || !forecastData.forecast.forecastday) {
      return <p className="error-message">No forecast data available</p>;
    }

    const { forecastday } = forecastData.forecast;
    return (
      <div className="forecast-cards">
        {forecastday.map((day) => (
          <div key={day.date} className="forecast-card">
            <h3>{day.date}</h3>
            <p>High: {day.day.maxtemp_c}°C</p>
            <p>Average: {day.day.avgtemp_c}°C</p>
            <p>Low: {day.day.mintemp_c}°C</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <p>{day.day.condition.text}</p>
            <Link to={`/${day.date}`} className="forecast-link">
              View Hourly Forecast
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
   
    <h1 className='text-align'>Weather App</h1>
    <div className="forecast-container">
      <h2 className="forecast-header">5-Day Forecast in {location || '...'}</h2>
      {renderForecast()}
    </div>
    </>
  );
};

export default FiveDayForecast;

