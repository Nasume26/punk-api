import "./SearchBar.scss"

const SearchBar = (props) => {
    const {search, handleInput, handleSubmit} = props;

    return (
        <div className="search-box">
        <form onSubmit={handleSubmit}>
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