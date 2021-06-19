import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeDetails from './EmployeeDetails';
import StudentDetails from './StudentDetails';
import ShoppingDetails from './ShoppingDetails';
import './Common.css';

function App() {
  return (
    <div className="App">
      <div className="dv_title">HOC Example</div>
      <EmployeeDetails title="Employee <Click Me>" />
      <StudentDetails title="Student <Click Me>" />
      <ShoppingDetails title="Customer <Click Me>" />
    </div>
  );
}

export default App;
