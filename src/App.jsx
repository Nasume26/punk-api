import HomeContainer from "./containers/HomeContainer/HomeContainer";
import NavContainer from "./containers/NavContainer/NavContainer";
import "./App.scss";


import { useState, useEffect } from "react"


function App() {

  const [beerData, setBeerData] = useState();
  const [beerPage2, setBeerPage2] = useState();

  const getBeerData = () => {
    fetch ("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    .then((res) => {
      return res.json()
    })
    .then ((data) => {
      setBeerData(data)
    })
  }

  

  useEffect(getBeerData, [])
 

 




  return (
    <div className="App">
      {beerData&& <NavContainer beerData={beerData} />}
      {beerData && <HomeContainer beerArr={beerData}/>}
    </div>
  );
  }

export default App;
