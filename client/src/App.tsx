import React from 'react';
import { Route,Routes, BrowserRouter} from "react-router-dom";
import TicketList from './pages/TicketList/TicketList';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<TicketList/>} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
      
  );
}

export default App;
