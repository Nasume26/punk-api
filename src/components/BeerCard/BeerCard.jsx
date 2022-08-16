import "./BeerCard.scss"

const BeerCard = (props) => {
    const {beerArr} = props;

    return (
        <div className="beer-card">
            <h1>{beerArr.name}</h1>
            <h4>{beerArr.tagline}</h4>
            <img src={beerArr.image_url} alt= "Beer Display" />
            <p>{beerArr.description}</p>
            <p>ABV: {beerArr.abv}</p>
            <p>First Brewed: {beerArr.first_brewed}</p>
        </div>

    )
}

export default BeerCard;