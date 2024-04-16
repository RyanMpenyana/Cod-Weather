const Header = ({ onChange, onClick }) => {
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
            onChange={onChange}
          />
          <button onClick={onClick}>click</button>
        </nav>
      </header>
    </>
  );
};
export default Header;
