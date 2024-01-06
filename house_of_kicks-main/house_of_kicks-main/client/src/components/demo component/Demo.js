import React from 'react'
import { logout } from '../../api/api';
import routes from '../../Routes';
import PriceHistoryGraph from '../PriceHistoryComponent/PriceHistoryGraph';

function Demo() {
  const _id = localStorage.getItem('_id');
const email = localStorage.getItem('email');
const token = localStorage.getItem('token');
const data = [
  { date: '2023-12-07', price: 180 },
  { date: '2023-12-09', price: 200 },
  { date: '2023-12-11', price: 170 },
  { date: '2023-12-13', price: 180 },
  { date: '2023-12-15', price: 200 },
  { date: '2023-12-17', price: 150 },
  { date: '2023-12-19', price: 90 },
  { date: '2023-12-21', price: 250 },
  // Add more data as needed
];


const handleSubmit = async (e)=>{
  const isLogOut = await logout();
  console.log( "isLogout",isLogOut)
  if(isLogOut === true){
      localStorage.clear()
    window.location.href = routes.base;
  }


}
  return (
    <>
    <div>
      <h1>I'LL PUT LANDING PAGE HERE CHILL!</h1>
      <h3>{_id}</h3>
      <h3>{email}</h3>
      <h3>{token}</h3>
    </div>
    <button onClick={handleSubmit}>
     Log Out 
    </button>
    <PriceHistoryGraph data = {data}/>
    </>
  )
}

export default Demo

