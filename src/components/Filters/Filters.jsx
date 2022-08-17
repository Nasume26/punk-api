import "./Filters.scss"


const Filters = (props) => {
    const { filterByAbv, abvChecked, handleCheck, classicChecked } = props;
    

   


    return (
    <>
        <form>
            <label>High ABV (Over 6%)
            <input
            type="checkbox"
            name="abv"
            value= {abvChecked}
            onInput={handleCheck}
            ></input>
            </label>
            <label>Classic Range
                <input 
                type="checkbox"
                name="classic range"
                value= {classicChecked}
                onInput={handleCheck}
                ></input>
            </label>
        </form>
        <p>ABVChecked is {abvChecked.toString()}</p>
        <p>Classic checked is {classicChecked.toString()}</p>
    </>
    )
}

export default Filters;