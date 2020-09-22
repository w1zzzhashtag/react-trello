import React from 'react';
import {useSelector} from 'react-redux'

import { rootState } from './redux/reducers/rootReducer'

import {
  CreateDashboard, DashboardList, DashboardPopup
} from './components'


// TODO:
// - Реализовать перетаскивание блоков (drag&drop)
// - Сохранение данных и изъятие из localStorage


const App:React.FC = () => {
  const [openDashboardPopup, setOpenDashboardPopup] = React.useState<boolean>(false) 

  const dashboardList = useSelector(({dashboardList}: rootState) => dashboardList.items)
  
  return (
    <div className="App">
      <div className="container">
        <h1>React Trello</h1>
        <CreateDashboard openPopup={setOpenDashboardPopup} />
        <div className="my-row">
            {dashboardList && dashboardList.map(item => (
              <DashboardList key={item.id} data={item}/>
            ))}
        </div>
      </div>
      <DashboardPopup 
        popupStatus={openDashboardPopup}
        closePopup={setOpenDashboardPopup} />
    </div>
  );
}

export default App;
