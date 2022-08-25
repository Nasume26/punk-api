import "./NavContainer.scss"
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import { useState } from "react";
import { useEffect } from "react";
import HomeContainer from "../HomeContainer/HomeContainer";

const NavContainer = (props) => {

    //Props and useState vars. There is a state for each checkbox. 
    const { beerData } = props;
    const [search,setSearch] = useState("");
    const [abvChecked, setAbvChecked] = useState(false);
    const [classicChecked,setClassicChecked] = useState(false);
    const [acidityChecked,setAcidityChecked] = useState(false);
    const [mappedBeers, setMappedBeers] = useState ([]);



    //Handles input for the search box, cleans the input for filtering.
    const handleInput = (event) => {
        const cleanedInput = event.target.value.toLowerCase();
        setSearch(cleanedInput);
    };

    //handles the search boxes submit function. Disables it so dynamic search can function.
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    
    //Variables that contain the final step of filtering, the number of results displayed, and the total 
    //number of results to comb through
    const filteredBeer = mappedBeers.filter((beer) => {
        const lowerCaseBeer = beer.name.toLowerCase();

        return lowerCaseBeer.includes(search);
    });

    const resultsCounter = filteredBeer.length;

    const totalCounter= beerData.length;



    //This function populates the mapped beers array, and is used in conjunction with useEffect to 
    //render that data on page load.
    const onPageLoadMap = () => {setMappedBeers(beerData.map((beer) => {
        return beer;
    }))};

    useEffect(onPageLoadMap, []);
    useEffect(onPageLoadMap, [beerData])
    
 
    //This function allows the filters to populate the searchbox on check without having to enter
    //a search term. Without it the filters would display nothing without search term data.
    const handleSearchBoxOnLoad = () => {
        if (search.length <= 0) {
            setSearch("");
        };
    };

    
    //This function handles when a checkbox is ticked, and simultaneously runs the handleSearchBox func.
    const handleCheck = (event) => {
        if(event.target.name === "abv") {
            console.log(event.target.name)
            return setAbvChecked(!abvChecked),
            handleSearchBoxOnLoad();
           
        } else if (event.target.name === "classic range") {
            return setClassicChecked(!classicChecked),
            handleSearchBoxOnLoad();
        } else if (event.target.name === "acidity") {
            return setAcidityChecked(!acidityChecked),
            handleSearchBoxOnLoad();
        };
    };

 
    //The most complex function on the page, this function detects if any of the checkbox states have
    //been set to true. If so it sets the Mapped Beers state to whatever filter is necessary.
    //These can work individually or simultaneously. The useEffect runs this function every time
    //a check state is updated.
    const handleCheckBooleans = () => {
         if(abvChecked === false && classicChecked === false && acidityChecked === false) {
            setMappedBeers(beerData.map((beer) => {
                return beer;
            }));
        } else if (abvChecked === true  && classicChecked === true && acidityChecked === false) {
            const multiBeerFilterArray = beerData.filter ((beer) => {
                return beer.abv >= 6;
            });
            setMappedBeers(multiBeerFilterArray.filter ((beer) => {
                return beer.first_brewed.slice(-2) <= 10;
            }));
        } else if (abvChecked === true && acidityChecked === true && classicChecked === false) {
            const multiBeerFilterArray = beerData.filter ((beer) => {
                return beer.abv >= 6;
            });
            setMappedBeers(multiBeerFilterArray.filter ((beer) => {
                return beer.ph <= 4.0;
            }));
        } else if (classicChecked === true && acidityChecked === true && abvChecked === false) {
            const multiBeerFilterArray = beerData.filter((beer) => {
                return beer.first_brewed.slice(-2) <= 10;
            });
            setMappedBeers(multiBeerFilterArray.filter((beer) => {
                return beer.ph <= 4.0;
            }));
        } else if (classicChecked === true && acidityChecked === true && abvChecked === true) {
            const multiBeerFilterArray = beerData.filter((beer) => {
                return beer.abv >= 6;
            });
            const multiBeerFilterArraySecondFilter = multiBeerFilterArray.filter((beer) => {
                return beer.first_brewed .slice(-2) <= 10;
            });
            setMappedBeers(multiBeerFilterArraySecondFilter.filter((beer) => {
                return beer.ph <= 4.0;
            }));
        } else if (abvChecked === true && classicChecked ===false && acidityChecked === false) {
            setMappedBeers( beerData.filter((beer) => {
                return beer.abv >= 6;
            }));
        } else if (classicChecked === true && abvChecked === false && acidityChecked === false ) {
            setMappedBeers ( beerData.filter((beer) => {
                return beer.first_brewed.slice(-2) <= 10;
            }));
        } else if (acidityChecked === true && abvChecked === false && classicChecked === false) {
            setMappedBeers( beerData.filter((beer) => {
                return beer.ph <= 4.0;
            }));
        };
    };

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