import HomeContainer from "./containers/HomeContainer/HomeContainer";
import NavContainer from "./containers/NavContainer/NavContainer";


import { useState, useEffect } from "react"


function App() {

  const [beerData, setBeerData] = useState();

  const getBeerData = () => {
    fetch ("https://api.punkapi.com/v2/beers")
    .then((res) => {
      return res.json()
    })
    .then ((data) => {
      setBeerData(data)
      console.log(beerData)
    })
  }

  useEffect(getBeerData, [])



  return (
    <div className="App">
      <NavContainer setBeerData= {setBeerData}/>
      {beerData && <HomeContainer beerArr={beerData}/>}
    </div>
  );
}

export default App;
