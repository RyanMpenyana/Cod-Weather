const Header = ({ onChange, onClick, value }) => {
  return (
    <>
      <header>
        <nav>
          <img src="" alt="logo" />
          <input
            type="search"
            name="search"
            id="search_bar"
            placeholder="Search for cities"
            value={value}
            onChange={onChange}
          />
          <button onClick={onClick}>click</button>
        </nav>
      </header>
    </>
  );
};
export default Header;
