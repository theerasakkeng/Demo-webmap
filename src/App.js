import React,{useState} from 'react'
import Mapview from './Components/Mapview'
import AppSearch from './Components/AppSearch'
import stationData from './Data/station.json'
function App() {
  const[searchStation,setsearchStation] = useState('')
  const filterStation = stationData.features.filter((station)=>{
    return station.properties.NAMET.includes(searchStation);
  }); 
  return (
    <div className="App">
      <AppSearch value={searchStation} onValuechange={setsearchStation} filterStation={filterStation} />
      <Mapview stationData={stationData} filterStation={filterStation}/>
     </div>
  );
}
export default App;
