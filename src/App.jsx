import HomeContainer from "./containers/HomeContainer/HomeContainer";
import NavContainer from "./containers/NavContainer/NavContainer";
import "./App.scss";


import { useState, useEffect } from "react"


function App() {

  const [beerData, setBeerData] = useState();
  const [customActive, setCustomActive] = useState(false)


  const getBeerData = () => {
    fetch ("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .then ((data) => {
      setBeerData(data)
    })
  }

  // const getCustomData = () => {
  //   fetch ("192.168.0.198:3012/custom/")
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .then ((data) => {
  //     setBeerData(data)
  //     console.log(data)
  //   })
  // }

  const getCustomData = () => {
    fetch ("localhost:3012/custom/",
      {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    }
)
    .then((res) => {
      return res.json()
    })
    .then ((data) => {
      setBeerData(data)
      console.log(data)
    })
  }
  

  useEffect(getBeerData, [])
 
 

 




  return (
    <div className="App">
      <button onClick = {getCustomData}>CUSTOM</button>
      {beerData&& <NavContainer beerData={beerData} />}
      {beerData && <HomeContainer beerArr={beerData}/>}
    </div>
  );
  }

export default App;
