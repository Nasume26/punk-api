import "./SearchBar.scss"

const SearchBar = (props) => {
    const {search, handleInput} = props;

    return (
        <div className="search-box">
        <form>
            <label>Search: </label>
            <input
            type="text"
            name="Search"
            value={search}
            onInput= {handleInput}
            />
        </form>
        </div>
    )
}

export default SearchBar