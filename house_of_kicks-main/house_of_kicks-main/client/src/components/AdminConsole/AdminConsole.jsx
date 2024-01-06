import React, { useEffect, useState } from 'react';
import './AdminConsoleStyles/adminConsoleStyles.css'
import SneakerSalesPieChart from '../Analytics/SneakersSalePieChart';
import TopUsersComposedChart from '../Analytics/TopUsersComposedChart';
import TopPreferredSneakersRadarChart from '../Analytics/TopPreferredSneakersScatterChart ';
import SneakerOrdersBarChart from '../Analytics/SneakerOrdersBarChart';
import SneakerOrdersRadialBarChart from '../Analytics/SneakerOrdersBarChart';
import { deleteUser, logout } from '../../api/api';
import routes from '../../Routes';


const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token');


  const sneakerSalesData = [
    { name: 'Nike', salesPercentage: '25%' },
    { name: 'Adidas', salesPercentage: '35%' },
    { name: 'New Balance', salesPercentage: '40%' },

  ];

  const topUsersData = [
    {
      username: 'Hrigved',
      orders: 11,
      totalProfit: 1500,
    },
    {
      username: 'Ayush',
      orders: 13,
      totalProfit: 1800,
    },
    {
      username: 'Aayush',
      orders: 15,
      totalProfit: 1900,
    },
  ];


  const topPreferredSneakersData = [
    {
      sneaker: 'Nike Air Max',
      comfort: 9,
      durability: 8,
      style: 9,
      price: 7,
      popularity: 10,
    },
    {
      sneaker: 'Adidas UltraBoost',
      comfort: 10,
      durability: 7,
      style: 8,
      price: 8,
      popularity: 9,
    },
    {
      sneaker: 'New Balance 990',
      comfort: 9,
      durability: 9,
      style: 7,
      price: 6,
      popularity: 8,
    },
  ];

  const sneakerOrdersData = [
    { sneaker: 'Air Max', orders: 150 },
    { sneaker: 'UltraBoost', orders: 120 },
    { sneaker: 'NB 990', orders: 90 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com/users');
        const data = await response.json();
        const filteredData = data.filter(user => user.email !== 'admin.a@houseofkicks.com');
        setUsers(filteredData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  const CustomLegend = ({ data }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {data.map((item, index) => (
          <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: item.fill, marginRight: '5px' }}></div>
            <span>{item.sneaker}</span>
          </div>
        ))}
      </div>
    );
  };

  // Function to handle deleting a user
  const handleDeleteUser = async (userId) => {
    try {
      const response = await deleteUser(userId);
      if (response) {
        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers);
        console.log('User deleted successfully!');
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  const handleLogout = async () => {
    const isLogOut = await logout();
    if (isLogOut === true) {
      localStorage.clear();
      window.location.href = routes.base;
    }
  };

  return (
    <div className="admin-page">
      <div className='top-row'>
        <h1>Admin Console</h1>
        <button
          className="logout-button dim"
          style={{ backgroundColor: '#050D14', color: 'white', border: '1px solid white' }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="admin-cards-container">
        {/* Placeholder for three cards */}
        <div className="admin-card">
          <h4>Our Top Sale Contributors</h4>
          <SneakerSalesPieChart data={sneakerSalesData} />
        </div>
        <div className="admin-card">
          <h4>Top Profit makers this week</h4>
          <TopUsersComposedChart data={topUsersData} />
        </div>
        <div className="admin-card">

          <h4>Top selling Sneakers of the Month</h4>

          <SneakerOrdersBarChart data={sneakerOrdersData} />


        </div>
      </div>

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user._id)}>Delete User</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
