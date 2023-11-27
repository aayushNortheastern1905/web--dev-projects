// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import FiveDayForecast from './components/FiveDayForecast';
// import HourlyForecast from './components/HourlyForecast';
// import { fetchLocationData, fetchForecast } from './api/api';

// const App = () => {
//   const [location, setLocation] = useState('');
//   const [search, setSearch] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const getLocation = async () => {
//       try {
//         const data = await fetchLocationData();
//         const locationName = data?.name || 'Boston';
//         setLocation(locationName);
//       } catch (error) {
//         console.error('Error fetching location:', error);
//       }
//     };

//     getLocation();
//   }, []);

//   const handleSearch = async () => {
//     if (search.trim().length === 0) {
//       setError('Please enter a valid location');
//       return;
//     }

//     try {
//       const data = await fetchForecast(search);
//       setLocation(search);
//       setSearch('');
//       setError('');
//     } catch (error) {
//       setError('Invalid location. Please try again.');
//     }
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <FiveDayForecast
//               location={location}
//               search={search}
//               setSearch={setSearch}
//               handleSearch={handleSearch}
//               error={error}
//             />
//           }
//         />
//         <Route
//           path="/:day"
//           element={<HourlyForecast />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FiveDayForecast from './components/FiveDayForecast';
import HourlyForecast from './components/HourlyForecast';
import { fetchLocationData } from './api/api'; // Update import to remove unnecessary function

const App = () => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const getLocation = async () => {
      try {
        const data = await fetchLocationData();
        const locationName = data?.name || 'Boston';
        setLocation(locationName);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    getLocation();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<FiveDayForecast location={location} />} // Pass location prop
        />
        <Route
          path="/:day"
          element={<HourlyForecast location={location} />} // No need to pass props here
        />
      </Routes>
    </Router>
  );
};

export default App;

