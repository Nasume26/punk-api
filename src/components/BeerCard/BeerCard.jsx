import "./BeerCard.scss"

const BeerCard = (props) => {
    const {beerArr} = props;

    return (
        <div className="beer-card">
            <h1>{beerArr.name}</h1>
            <h4>{beerArr.tagline}</h4>
            <img src={beerArr.image_url} alt= "Beer Display" />
            <p className="beer-card__description">{beerArr.description}</p>
            <p className="beer-card__abv">ABV: {beerArr.abv}</p>
            <p class-name="beer-card__ph">pH: {beerArr.ph}</p>
            <p className="beer-card__first">First Brewed: {beerArr.first_brewed}</p>
        </div>

    )
}

export default BeerCard;