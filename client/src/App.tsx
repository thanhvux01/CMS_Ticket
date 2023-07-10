import React from 'react';
import { Route,Routes, BrowserRouter} from "react-router-dom";
import TicketList from './pages/TicketList/TicketList';
import Package from './pages/Package';
import ForControl from './pages/ForControl';
import Chart from './pages/Chart';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<TicketList/>} />
      <Route path='/' element={<Package/>} />
      <Route path='/package' element={<Package/>} />
      <Route path='/for-control' element={<ForControl/>} />
      <Route path='/chart' element={<Chart/>} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
      
  );
}

export default App;
