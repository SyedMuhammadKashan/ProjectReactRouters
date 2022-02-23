import React from 'react'
import {useLocation} from 'react-router-dom';
const Dashboard = () => {
  const location=useLocation();
  
  return (
    <div>
      <h2> Dashboard component {location.state}</h2>
     
    </div>
  );
}

export default Dashboard;
