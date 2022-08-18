import "./Filters.scss"


const Filters = (props) => {
    const { abvChecked, handleCheck, classicChecked, acidityChecked } = props;
    

   


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
            <label>High Acidity (pH lower than 4)
                <input
                type = "checkbox"
                name = "acidity"
                value = {acidityChecked}
                onInput = {handleCheck}
                ></input>
            </label>
        </form>
    </>
    )
}

export default Filters;