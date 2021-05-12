import React from 'react'
import '../Components/AppSearch.css'
import SearchIcon from '@material-ui/icons/Search';
var pos = [102,15];
function AppSearch(props) {
  const goTopoint = (e) =>{
    e.preventDefault()
    console.log('was click');
  }
  const {value,onValuechange} = props;
  console.log(value);
    return(
       <div className="app-search">
        <input
        className="app-search-input"
        type='text'
        placeholder='สถานีรถไฟ'
        value={value}
        onChange={(event)=>{onValuechange(event.target.value)}}
        />
        <SearchIcon className="iconsearch" onClick={goTopoint}/>
        </div>
    );
    
}
export default AppSearch;