import "./NavContainer.scss"
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import { useState } from "react";
import { useEffect } from "react";
import HomeContainer from "../HomeContainer/HomeContainer";

const NavContainer = (props) => {
    const {setBeerData, beerData, getBeerData} = props;
    const [search,setSearch] = useState([])
    const [abvChecked, setAbvChecked] = useState(true)
    const [mappedBeers, setMappedBeers] = useState ([])

    const handleInput = (event) => {
        const cleanedInput = event.target.value.toLowerCase();
        setSearch(cleanedInput)
    }

    

    const filteredBeer = mappedBeers.filter((beer) => {
        const lowerCaseBeer = beer.name.toLowerCase();

        return lowerCaseBeer.includes(search)
    })

    const resultsCounter = filteredBeer.length;

    const totalCounter= beerData.length;

    const onPageLoadMap = () => {setMappedBeers(beerData.map((beer) => {
        return beer;
    }))}

    useEffect(setSearch,[])
    useEffect(onPageLoadMap, [])




    const handleCheck = (event) => {
        
        return setAbvChecked(!abvChecked),
        placeholder()
    }
 
    const placeholder = () => {
        console.log(abvChecked)
        if (abvChecked === true) {
            setMappedBeers( beerData.filter((beer) => {
                return beer.abv >= 6 
            }))
            console.log(mappedBeers)
        } else (
            setMappedBeers(beerData.map((beer) => {
                return beer;
            }))
        )
    }


    return (
        <div>
            <h1>PLACEHOLDERTITLE</h1>
            <SearchBar  search={search} handleInput={handleInput}/>
           
            <div>
                <h1>Filters:</h1>
                <Filters handleCheck= {handleCheck} abvChecked= {abvChecked}/>
            </div>
            {search && <div className="test">
                <HomeContainer beerArr = {filteredBeer} />
                <h4>Displaying {resultsCounter} of {totalCounter} possible matches.</h4>
            </div>}
        </div>
    )
}

export default NavContainer;