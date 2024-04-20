import SearchIcon from "../assets/search.png";
const Header = ({ onChange, onClick, value, onSubmit }) => {
  return (
    <>
      <header>
        <nav>
          {/* <img src="" alt="logo" /> */}
          <form onSubmit={onSubmit} className="input_form">
            <input
              className="input"
              type="text"
              name="search"
              id="search_bar"
              placeholder="Search for cities"
              value={value}
              onChange={onChange}
            />
            <button className="search_btn" type="submit" onClick={onClick}>
              <img src={SearchIcon} width={20} height={20} />
            </button>
          </form>
        </nav>
      </header>
    </>
  );
};
export default Header;
