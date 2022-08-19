import "./NavContainer.scss"
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import { useState } from "react";
import { useEffect } from "react";
import HomeContainer from "../HomeContainer/HomeContainer";

const NavContainer = (props) => {
    const { beerData } = props;
    const [search,setSearch] = useState("")
    const [abvChecked, setAbvChecked] = useState(false)
    const [classicChecked,setClassicChecked] = useState(false)
    const [acidityChecked,setAcidityChecked] = useState(false)
    const [mappedBeers, setMappedBeers] = useState ([])


    //Handles input for the search box, cleans the input for filtering.
    const handleInput = (event) => {
        const cleanedInput = event.target.value.toLowerCase();
        setSearch(cleanedInput)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
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

    
    useEffect(onPageLoadMap, [])
    
    
    const handleSearchBoxOnLoad = () => {
        if (search.length <= 0) {
            setSearch("")
        }
    }

    

    const handleCheck = (event) => {
        if(event.target.name === "abv") {
            console.log(event.target.name)
            return setAbvChecked(!abvChecked),
            handleSearchBoxOnLoad()
           
        } else if (event.target.name === "classic range") {
            return setClassicChecked(!classicChecked),
            handleSearchBoxOnLoad()
        } else if (event.target.name === "acidity") {
            return setAcidityChecked(!acidityChecked),
            handleSearchBoxOnLoad()
        }

       
    }

 
    const handleCheckBooleans = () => {
         if(abvChecked === false && classicChecked === false && acidityChecked === false) {
            setMappedBeers(beerData.map((beer) => {
                return beer;
            }))
        } else if (abvChecked === true  && classicChecked === true && acidityChecked === false) {
            const multiBeerFilterArray = beerData.filter ((beer) => {
                return beer.abv >= 6
            })
            setMappedBeers(multiBeerFilterArray.filter ((beer) => {
                return beer.first_brewed.slice(-2) <= 10;
            }))
        } else if (abvChecked === true && acidityChecked === true && classicChecked === false) {
            const multiBeerFilterArray = beerData.filter ((beer) => {
                return beer.abv >= 6
            })
            setMappedBeers(multiBeerFilterArray.filter ((beer) => {
                return beer.ph <= 4.0
            }))
        } else if (classicChecked === true && acidityChecked === true && abvChecked === false) {
            const multiBeerFilterArray = beerData.filter((beer) => {
                return beer.first_brewed.slice(-2) <= 10
            })
            setMappedBeers(multiBeerFilterArray.filter((beer) => {
                return beer.ph <= 4.0
            }))
        } else if (classicChecked === true && acidityChecked === true && abvChecked === true) {
            const multiBeerFilterArray = beerData.filter((beer) => {
                return beer.abv >= 6
            })
            const multiBeerFilterArraySecondFilter = multiBeerFilterArray.filter((beer) => {
                return beer.first_brewed .slice(-2) <= 10
            })
            setMappedBeers(multiBeerFilterArraySecondFilter.filter((beer) => {
                return beer.ph <= 4.0
            }))
        } else if (abvChecked === true && classicChecked ===false && acidityChecked === false) {
            setMappedBeers( beerData.filter((beer) => {
                return beer.abv >= 6 
            }))
        } else if (classicChecked === true && abvChecked === false && acidityChecked === false ) {
            setMappedBeers ( beerData.filter((beer) => {
                return beer.first_brewed.slice(-2) <= 10;
            }))
        } else if (acidityChecked === true && abvChecked === false && classicChecked === false) {
            setMappedBeers( beerData.filter((beer) => {
                return beer.ph <= 4.0;
            }))
        }
    }
    useEffect(handleCheckBooleans, [abvChecked,classicChecked,acidityChecked])

    return (
        <>
        <div className= "nav-container">
            <h1 className="nav-container__title">Brew-Buddy</h1>
            <SearchBar  search={search} handleInput={handleInput} handleSubmit= {handleSubmit}/>
           
            <div className="nav-container__filters">
                <h1>Filters:</h1>
                <Filters handleCheck= {handleCheck} abvChecked= {abvChecked} classicChecked= {classicChecked} acidityChecked = {acidityChecked}/>
            </div>
        </div>
            {(search || abvChecked || classicChecked || acidityChecked) && <div className="search-container">
                <HomeContainer beerArr = {filteredBeer} />
                <h4 className="search-container__display">Displaying {resultsCounter} of {totalCounter} possible matches.</h4>
            </div>}
        
        </>
    )
}

export default NavContainer;