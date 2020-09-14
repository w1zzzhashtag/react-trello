import React from 'react';

import {
  CreateDashboard, DashboardList, DashboardPopup
} from './components'

const App:React.FC = () => {
  const [openDashboardPopup, setOpenDashboardPopup] = React.useState<boolean>(false) 

  

  return (
    <div className="App">
      <div className="container">
        <h1>React Trello</h1>
        <CreateDashboard openPopup={setOpenDashboardPopup} />
        <DashboardList />
      </div>
      <DashboardPopup 
        popupStatus={openDashboardPopup}
        closePopup={setOpenDashboardPopup} />
    </div>
  );
}

export default App;
