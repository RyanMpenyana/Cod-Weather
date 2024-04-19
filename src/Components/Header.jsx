const Header = ({ onChange, onClick, value }) => {
  return (
    <>
      <header>
        <nav>
          {/* <img src="" alt="logo" /> */}
          <div style={{ textAlign: "center" }}>
            <input
              className="input"
              type="text"
              name="search"
              id="search_bar"
              placeholder="Search for cities"
              value={value}
              onChange={onChange}
            />
            <button className="search_btn" onClick={onClick}>
              click
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
