

const SearchBar = (props) => {
    const {search, handleInput} = props;

    return (
        <>
        <form>
            <label>Search</label>
            <input
            type="text"
            name="Search"
            value={search}
            onInput= {handleInput}
            />
        </form>
        </>
    )
}

export default SearchBar