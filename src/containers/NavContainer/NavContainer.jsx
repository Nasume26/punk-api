import "./NavContainer.scss"
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import { useEffect } from "react";
import HomeContainer from "../HomeContainer/HomeContainer";

const NavContainer = (props) => {
    const {setBeerData, beerData, getBeerData} = props;
    const [search,setSearch] = useState([])

    const handleInput = (event) => {
        const cleanedInput = event.target.value.toLowerCase();
        setSearch(cleanedInput)
    }

    const filteredBeer = beerData.filter((beer) => {
        const lowerCaseBeer = beer.name.toLowerCase();

        return lowerCaseBeer.includes(search)
    })

    const handleSearch = () => {

        // if (search == "") {
        //     getBeerData();
        // } else {
        //     setBeerData(filteredBeer)
        // }

    }

    useEffect(handleSearch, [search])
 


    return (
        <div>
            <h1>PLACEHOLDERTITLE</h1>
            <SearchBar  search={search} handleInput={handleInput}/>
            <div className="test">
                <HomeContainer beerArr = {filteredBeer} />
            </div>
        </div>
    )
}

export default NavContainer;