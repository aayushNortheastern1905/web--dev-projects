

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchHourlyForecast } from '../api/api';
// import './HourlyForecast.css';

// const HourlyForecast = () => {
//   const { day } = useParams();
//   const [location, setLocation] = useState('');
//   const [hourlyForecastData, setHourlyForecastData] = useState(null);

//   useEffect(() => {
//     const getLocationFromLocalStorage = () => {
//       const storedLocation = localStorage.getItem('selectedLocation');
//       setLocation(storedLocation);
//     };

//     getLocationFromLocalStorage();
//   }, [location]);

//   useEffect(() => {
//     const getHourlyForecast = async () => {
//       try {
//         const data = await fetchHourlyForecast(location, day);
//         setHourlyForecastData(data);
//       } catch (error) {
//         console.error('Error fetching hourly forecast:', error);
//       }
//     };

//     if (location && day) {
//       getHourlyForecast();
//     }
//   }, [location, day]);

//   const renderHourlyForecast = () => {
//     if (!hourlyForecastData) {
//       return <p>Loading hourly forecast...</p>;
//     }

//     if (hourlyForecastData.error) {
//       return <p>Error fetching hourly forecast: {hourlyForecastData.error.message}</p>;
//     }

//     const { forecast } = hourlyForecastData;
//     if (!forecast || !Array.isArray(forecast.forecastday) || forecast.forecastday.length === 0) {
//       return <p>No hourly forecast available</p>;
//     }

//     const selectedDayForecast = forecast.forecastday[0]; // Assuming only one day's forecast is received

//     return (
//       <div>
//         <h2 className="text-align">{selectedDayForecast.date}</h2>
//         <table className="hourly-table">
//           <thead>
//             <tr>
//               <th>Time Stamp</th>
//               <th>Temperature (°C)</th>
//               <th>Weather Condition</th>
//               {/* Add other table headers as needed */}
//             </tr>
//           </thead>
//           <tbody>
//             {selectedDayForecast.hour.map((hour) => (
//               <tr key={hour.time}>
//                 <td>{hour.time}</td>
//                 <td>{hour.temp_c}°C</td>
//                 <td>
//                   <span>{hour.condition.text}</span>
//                   <img src={hour.condition.icon} alt={hour.condition.text} />
//                 </td>
//                 {/* Add other table data cells as needed */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };


//   return (
//     <div>
//       <h2 className="text-align">Hourly Forecast Report for {location || '...'}</h2>
//       {renderHourlyForecast()}
//     </div>
//   );
// };

// export default HourlyForecast;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHourlyForecast } from '../api/api';
import './HourlyForecast.css';

const HourlyForecast = ({location}) => {
  const { day } = useParams();
  const [hourlyForecastData, setHourlyForecastData] = useState(null);

  useEffect(() => {
    // const getLocationFromLocalStorage = () => {
    //   const storedLocation = localStorage.getItem('selectedLocation');
    //   return storedLocation;
    // };

    // const location = getLocationFromLocalStorage();

    const getHourlyForecast = async () => {
      try {
        const data = await fetchHourlyForecast(location, day);
        setHourlyForecastData(data);
      } catch (error) {
        console.error('Error fetching hourly forecast:', error);
      }
    };

    if (location && day) {
      getHourlyForecast();
    }
  }, [day]);

  const renderHourlyForecast = () => {
    if (!hourlyForecastData) {
      return <p>Loading hourly forecast...</p>;
    }

    if (hourlyForecastData.error) {
      return <p>Error fetching hourly forecast: {hourlyForecastData.error.message}</p>;
    }

    const { forecast } = hourlyForecastData;
    if (!forecast || !Array.isArray(forecast.forecastday) || forecast.forecastday.length === 0) {
      return <p>No hourly forecast available</p>;
    }

    const selectedDayForecast = forecast.forecastday[0]; // Assuming only one day's forecast is received

    return (
      <div>
        <h2 className="text-align">{selectedDayForecast.date}</h2>
        <table className="hourly-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature (°C)</th>
              <th>Weather Condition</th>
            </tr>
          </thead>
          <tbody>
            {selectedDayForecast.hour.map((hour) => (
              <tr key={hour.time}>
                <td>{hour.time}</td>
                <td>{hour.temp_c}°C</td>
                <td>
                  <span>{hour.condition.text}</span>
                  <img src={hour.condition.icon} alt={hour.condition.text} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-align">Hourly Forecast Report for {location || '...'}</h2>
      {renderHourlyForecast()}
    </div>
  );
};

export default HourlyForecast;
