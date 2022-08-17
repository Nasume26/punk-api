import "./Filters.scss"


const Filters = (props) => {
    const { filterByAbv, abvChecked, handleCheck } = props;
    

   


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
        </form>
        <p>Checked is {abvChecked.toString()}</p>
    </>
    )
}

export default Filters;