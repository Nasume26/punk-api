import "./NavContainer.scss"
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import { useState } from "react";
import { useEffect } from "react";
import HomeContainer from "../HomeContainer/HomeContainer";

const NavContainer = (props) => {
    const {setBeerData, beerData, getBeerData} = props;
    const [search,setSearch] = useState([])
    const [abvChecked, setAbvChecked] = useState(false)

    const handleInput = (event) => {
        const cleanedInput = event.target.value.toLowerCase();
        setSearch(cleanedInput)
    }

    const filteredBeer = beerData.filter((beer) => {
        const lowerCaseBeer = beer.name.toLowerCase();

        return lowerCaseBeer.includes(search)
    })

    const resultsCounter = filteredBeer.length;

    const totalCounter= beerData.length;

    useEffect(setSearch,[])


    const handleCheck = (event) => {

        return setAbvChecked(!abvChecked);
    }
 


    return (
        <div>
            <h1>PLACEHOLDERTITLE</h1>
            <SearchBar  search={search} handleInput={handleInput}/>
            {search && <div className="test">
                <HomeContainer beerArr = {filteredBeer} />
                <h4>Displaying {resultsCounter} of {totalCounter} possible matches.</h4>
            </div>}
            <div>
                <h1>Filters:</h1>
                <Filters handleCheck= {handleCheck} abvChecked= {abvChecked}/>
            </div>
        </div>
    )
}

export default NavContainer;