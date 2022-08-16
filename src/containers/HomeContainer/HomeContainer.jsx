import BeerCard from "../../components/BeerCard/BeerCard"
import "./HomeContainer.scss"

const HomeContainer = (props) => {
    const {beerArr} = props;


    const renderBeer= beerArr.map((beer) => {
        return <BeerCard key = {beer.id} beerArr = {beer} />
        })


    return (
        <>
        {renderBeer}
        </>
    )
}

export default HomeContainer